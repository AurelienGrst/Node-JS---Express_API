
import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    try {
        let newContact = new Contact(req.body);
        let contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.status(400).send(err);
    }
};



export const getContacts = async (req, res) => {
    try {
        const contact = await Contact.find({});
        res.json(contact);
    } catch (err) {
        res.status(400).send(err);
    }
};


export const getContactsWithId = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    } catch (err) {
        res.status(400).send(err);
    }
};


export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate({_id:req.params.contactId}, req.body, {new:true});
        res.json(contact);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findOneAndDelete({_id:req.params.contactId});
        res.json({message :"supression du contact avec succés"});
    } catch (err) {
        res.status(400).send(err);
    }
};
