import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer jumbotron">
      <div className="container">
        <div className="row ">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>{" "}
            </ul>
          </div>
          <div className="col-4 ">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-4 ">
            <div class="col-lg-4 col-md-6 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">
                Registered Office Address
              </h6>
              
             
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
