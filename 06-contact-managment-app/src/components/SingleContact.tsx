import React from 'react';
import { useParams } from "react-router-dom";
import { Contact } from "../models/models";
import '../styles/styles.css';

interface Props {
  contacts: Contact[];
}

const SingleContact: React.FC<Props> = ({ contacts }) => {
  const { id } = useParams<string>();
  const currentContact = contacts.filter(contact => String(contact.id) === id)[0];

  return (
    <div className='container d-flex flex-column align-items-center border border-1 mt-5' id='custom-css-2'>
      <h4 className='border-bottom mt-5'>Contact Details</h4>
      <div className='mt-2'>
        <h5 className='text-muted'>Full name: <span className='text-black'>{ currentContact.name }</span></h5>
        <h5 className='text-muted'>Phone number: <span className='text-black'>{ currentContact.phoneNumber }</span></h5>
        <h5 className='text-muted'>Email: <span className='text-black'>{ currentContact.email }</span></h5>
        <h5 className='text-muted'>Company: <span className='text-black'>{ currentContact.company }</span></h5>
        <h5 className='text-muted'>Position: <span className='text-black'>{ currentContact.position }</span></h5>
      </div>
    </div>
  );
}

export default SingleContact;
