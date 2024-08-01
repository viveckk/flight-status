import React, { useState, useEffect } from 'react';
import HomeMap from './HomeMap';

const CustomCard = ({ flightData = {} }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [allFlights, setAllFlights] = useState([]);

    const parseTime = (timeString) => {
        const [hours, minutes] = timeString.split(':').map(Number);
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    };


    useEffect(() => {
        const departureArray = Object.values(flightData.Departures || {}).map(flight => ({ ...flight, type: 'Departure' }));
        const arrivalArray = Object.values(flightData.Arrivals || {}).map(flight => ({ ...flight, type: 'Arrival' }));


        const combinedFlights = [...departureArray, ...arrivalArray].map(flight => ({
            ...flight,
            timeDate: parseTime(flight.time || '00:00')
        }));

        combinedFlights.sort((a, b) => {
            const now = new Date();
            return Math.abs(now - a.timeDate) - Math.abs(now - b.timeDate);
        });

        setAllFlights(combinedFlights);
        
        if (combinedFlights.length > 0) {
            const closestIndex = combinedFlights.findIndex(flight => flight.timeDate >= new Date());
            setCurrentIndex(closestIndex !== -1 ? closestIndex : 0);
        }
    }, [flightData]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % allFlights.length);
        }, 10000); 

        return () => clearInterval(intervalId); 
    }, [allFlights]);

    const currentFlight = allFlights[currentIndex] || {};

    const getField = (fieldName, fallback) => {
        return currentFlight[fieldName] || fallback;
    };

    const flightNumber = getField('flight', getField('FlightNumber', 'Flight Number'));
    const destination = getField('destination', getField('Destination', 'Destination'));
    const gate = getField('gate', getField('Gate', 'N/A'));
    const status = getField('status', getField('Status', 'Unknown'));
    const flightType = getField('type', 'Unknown');
    const time = getField('time', getField('Time', 'Unknown Time'));

    const getStatusStyle = (status) => {
        switch (status.toUpperCase()) {
            case 'ON TIME':
            case 'LANDED':
                return { backgroundColor: 'rgba(40, 167, 69, 0.1)', color: 'rgb(40, 167, 69)' }; 
            case 'CANCELLED':
            case 'DELAYED':
            case 'GATES CLOSED':
            case 'GATE CLOSED':
                return { backgroundColor: 'rgba(220, 53, 69, 0.1)', color: 'rgb(220, 53, 69)' };
            case 'GATE CLOSING':
            case 'BOARDING':
                return { backgroundColor: 'rgba(255, 102, 0, 0.1)', color: '#FF6600' }; 
            default:
                return { backgroundColor: 'rgba(0, 123, 255, 0.1)', color: 'rgb(0, 123, 255)' }; 
        }
    };

    return (
        <div className="card overflow-hidden">
            <div className="position-relative">
                <HomeMap />
            </div>
            <div className="card-body p-3 border-md-end border-inline-end-dashed">
                <div className="d-flex align-items-top mb-4">
                    <div className="me-2 lh-1">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="https://via.placeholder.com/40" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <div className="recent-recruiter">
                            <a className="fw-semibold mb-0 text-truncate" href="/ynex-js/preview/dashboards/jobs/">
                                {flightNumber}
                            </a>
                            <p className="mb-0 fs-12 text-muted text-truncate">
                                {destination}
                            </p>
                        </div>
                    </div>
                    <div>
                        <a aria-label="anchor" href="/">
                            <img style={{ width: '25px', marginTop: '10px' }} src="https://cdn-icons-png.flaticon.com/128/8106/8106549.png" alt="Go to homepage" />
                        </a>
                    </div>
                </div>
                <div className="d-flex align-items-top justify-content-between mb-2">
                    <div className="text-muted fs-12">Gate</div>
                    <div className="fw-semibold">{gate}</div>
                </div>
                <div className="d-flex align-items-top justify-content-between mb-2">
                    <div className="text-muted fs-12">Time</div>
                    <div className="fw-semibold">{time}</div>
                </div>
                <div className="d-flex align-items-top justify-content-between mb-0">
                    <div className="text-muted fs-12">Status</div>
                    <div>
                        <span 
                            className="badge"
                            style={{
                                padding: '.25rem .45rem',
                                fontWeight: '600',
                                borderRadius: '.25rem',
                                ...getStatusStyle(status)
                            }}
                        >
                            {status}
                        </span>
                    </div>
                </div>
                <div className="d-flex align-items-top justify-content-between mb-2">
                    <div className="text-muted fs-12">Type</div>
                    <div className="fw-semibold">{flightType}</div>
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
