import React, { useState } from 'react';
import '../styles/styles.css';
import { useNavigate } from "react-router-dom";

interface Props {
  handleAddContact: Function;
}

const NewContact: React.FC<Props> = ({ handleAddContact }) => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [position, setPosition] = useState<string>('');

  const navigate = useNavigate();

  const handleNewContactSubmit: Function = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddContact({
      name,
      phoneNumber,
      email,
      company,
      position,
      id: Date.now(),
    });
    setName('');
    setPhoneNumber('');
    setEmail('');
    setCompany('');
    setPosition('');
    navigate('/');
  }


  return (
    <div className='container d-flex justify-content-center mt-5' id='custom-css'>
      <form
        onSubmit={ (e) => handleNewContactSubmit(e) }
        id='new-contact-form'
        className='d-flex flex-column justify-content-evenly border border-1 p-3'
      >
        <div className='form-group'>
          <label className='mb-2 ms-1 fs-5'>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='form-control'
            placeholder='Enter Full Name Here'
          />
        </div>
        <div className='form-group'>
          <label className='mb-2 ms-1 fs-5'>Phone Number</label>
          <input
            type='tel'
            className='form-control'
            placeholder='Enter Phone Number Here'
            value={ phoneNumber }
            onChange={ (e) => setPhoneNumber(e.target.value) }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='mb-2 ms-1 fs-5'>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter Email Here'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='mb-2 ms-1 fs-5'>Company Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Company Name Here'
            value={company}
            onChange={ (e) => setCompany(e.target.value) }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='postion' className='mb-2 ms-1 fs-5'>Position</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Position Here'
            value={position}
            onChange={ (e) => setPosition(e.target.value) }
          />
        </div>
        <div className='container d-flex justify-content-center gap-2'>
          <button type='button' className='btn btn-secondary px-4' onClick={() => {
            setName('');
            setPhoneNumber('');
            setEmail('');
            setCompany('');
            setPosition('');
          }}>Clear</button>
          <button type='submit' className='btn btn-primary'>Submit</button>
          <button type='button' className='btn btn-warning ms-auto' onClick={() => navigate('/') }>Go Back</button>
        </div>
      </form>
    </div>
  );
}

export default NewContact;
