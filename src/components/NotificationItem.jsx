import React from 'react';
import '../css/NotificationItemsbar.css';

function NotificationItem({ notification }) {
  const { flightavatarUrl, flightNumber, message, timestamp, isRead } = notification;

  return (
    <div className={`notification-item ${isRead ? 'read' : ''}, p-1`}>
      <div className='row px-1'>
        <div className='col-md-2 px-1'>
          <img src={flightavatarUrl} alt={`${flightNumber}'s profile pic`} className="avatar" />
        </div>
        <div className='col-md-7 px-1'>
          <div className="notification-content">
            <span className="sender-name">{flightNumber}</span>
            <p className="message">{message}</p>
            <span className="timestamp">{timestamp}</span>
          </div>
        </div>
        <div className='col-md-3 px-1 d-flex align-items-center'>
        <div className="dropdown">
            <button
              className="btn btn-sm dropdown-caret-none"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                className="svg-inline--fa fa-ellipsis text-body"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ellipsis"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
              >
                <path
                  fill="currentColor"
                  d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="/">Mark as Unread</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationItem;