const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join("./db/contacts.json");

const listContacts = async () => {
  const json = await fs.readFile(contactsPath);
  const contacts = JSON.parse(json);
  console.table(contacts);
};

const getContactById = async (contactId) => {
  const json = await fs.readFile(contactsPath);
  const contacts = JSON.parse(json);
  console.table(contacts.filter(({ id }) => id === contactId));
};

const removeContact = (contactId) => {};

const addContact = (name, email, phone) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
