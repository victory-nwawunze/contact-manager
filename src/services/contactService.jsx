/** @format */

// Connect the API
import axios from "axios";
export class contactService {
  // Get server URL
  static serverURL = `http://localhost:9000`;

  //   Get all contacts
  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts`;
    // Get Request
    return axios.get(dataURL);
  }
}
