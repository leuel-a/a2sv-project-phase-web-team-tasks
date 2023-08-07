import React from 'react';
import { Contact } from '../models/models';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

interface Props {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const Home: React.FC<Props> = ({ contacts, setContacts }) => {
  const navigate = useNavigate();
  const handleDelete = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <div className='container d-flex flex-column mt-5 align-items-start border border-1' id='custom-css'>
      <div className='container d-flex justify-content-evenly align-items-center mt-4'>
        <h3 className='text-secondary mb-3 d-block'>Contact List</h3>
        <button className='btn btn-primary px-3' onClick={ () => navigate('/contact/new') } >Add</button>
      </div>
      <ul className='list-group list-group-numbered w-100 mt-5'>
        {
          contacts.map((contact) => {
            return (
              <li className='list-group-item d-flex justify-content-evenly align-items-center'>
                <div>
                  <Link className='text-decoration-none' to={ `/contact/${contact.id}` }>{ contact.name }</Link>
                </div>
                <div>
                  <h5 className='text-muted'>{ contact.phoneNumber }</h5>
                </div>
                <button className='btn btn-secondary' onClick={ () => navigate('/contact/edit/' + contact.id) }>Edit</button>
                <button className='btn btn-danger' onClick={ () => handleDelete(contact.id) }>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Home;
