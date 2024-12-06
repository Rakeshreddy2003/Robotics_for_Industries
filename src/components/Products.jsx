import '../styles/Products.css'

function Products() {
    return (
        <div className=" py-2">
            <h2 className='pb-2 text-center fs-1 mt-5'>Products</h2>

            <div className=" container">
                <div className=" col-lg-10 offset-lg-1  col-md-12 col-sm-12">
                    <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 justify-content-center">
                        <div className="col">
                            <div className="card  products">
                            <div className="img">
                                    <img src="https://kofshop.com/wp-content/uploads/2024/05/oraimo-Watch-4-Plus-2.01-10-KOFshop.com-0592712107.webp" alt="watch" />
                                </div>

                                <div className="card-body">
                                    <p className="card-text">Watch Out Elegant Kids GPS Tracker Smartwatch Boys and Girls with Camera,  GPS  Tracker, 4G Video and Audio Call and 5 Days Battery Run.</p>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className=" btn-sm more-btn ">Explore more</button>
                                    <button type="button" className=" btn-sm demo-btn">Get a Demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  products">
                                <div className="img">
                                    <img src="https://cdn.arstechnica.net/wp-content/uploads/2021/07/amazon-echo-dot.jpeg" alt="alexa" />
                                </div>

                                <div className="card-body">
                                    <p className="card-text">Watch Out Elegant Kids GPS Tracker Smartwatch Boys and Girls with Camera,  GPS  Tracker, 4G Video and Audio Call and 5 Days Battery Run.</p>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className=" btn-sm more-btn ">Explore more</button>
                                    <button type="button" className=" btn-sm demo-btn">Get a Demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  products">
                            <div className="img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6af8hf_h4i9u62tNphTMlt7puaUEGl49OMAoxIhqmxYxtoC3hOIDA-5W_KAP9gYJthc&usqp=CAU" alt="smart wall clock" />
                                </div>

                                <div className="card-body">
                                    <p className="card-text">Watch Out Elegant Kids GPS Tracker Smartwatch Boys and Girls with Camera,  GPS  Tracker, 4G Video and Audio Call and 5 Days Battery Run.</p>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className=" btn-sm more-btn ">Explore more</button>
                                    <button type="button" className=" btn-sm demo-btn">Get a Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Products