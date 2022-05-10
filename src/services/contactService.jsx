/** @format */

// Connect the API
import axios from "axios";
export class ContactService {
  // Get server URL
  static serverURL = `http://localhost:9000`;

  //   Get all contacts
  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts`;
    // Get Request
    return axios.get(dataURL);
  }

  // Get Single contact
  static getContact(contactId) {
    let dataURL = `${this.serverURL}/contacts/${contactId}`;
    return axios.get(dataURL);
  }

  // Get all groups data
  static getGroups() {
    let dataURL = `${this.serverURL}/groups`;
    return axios.get(dataURL);
  }

  // Get single group
  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }

  // Create a contact
  static createContact(contact) {
    let dataURL = `${this.serverURL}/contacts`;
    return axios.post(dataURL, contact);
  }
  // Update contact
  static updateContact(contact, contactId) {
    let dataURL = `${this.serverURL}/contacts/${contactId}`;
    return axios.put(dataURL, contact);
  }
}
