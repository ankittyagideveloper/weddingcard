import React from "react";

function Organization() {
  return (
    <div id="organization" className="organization section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Wedding</span>
            <h2 className="oliven-title">Organization</h2>
          </div>
        </div>
        <div
          className="row bord-box bg-img"
          data-background="images/slider.jpg"
        >
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">01</h2>
            <h6 className="title">Lagan Sagai</h6>
            <p>Friday, 19th Nov,2021</p>
            <p>Time- 3:00PM</p>
            <p>Venue-Hotel Lime Wood</p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">Mehndi</h6>
            <p>20th Nov,2021</p>
            <p>Time- 7:00PM</p>
            <p>Venue-House no. 291 JF Pocket Ganga Nagar</p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">Madha</h6>
            <p>21st Nov,2021</p>
            <p>Time- 10:00 AM</p>
            <p>Venue-House no. 291 JF Pocket Ganga Nagar</p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">04</h2>
            <h6 className="title">Wedding</h6>
            <p>21st Nov,2021</p>
            <p>Dinner Time- 8:00 PM</p>
            <p>Venue-Paradise View Resort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
