import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import CustomCard from './CustomCard'; // Import CustomCard

export default function FlightDashboard() {
  const [currentFlightData, setCurrentFlightData] = useState({
    Departures: {},
    Arrivals: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const initialLoad = useRef({
    Departures: true,
    Arrivals: true
  });
  const previousFlightData = useRef({
    Departures: {},
    Arrivals: {}
  });

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

            // Update currentFlightData
            setCurrentFlightData((prevData) => {
              const updatedData = {
                ...prevData,
                [collectionName.charAt(0).toUpperCase() + collectionName.slice(1)]: collectionData
              };

              // Check for changes and log them
              checkForChanges(collectionName, previousFlightData.current, collectionData);
              
              // Update previous data for the specific collection
              previousFlightData.current[collectionName.charAt(0).toUpperCase() + collectionName.slice(1)] = collectionData;

              setLoading(false);
              return updatedData;
            });

            setLoading(false);
          },
          (err) => {
            console.error(`Failed to fetch data from ${collectionName}:`, err);
            setError(`Failed to fetch data from ${collectionName}`);
          }
        );
      });

      return () => {
        unsubscribes.forEach((unsubscribe) => unsubscribe());
      };
    };

    fetchCollections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array here

  const checkForChanges = (collectionName, previousData, newData) => {
    const capitalizedCollectionName = collectionName.charAt(0).toUpperCase() + collectionName.slice(1);

    if (initialLoad.current[capitalizedCollectionName]) {
      initialLoad.current[capitalizedCollectionName] = false;
      return;
    }

    const changes = {};

    // Ensure previousData and newData are defined
    const previousCollectionData = previousData[capitalizedCollectionName] || {};
    const newCollectionData = newData || {};

    // Compare previousData with newData
    Object.keys(newCollectionData).forEach((id) => {
      const previousItem = previousCollectionData[id];
      const newItem = newCollectionData[id];

      // If item is new or different from previous, add to changes
      if (!previousItem || JSON.stringify(previousItem) !== JSON.stringify(newItem)) {
        changes[id] = newItem;
      }
    });

    // Only log changes if there are any
    if (Object.keys(changes).length > 0) {
      console.log(`Changes detected in ${collectionName}:`, changes);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Extract first departure data for demonstration
  const firstFlight = Object.values(currentFlightData.Departures)[0] || {};

  return (
    <div>
      {/* <h2 className="my-4">Flight Dashboard</h2>

      <h3>Current Flight Data</h3>
      <pre>{JSON.stringify(currentFlightData, null, 2)}</pre> */}

      {/* Pass the first departure data to CustomCard */}
      <CustomCard flightData={firstFlight} />
    </div>
  );
}
