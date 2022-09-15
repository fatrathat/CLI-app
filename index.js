const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

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
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "2" });
// invokeAction({
//   action: "add",
//   name: "Yevhenii Multan",
//   email: "eugene.multan@gmail.com",
//   phone: "0935563045",
// });
// invokeAction({ action: "remove", id: "A82JklAIW7ziZ7v9d0WLK" });
