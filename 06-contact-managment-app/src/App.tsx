import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewContact from './components/NewContact';
import SingleContact from "./components/SingleContact";
import EditContact from "./components/EditContact";
import { Contact } from './models/models';

function App() {
  const [contacts, setContacts] = React.useState<Contact[]>([]);

  const handleAddContact: Function = (contact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home contacts={ contacts } setContacts={ setContacts } /> } />
        <Route path='/contact'>
          <Route path=':id' element={ <SingleContact contacts={ contacts } /> }/>
          <Route path='new' element={ <NewContact handleAddContact={ handleAddContact } /> } />
          <Route path='edit/:id' element={ <EditContact contacts={ contacts } setContacts={ setContacts }/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
