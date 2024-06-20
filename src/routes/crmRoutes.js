import { addNewContact, deleteContact, getContact, updateContact } from "../controllers/crmControllers";
import { getContacts } from "../controllers/crmControllers";
import { getContactsWithId } from "../controllers/crmControllers";

const routes = (app) => {
    app.route('/contact')


    .get((req, res, next) => {
        //middleware
        console.log(`Request de : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next();
    }, getContacts)
        

    .post(addNewContact);


    app.route('/contact/:contactId')

    .get(getContactsWithId)

    .put(updateContact)
    
    .delete(deleteContact);

}

export default routes;
