import React, { useState, useEffect } from 'react';
import Departures from './Departures';
import Arrivals from './Arrivals';
import CustomCard from './CustomCard';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home() {
    const [flightData, setFlightData] = useState({ Departures: {}, Arrivals: {} });

    useEffect(() => {
        const fetchCollections = () => {
            const knownCollections = ['departures', 'arrivals'];

            const unsubscribes = knownCollections.map((collectionName) => {
                return onSnapshot(
                    collection(db, collectionName),
                    (querySnapshot) => {
                        const collectionData = {};
                        querySnapshot.docs.forEach((doc) => {
                            collectionData[doc.id] = doc.data();
                        });

                        setFlightData((prevData) => ({
                            ...prevData,
                            [collectionName.charAt(0).toUpperCase() + collectionName.slice(1)]: collectionData
                        }));
                    },
                    (err) => {
                        console.error(`Failed to fetch data from ${collectionName}:`, err);
                    }
                );
            });

            return () => {
                unsubscribes.forEach((unsubscribe) => unsubscribe());
            };
        };

        fetchCollections();
    }, []);

    return (
        <div className="container-fluid w-100 mt-3 pt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <CustomCard flightData={flightData} />
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="row mb-1">
                        <div className="col-12">
                            <div className="card">
                                <Departures />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <Arrivals />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
