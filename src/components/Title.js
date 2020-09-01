import React from "react";

function Title(props) {
  const handleChange = (e) => {
    const value = e.target.value;
    props.setTitle(value);
  };

  // console.log(props.title, "title");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
    </div>
  );
}

export default Title;
