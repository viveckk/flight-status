import React from 'react'
import Departures from './Departures'
import Arrivals from './Arrivals'
import CustomCard from './CustomCard'

export default function Home() {
    return (
        <div className="container-fluid w-100 mt-3 pt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <CustomCard/>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="row mb-1">
                        <div className="col-12">
                            <div className="card">
                                <Departures/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <Arrivals/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
