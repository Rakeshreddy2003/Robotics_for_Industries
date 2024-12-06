import '../styles/Services.css'
import myImage from '../Assets/images/CtaPic.png'

function Services() {
    return (
        <div className="action-card gradient-background">

            <div className=" empower">
                <div className='empower-card'>
                    <div className='empower-cta'>
                        <div className="empower-text">
                            <p>Ready to Revolutionize Your Industry?</p>
                        </div>
                        <button type="button" className=" btn-sm cta-btn ">Talk to out Expert</button>
                    </div>
                    <div className="myImg">
                        <img src={myImage} alt="Ctapic" />
                    </div>
                </div>
            </div>

            <div className='services-card'>
                <div className='service-text'><p>Industries We Empower with AI</p></div>

                <div className=" row row-cols-3 row-cols-sm-12 row-cols-md-3 row-cols-lg-3 g-5 services-input">

                    <div className="col">
                        <div className='services '>
                            <p>Healthcare</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className='services '>
                            <p>Education</p>
                        </div>
                    </div><div className="col">
                        <div className='services '>
                            <p>Energy</p>
                        </div>
                    </div><div className="col">
                        <div className='services '>
                            <p>Automotive</p>
                        </div>
                    </div><div className="col">
                        <div className='services '>
                            <p>R&D Labs</p>
                        </div>
                    </div><div className="col">
                        <div className='services '>
                            <p>E-commerce</p>
                        </div>
                    </div><div className="col">
                        <div className='services '>
                            <p>Agriculture</p>
                        </div>
                    </div><div className="col">
                        <div className='services '>
                            <p>construction</p>
                        </div>
                    </div><div className="col">
                        <div className='services '>
                            <p>Manufacturing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Services