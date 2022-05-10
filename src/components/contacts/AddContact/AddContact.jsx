/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

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
  // Let update input function
  const updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  // Get all groups function
  const getAllGroups = async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        groups: response.data,
      });
    } catch (error) {}
  };
  useEffect(() => {
    getAllGroups();
  }, []);
  // Destructuring
  let { loading, groups, errorMessage, contact } = state;
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
                    name="name"
                    value={contact.name}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="photo"
                    value={contact.photo}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Phote URL"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="mobile"
                    value={contact.mobile}
                    onChange={updateInput}
                    type="number"
                    className="form-control"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="email"
                    value={contact.email}
                    onChange={updateInput}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="company"
                    value={contact.company}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="title"
                    value={contact.title}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select
                    name="groupId"
                    value={contact.groupId}
                    onChange={updateInput}
                    className="form-control"
                  >
                    <option value="">Select a group</option>
                    {groups.length > 0 &&
                      groups.map((group) => {
                        return <option key={group.id}>{group.name}</option>;
                      })}
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
