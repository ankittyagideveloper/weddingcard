import React from "react";
import where1 from "../assets/images/where-1.jpg";
import where2 from "../assets/images/where-2.jpg";
import where3 from "../assets/images/where-3.jpg";
function Where() {
  return (
    <div id="whenwhere" className="whenwhere section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            {" "}
            <span className="oliven-title-meta">Questions</span>
            <h2 className="oliven-title">When & Where</h2>{" "}
          </div>
        </div>
        <div className="row">
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where1} alt="" />
            </div>
            <div className="content">
              <h5>Mehndi</h5>
              <p>
                <i className="ti-location-pin"></i> House No. 291 JF Pocket
                Ganga Nagar Meerut,Uttar Pradesh
              </p>
              <p>
                <i className="ti-time"></i>
                <span>20th November2021</span> <span>7:00pm</span>
              </p>
              <a
                href="https://www.google.com/maps/place/JF-291,+KP+Pocket,+Ganga+Nagar,+Meerut,+Uttar+Pradesh+250001/@29.0069744,77.7596037,19.5z/data=!4m19!1m13!4m12!1m4!2m2!1d77.7594771!2d29.0067639!4e1!1m6!1m2!1s0x390c7ac52a83da9b:0x6a6b4692eac8cce1!2sJF-291,+KP+Pocket,+Ganga+Nagar,+Meerut,+Uttar+Pradesh+250001!2m2!1d77.7594833!2d29.0067792!3m4!1s0x390c7ac52a83da9b:0x6a6b4692eac8cce1!8m2!3d29.0067792!4d77.7594833"
                target="_blank"
                alt="wedding-location"
                style={{ color: "#a22a27", fontWeight: "700" }}
              >
                Locate Me
              </a>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              <img src={where2} alt="" />
            </div>
            <div className="content">
              <h5>Weddding</h5>
              <p>
                <i className="ti-location-pin"></i> Paradise View Resort, Ganga
                Nagar Meerut
              </p>
              <p>
                <i className="ti-time"></i> <span>21st November2021 </span>
                {"     "}
                <span>Time-8:00pm</span>
              </p>
              <a
                href="https://www.google.com/maps/place/PARADISE+VIEW+RESORT/@29.01662,77.7601334,13z/data=!4m20!1m14!4m13!1m5!1m1!1s0x390c7ac7730dda4d:0xbd489d6bf98d2ac1!2m2!1d77.7601334!2d29.01662!1m6!1m2!1s0x390c7ac7730dda4d:0xbd489d6bf98d2ac1!2sPARADISE+VIEW+RESORT,+Meerut+-+Pauri+National+Hwy,+Meerut,+Uttar+Pradesh+250001!2m2!1d77.7601334!2d29.01662!3m4!1s0x390c7ac7730dda4d:0xbd489d6bf98d2ac1!8m2!3d29.01662!4d77.7601334"
                target="_blank"
                alt="wedding-location"
                style={{ color: "#a22a27", fontWeight: "700" }}
              >
                Locate Me
              </a>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              <img src={where3} alt="" />
            </div>
            <div className="content">
              <h5>Accomodations</h5>
              <p>
                <i className="ti-direction-alt"></i> Hotel Lime Wood (Near
                Vishal Mega Mart)
              </p>
              <p>
                <i className="ti-direction"></i>Ganga Nagar Meeurt
              </p>
              <a
                href="https://www.google.com/maps/dir/29.0067639,77.7594771/hotel+limewood+meerut/@29.0042491,77.7565893,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390c7ada3a38576b:0x9b45a461de9d050d!2m2!1d77.75861!2d29.0017312"
                target="_blank"
                alt="hotel-location"
                style={{ color: "#a22a27", fontWeight: "700" }}
              >
                Locate Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
