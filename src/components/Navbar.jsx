import React, { useState, useRef, useEffect } from 'react';
import NotificationsList from './NotificationsList';


export default function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showNindeDots, setShowNindeDots] = useState(false);
    const notificationRef = useRef(null);
    const nindeDotsRef = useRef(null);

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            flightavatarUrl: 'https://via.placeholder.com/40',
            flightNumber: 'AI375',
            message: 'Flight delayed by 30 minutes.',
            timestamp: '2 mins ago',
            isRead: false,
        },
        {
            id: 2,
            flightavatarUrl: 'https://via.placeholder.com/40',
            flightNumber: 'AI477',
            message: 'Your flight has been cancelled.',
            timestamp: '5 mins ago',
            isRead: true,
        },
        
        {
            id: 3,
            flightavatarUrl: 'https://via.placeholder.com/40',
            flightNumber: 'AI582',
            message: 'Boarding gate changed to A15.',
            timestamp: '10 mins ago',
            isRead: true,
        },
        {
            id: 4,
            flightavatarUrl: 'https://via.placeholder.com/40',
            flightNumber: 'AI711',
            message: 'New baggage allowance information available.',
            timestamp: '30 mins ago',
            isRead: false,
        },
        {
            id: 5,
            flightavatarUrl: 'https://via.placeholder.com/40',
            flightNumber: 'AI239',
            message: 'Flight status update: on time.',
            timestamp: '1 hour ago',
            isRead: false,
        },
        // Add more notifications as needed
    ]);

    const markAllAsRead = () => {
        setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
    };


    // Toggle notification dropdown visibility
    const toggleNotifications = (event) => {
        event.preventDefault();
        setShowNotifications(prev => !prev);
    };

    // Toggle NindeDots dropdown visibility
    const toggleNindeDots = (event) => {
        event.preventDefault();
        setShowNindeDots(prev => !prev);
    };

    // Handle clicks outside of the dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (nindeDotsRef.current && !nindeDotsRef.current.contains(event.target)) {
                setShowNindeDots(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-top fixed-top navbar-expand-lg" style={{ background: '#f9f9f9', display: 'flex', justifyContent: 'space-between' }} id="navbarTop">

                {/* site Logo */}
                <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                    <a className="navbar-brand me-1 me-sm-3" href="index.html">
                        <div className="d-flex align-items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/632/632579.png" alt="flight-logo" width="27" />
                            <h5 className="logo-text ms-2 d-none d-sm-block" style={{ margin: '0 0 0 5px' }}>Flight Status</h5>
                        </div>
                    </a>
                </div>

                {/* Navbar action menu */}
                <ul className="navbar-nav navbar-nav-icons flex-row">

                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search" style={{ height: '19px', width: '19px', marginBottom: '2px' }}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            href="/"
                            style={{ minWidth: '2.25rem' }}
                            role="button"
                            onClick={toggleNotifications}
                            aria-haspopup="true"
                            aria-expanded={showNotifications ? 'true' : 'false'}
                        >
                            <span className="d-block" style={{ height: '20px', width: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell" style={{ height: '20px', width: '20px' }}>
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </span>
                        </a>
                        <div
                            ref={notificationRef}
                            style={{
                                display: showNotifications ? 'block' : 'none',
                                position: 'absolute',
                                top: '100%',
                                right: '0',
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                borderRadius: '4px',
                                zIndex: 1000,
                                padding: '2px',
                                width: '300px'
                            }}
                            aria-labelledby="navbarDropdownNotification"
                        >
                            {/* Dropdown content here */}
                            {/* <p>Your notifications will appear here.</p> */}
                            <NotificationsList notifications={notifications} markAllAsRead={markAllAsRead} />
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            id="navbarDropdownNindeDots"
                            href="/"
                            role="button"
                            onClick={toggleNindeDots}
                            aria-haspopup="true"
                            aria-expanded={showNindeDots ? 'true' : 'false'}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                            </svg>
                        </a>
                        <div
                            ref={nindeDotsRef}
                            style={{
                                display: showNindeDots ? 'block' : 'none',
                                position: 'absolute',
                                top: '100%',
                                right: '0',
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                borderRadius: '4px',
                                zIndex: 1000,
                                padding: '10px',
                                width: '200px' // Adjust the width as needed
                            }}
                            aria-labelledby="navbarDropdownNindeDots"
                        >
                            {/* Dropdown content here */}
                            <p>More options will appear here.</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}
