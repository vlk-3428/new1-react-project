import React, { useState } from 'react';

function Title(props) {

  const [title, setTitle] = useState( {title: '',});


  const handleChange = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    // title[name] = value;
    setTitle(value);
  }

  const save = (e) => {
    e.preventDefault();
    console.log(title);
  }

  return (
    <div>
        <form method="post" onSubmit={save}>
           <input type="text" placeholder="Title" name="title"  onChange={handleChange} />
           {useState}
         
        </form>
    </div>
  );
};

export default Title;