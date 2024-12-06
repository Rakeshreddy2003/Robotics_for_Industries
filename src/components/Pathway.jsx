import '../styles/Pathway.css'

function Pathway() {
    return (
        <div className="mb-5 mt-5">
            <h2 className=" container fs-1 text-center">
                Transform Your Business: Our Proven Pathway to Success
            </h2>
            <div className=" container mt-5 pathway">
                <div className=" col-lg-10 offset-lg-1 col-md-12 col-sm-12 mt-5 ">
                    <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 pathway-center">

                        <div className="col">
                            <div className="pathway-card">
                                <h3 className="text-center pathway-text">Website Visit & Initial Inquiry</h3>
                                <p className="hidden-description">
                                    - Explore Offerings <br />
                                    - Make Contact <br />
                                    - Receive Acknowledgment
                                </p>
                            </div>
                        </div>


                        <div className="col">
                            <div className="pathway-card">
                                <h3 className="text-center pathway-text">Product Demo</h3>
                                <p className="hidden-description">
                                    - Schedule Demonstration <br />
                                    - Personalized Presentation <br />
                                    - Interactive Q&A
                                </p>
                            </div>
                        </div>


                        <div className="col">
                            <div className="pathway-card">
                                <h3 className="text-center pathway-text">Agreements</h3>
                                <p className="hidden-description">
                                    - Discuss Terms <br />
                                    - Finalize Contract <br />
                                    - Establish Milestones
                                </p>
                            </div>
                        </div>


                        <div className="col">
                            <div className="pathway-card">
                                <h3 className="text-center pathway-text">Order Placement</h3>
                                <p className="hidden-description">
                                    - Confirm Requirements <br />
                                    - Provide Payment <br />
                                    - Order Confirmation
                                </p>
                            </div>
                        </div>


                        <div className="col">
                            <div className="pathway-card">
                                <h3 className="text-center pathway-text">Delivery</h3>
                                <p className="hidden-description">
                                    - Prepare Shipment <br />
                                    - Tracking Updates <br />
                                    - Confirm Receipt
                                </p>
                            </div>
                        </div>


                        <div className="col">
                            <div className="pathway-card">
                                <h3 className="text-center pathway-text">Post-Delivery Engagement</h3>
                                <p className="hidden-description">
                                    - Customer Feedback <br />
                                    - Offer Support <br />
                                    - Build Relationships
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pathway