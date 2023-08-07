import React, {useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {Contact} from "../models/models";
import '../styles/styles.css';

interface Props {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}


const EditContact: React.FC<Props> = ({ contacts, setContacts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentContact = contacts.filter((contact) => String(contact.id) === id)[0];

  const [ editedContact, setEditedContact ] = useState<Contact>(currentContact);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContacts((prevContacts) => {
      return prevContacts.map((contact) => {
        if (contact.id === currentContact.id) {
          return editedContact;
        } else {
          return contact;
        }
      });
    });
    navigate('/');
  }

  return (
    <div className='container mt-5' id='custom-css'>
      <form action="" className='d-flex flex-column gap-3 border border-1 p-3' onSubmit={ (e) => handleSubmit(e) }>
        <div>
          <label>Full Name</label>
          <input type="text" className='form-control' value={ editedContact.name } onChange={
            (e) => setEditedContact({ ...editedContact, name: e.target.value })
          } />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className='form-control' value={ editedContact.phoneNumber } onChange={
            (e) => setEditedContact({ ...editedContact, phoneNumber: e.target.value })
          } />
        </div>
        <div>
          <label>Email</label>
          <input type="text" className='form-control' value={ editedContact.email } onChange={
            (e) => setEditedContact({ ...editedContact, email: e.target.value })
          }/>
        </div>
        <div>
          <label>Company</label>
          <input type="text" className='form-control' value={ editedContact.company } onChange={
            (e) => setEditedContact({ ...editedContact, company: e.target.value })
          }/>
        </div>
        <div>
          <label>Position</label>
          <input type="text" className='form-control' value={ editedContact.position } onChange={
            (e) => setEditedContact({ ...editedContact, position: e.target.value })
          }/>
        </div>
        <div className='container d-flex justify-content-end gap-3'>
          <button type='button' className='btn btn-warning' onClick={ () => navigate('/') }>Go Back</button>
          <button type='submit' className='btn btn-secondary px-3'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditContact;
