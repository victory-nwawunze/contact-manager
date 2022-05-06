/** @format */

import React from "react";
import { Link } from "react-router-dom";

let ViewContact = () => {
  return (
    <React.Fragment>
      <section className="view-contact-inro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at
                alias corrupti facilis error, culpa cupiditate ipsa, porro
                possimus fugit sapiente esse! Quod dolorum laboriosam alias
                aliquid nulla, eos ipsa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bold">Rajan</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile : <span className="fw-bold">0202888333</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email : <span className="fw-bold">Rajan@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company : <span className="fw-bold">Rajan@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title : <span className="fw-bold">Rajan@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group : <span className="fw-bold">Rajan@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={`/contacts/list`} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default ViewContact;
