import React from 'react';
import { useParams } from 'react-router-dom';
import { Contact } from '../models/models';
import '../styles/SingleContact.css';
import { useNavigate } from "react-router-dom";


interface Props {
  contacts: Contact[];
}

const SingleContact: React.FC<Props> = ({ contacts }) => {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const currentContact = contacts.find(contact => String(contact.id) === id);

  return (
    <div className='single-contact-container'>
      <div className='contact-details-card'>
        <h4 className='contact-details-header'>Contact Details</h4>
        <div className='contact-details'>
          <p className='contact-details-item'>
            <span className='contact-details-label'>Full Name:</span> {currentContact?.name}
          </p>
          <p className='contact-details-item'>
            <span className='contact-details-label'>Phone Number:</span> {currentContact?.phoneNumber}
          </p>
          <p className='contact-details-item'>
            <span className='contact-details-label'>Email:</span> {currentContact?.email}
          </p>
          <p className='contact-details-item'>
            <span className='contact-details-label'>Company:</span> {currentContact?.company}
          </p>
          <p className='contact-details-item'>
            <span className='contact-details-label'>Position:</span> {currentContact?.position}
          </p>
        </div>
        <div className='container d-flex gap-3'>
          <button className='btn btn-primary px-4' onClick={ () => navigate('/contact/edit/' + currentContact?.id ) } >Edit</button>
          <button className='btn btn-secondary' onClick={ () => navigate('/') } >Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
