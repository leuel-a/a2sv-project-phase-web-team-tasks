import React from 'react';
import { Contact } from '../models/models';

interface Props {
  contacts: Contact[];
}

const Home: React.FC<Props> = ({ contacts }) => {
  return (
    <>
      <h1>This is the home page.</h1>
      { contacts.map((contact) => <ul>{ contact.name }</ul>) }
    </>
  );
}

export default Home;
