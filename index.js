const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await getContacts();
      console.table(allContacts);
      break;

    case "get":
      const contactsById = await getContactById(id);
      console.log(contactsById);
      break;

    case "add":
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContacts = await removeContact(id);
      console.log(removeContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
