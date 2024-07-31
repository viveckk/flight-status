import React from 'react'
import Departures from './Departures'

export default function Home() {
    return (
        <div className="container w-100 mt-3 pt-5">
            <div className="row">
                {/* First column - empty */}
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">First Column Content</h5>
                            <p className="card-text">This is the content for the first Column.</p>
                        </div>
                    </div>
                </div>

                {/* Second column with two rows */}
                <div className="col-md-9">
                    <div className="row mb-4">
                        {/* First row */}
                        <div className="col-12">
                            {/* Example content for the first row */}
                            <div className="card">
                                <Departures/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Second row */}
                        <div className="col-12">
                            {/* Example content for the second row */}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Second Row Content</h5>
                                    <p className="card-text">This is the content for the second row.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
