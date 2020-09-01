import React from "react";

function Browse(props) {
  const handleChange = (e) => {
    if (e.target.files.length) {
      props.setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  // const handleUpload = async e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image.raw);

  //   await fetch("YOUR_URL", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     },
  //     body: formData
  //   });
  // };

  // console.log(props.image.preview);
  // console.log(props.image.raw);

  return (
    <div>
      <label htmlFor="upload-button">
        {props.image.preview ? (
          <img src={props.image.preview} alt="dummy" width="260" height="200" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "flex" }}
        onChange={handleChange}
      />
    </div>
  );
}

export default Browse;
