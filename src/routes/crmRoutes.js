import { addNewContact, getContact } from "../controllers/crmControllers";
import { getContacts } from "../controllers/crmControllers";

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
    .put((req, res) =>
        res.send('demande PUT avec succés'))
    
    .delete((req,res)=> 
    res.send('demande de DELETE avec succés'));

}

export default routes;
