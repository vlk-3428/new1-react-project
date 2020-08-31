import React, { useState } from 'react';

function Description() {

  const [description, setDescription] = useState( {description: '',} );


  const handleChange = (e) => {
    console.log(e.target.value);
    // const name = e.target.name;
    const value = e.target.value;
    // description[name] = value;
    setDescription(value);
  }

  const save = (e) => {
    e.preventDefault();
    console.log(description);
  }

  return (
    <div>
        <form method="post" onSubmit={save}>
        <textarea id="title" placeholder="Description" rows="4" cols="35" name="description" onChange={handleChange} form="useform" ></textarea>
          
        </form>
    </div>
  );
};

export default Description;