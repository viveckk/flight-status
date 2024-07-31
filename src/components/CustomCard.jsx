import React from 'react';

const CustomCard = () => {
    return (
        <div className="card overflow-hidden">
            <div className="position-relative">
                <img
                    src="https://react.spruko.com/ynex-js/preview/assets/35-WdnLC6zs.png"
                    className="card-img-top"
                    alt="map_img"
                    style={{
                        borderTopLeftRadius: '0.375rem',
                        borderTopRightRadius: '0.375rem',
                        height: '16.625rem',
                        objectFit: 'cover'
                    }}
                />
                <div className="card-img-overlay d-flex flex-column p-4 text-white" style={{ background: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-1 fs-6" style={{ opacity: 0.75, fontSize: '0.875rem' }}>Flight Number</p>
                        <div 
                            className="d-flex flex-column align-items-center" 
                            style={{
                                position: 'absolute',
                                right: '1.875rem',
                                backgroundColor: '#ffffff40',
                                padding: '0.5rem 0.625rem',
                                borderRadius: '0.3rem',
                                backdropFilter: 'blur(1.875rem)',
                                WebkitBackdropFilter: 'blur(1.875rem)'
                            }}
                        >
                            <span className="d-block fs-6 fw-bold">15</span>
                            <span className="d-block fs-6 lh-1 fw-bold">Jan</span>
                        </div>
                    </div>
                    <h6 className="fw-bold mb-4" style={{ fontSize: '1.25rem' }}>Status</h6>
                    <p
                        className="fs-6"
                        style={{
                            fontSize: '0.75rem',
                            width: '70%',
                            borderRadius: '0.5rem',
                            backgroundColor: '#ffffff40',
                            opacity: 0.8,
                            padding: '0.625rem',
                            backdropFilter: 'blur(1.875rem)',
                            WebkitBackdropFilter: 'blur(1.875rem)'
                        }}
                    >
                        From
                        To
                        <a className="text-decoration-underline text-white" href="/ynex-js/preview/dashboards/ecommerce/">
                            T&amp;C
                        </a>
                    </p>
                    <p
                        className="mb-0"
                        style={{
                            position: 'absolute',
                            bottom: '1.25rem',
                            fontSize: '0.75rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#ffffff40',
                            opacity: 0.8,
                            padding: '0.25rem 0.625rem',
                            backdropFilter: 'blur(1.875rem)',
                            WebkitBackdropFilter: 'blur(1.875rem)'
                        }}
                    >
                        time - Gate
                    </p>
                </div>
            </div>
            <div className="card-body">
                <a className="text-primary fs-5 fw-bold" href="/ynex-js/preview/dashboards/ecommerce/">
                    Biggest is back.
                </a>
                <p className="mb-4 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe
                </p>
                <button type="button" className="btn btn-primary me-2">
                    Notify Me
                </button>
                <button type="button" className="btn btn-outline-primary">
                    More details
                </button>
            </div>
        </div>
    );
};

export default CustomCard;
