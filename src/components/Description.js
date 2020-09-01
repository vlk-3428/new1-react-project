import React from "react";

function Description(props) {
  const handleChange = (e) => {
    const value = e.target.value;
    props.setDescription(value);
  };

  // console.log(props.description, "description");

  return (
    <div>
      <textarea
        id="title"
        placeholder="Description"
        rows="4"
        cols="35"
        name="description"
        onChange={handleChange}
        form="useform"
      ></textarea>
    </div>
  );
}

export default Description;
