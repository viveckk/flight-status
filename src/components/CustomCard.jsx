import React from 'react';
import HomeMap from './HomeMap';

const CustomCard = () => {
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
                            <a className="fw-semibold mb-0 text-truncate" href="/ynex-js/preview/dashboards/jobs/">Flight Number</a>
                            <p className="mb-0 fs-12 text-muted text-truncate">Flight Name</p>
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
                    <div className="fw-semibold">07</div>
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
                                backgroundColor: 'rgba(0, 123, 255, 0.1)', // Adjust this color if needed
                                color: 'rgb(0, 123, 255)' // Adjust this color if needed
                            }}
                        >
                            Delayed
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
