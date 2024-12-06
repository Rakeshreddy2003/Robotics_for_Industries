import "../styles/Choose.css";

function Choose() {
  return (
      <section className="py-2">
        <h2 className="pb-2 mt-5 fs-1 text-center">Why Partner with Us</h2>
        <div className="container mt-5 choose">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-5 justify-content-center">
           
            <div className="col">
              <div className="feature choose-card">
              <div className="choose-title"><h3>200+ Products</h3></div>
              </div>
            </div>
            <div className="col">
              <div className="feature choose-card">
                <div className="choose-title"><h3>10+ Tie-ups</h3></div>
              </div>
            </div>
            <div className="col">
              <div className="feature choose-card">
              <div className="choose-title"><h3>24/7 Availability</h3></div>
              </div>
            </div>
           
            <div className="col">
              <div className="feature choose-card">
              <div className="choose-title"><h3>ISO Certified</h3></div>
              </div>
            </div>
            <div className="col">
              <div className="feature choose-card">
              <div className="choose-title"><h3>EMI Option</h3></div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Choose;
