import React from 'react';
import NotificationItem from './NotificationItem';

function NotificationsList({ notifications, markAllAsRead }) {
    return (
        <div className="card">
            <div className="card-header p-1">
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='m-1'>Notifications</span>
                    <button className='btn btn-primary m-1' onClick={markAllAsRead}>
                        Mark all as read
                    </button>
                </div>
            </div>
            <div className="card-body p-1" style={{ maxHeight: '300px',overflowY: 'auto', overflowX: 'hidden' }}>
                <ul className="list-group">
                    {notifications.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                    ))}
                </ul>
            </div>
            <div className="card-footer p-1 d-flex justify-content-center">
                <span className='m-1'>Notifications history</span>
            </div>
        </div>
    );
}

export default NotificationsList;