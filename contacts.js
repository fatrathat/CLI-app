const fs = require("fs");
const path = require("path");

const contactsPath = path.join("./db/contacts.json");

const listContacts = () => {};

const getContactById = (contactId) => {};

const removeContact = (contactId) => {};

const addContact = (name, email, phone) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
