/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner";

let EditContact = () => {
  let { contactId } = useParams();
  let navigate = useNavigate();
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
  // Get a contact Id
  const getAContactId = async () => {
    try {
      setState({ ...state, loading: false });
      let response = await ContactService.getContact(contactId);
      let groupResponse = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        contact: response.data,
        groups: groupResponse.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  };
  useEffect(() => {
    getAContactId();
  }, [contactId]);

  const updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate(`/contacts/edit/${contactId}`, { replace: false });
    }
  };
  // Destructing
  let { loading, contact, groups, errorMessage } = state;
  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="add-contact p-3">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="text-primary h4 fw-bold ">Edit Contact</p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, est saepe esse minus quasi suscipit architecto
                    iste voluptatem excepturi impedit explicabo dolor vitae
                    maxime delectus nesciunt officia fugit tenetur eligendi.
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input
                        name="name"
                        onChange={updateInput}
                        value={contact.name}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        onChange={updateInput}
                        value={contact.photo}
                        type="text"
                        className="form-control"
                        placeholder="Phote URL"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="mobile"
                        onChange={updateInput}
                        value={contact.mobile}
                        type="number"
                        className="form-control"
                        placeholder="Mobile number"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="email"
                        onChange={updateInput}
                        value={contact.email}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="company"
                        onChange={updateInput}
                        value={contact.company}
                        type="text"
                        className="form-control"
                        placeholder="Company"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="title"
                        onChange={updateInput}
                        value={contact.title}
                        type="text"
                        className="form-control"
                        placeholder="Title"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        className="form-control"
                        name="groupId"
                        onChange={updateInput}
                        value={contact.groupId}
                      >
                        <option value="">Select a group</option>
                        {groups.length > 0 &&
                          groups.map((group) => {
                            return (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Update"
                      />
                      <Link className="btn btn-dark ms-2" to={`/contacts/list`}>
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img src={contact.photo} className="contact-img" />
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default EditContact;
