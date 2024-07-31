import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Import the Firestore instance

const Arrivals = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'arrivals')); // Make sure 'arrivals' matches your Firestore collection name
                const flightsData = querySnapshot.docs.map(doc => doc.data());
                setFlights(flightsData);
            } catch (error) {
                console.error("Error fetching flights: ", error);
            }
        };

        fetchFlights();
    }, []);

    return (
        <div className="card">
            <div className="justify-content-between d-sm-flex d-block card-header">
                <div className="d-flex align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/761/761561.png" alt="arrival" width="27" />
                    <div className="card-title h5 my-0" style={{ marginLeft: '5px' }}>ARRIVALS</div>
                </div>
                <div>
                    <ul className="nav nav-tabs justify-content-end nav-tabs-header mb-0 d-sm-flex d-block mt-sm-0 mt-2" role="tablist">
                        <li className="nav-item">
                            <a href="#all-arrivals" data-bs-toggle="tab" role="tab" className="nav-link active" aria-selected="true">
                                All Flights
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#delayed-arrivals" data-bs-toggle="tab" role="tab" className="nav-link" aria-selected="false">
                                Delayed
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#cancelled-arrivals" data-bs-toggle="tab" role="tab" className="nav-link" aria-selected="false">
                                Cancelled
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-0 card-body">
                <div className="tab-content">
                    <div id="all-arrivals" className="tab-pane fade show active" role="tabpanel">
                        <div className="table-responsive">
                            <div style={{ maxHeight: '193px', overflowY: 'auto' }}>
                                <table className="table card-table table-vcenter text-nowrap mb-0">
                                    <tbody>
                                        {flights.map((flight, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md me-2">
                                                                <img src="https://via.placeholder.com/40" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <span className="fs-12 text-muted">Flight Name</span>
                                                            <p className="mb-0">{flight.flight}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Arrival Time</span>
                                                        <p className="mb-0 fw-semibold">{flight.time}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Gate</span>
                                                        <p className="mb-0">{flight.gate}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Status</span>
                                                        <p className="mb-0">{flight.status}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a aria-label="anchor" href="/">
                                                        <img style={{ width: '25px', marginTop: '10px' }} src="https://cdn-icons-png.flaticon.com/128/8106/8106549.png" alt="Go to homepage" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="delayed-arrivals" className="tab-pane fade" role="tabpanel">
                        <div className="table-responsive">
                            <div style={{ maxHeight: '193px', overflowY: 'auto' }}>
                                <table className="table card-table table-vcenter text-nowrap mb-0">
                                    <tbody>
                                        {flights.filter(flight => flight.status === "DELAYED").map((flight, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md me-2">
                                                                <img src="https://via.placeholder.com/40" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <span className="fs-12 text-muted">Flight Name</span>
                                                            <p className="mb-0">{flight.flight}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Arrival Time</span>
                                                        <p className="mb-0 fw-semibold">{flight.time}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Gate</span>
                                                        <p className="mb-0">{flight.gate}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Status</span>
                                                        <p className="mb-0">{flight.status}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a aria-label="anchor" href="/">
                                                        <img style={{ width: '25px', marginTop: '10px' }} src="https://cdn-icons-png.flaticon.com/128/8106/8106549.png" alt="Go to homepage" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="cancelled-arrivals" className="tab-pane fade" role="tabpanel">
                        <div className="table-responsive">
                            <div style={{ maxHeight: '193px', overflowY: 'auto' }}>
                                <table className="table card-table table-vcenter text-nowrap mb-0">
                                    <tbody>
                                        {flights.filter(flight => flight.status === "CANCELLED").map((flight, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md me-2">
                                                                <img src="https://via.placeholder.com/40" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <span className="fs-12 text-muted">Flight Name</span>
                                                            <p className="mb-0">{flight.flight}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Arrival Time</span>
                                                        <p className="mb-0 fw-semibold">{flight.time}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Gate</span>
                                                        <p className="mb-0">{flight.gate}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Status</span>
                                                        <p className="mb-0">{flight.status}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a aria-label="anchor" href="/">
                                                        <img style={{ width: '25px', marginTop: '10px' }} src="https://cdn-icons-png.flaticon.com/128/8106/8106549.png" alt="Go to homepage" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arrivals;
