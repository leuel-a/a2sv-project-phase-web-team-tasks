import React from 'react';

interface Props {
  handleAddContact: Function;
}

const NewContact: React.FC<Props> = ({ handleAddContact }) => {
  return (
    <>
      <h1>This is the new contact page.</h1>
    </>
  );
}

export default NewContact;
