/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

let AddContact = () => {
  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: "",
    },
    groups: [],
    errorMessage: "",
  });
  return (
    <React.Fragment>
      <pre>{JSON.stringify(state.contact)}</pre>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-success h4 fw-bold">Create Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, est saepe esse minus quasi suscipit architecto iste
                voluptatem excepturi impedit explicabo dolor vitae maxime
                delectus nesciunt officia fugit tenetur eligendi.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phote URL"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">Select a group</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Create"
                  />
                  <Link className="btn btn-dark ms-2" to={`/contacts/list`}>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default AddContact;
