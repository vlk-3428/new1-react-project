import React, { useState } from "react";
import styled from "styled-components";
import Description from "./Description";
import Title from "./Title";
import Browse from "./Browse";
import Button from "./Button";

const StyledCard = styled.table`
  position: relative;
  border: 1px solid #000;
  width: 250px;
  height: 400px;
`;

const Card = () => {
  const [allCards, setAllCards] = useState([
    {
      titleCard: "",
      descriptionCard: "",
      imageCard: "",
    },
  ]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const save = (e) => {
    e.preventDefault();
    console.log("butona basınca oldu");

    setAllCards([
      {
        titleCard: title,
        descriptionCard: description,
        imageCard: image.preview,
      },
      ...allCards,
    ]);
  };

  console.log(allCards, "dsdqdqwd");

  return (
    <>
      <form method="post" onSubmit={save}>
        <StyledCard>
          <Title title={title} setTitle={setTitle} />
          &nbsp;
          <Description
            description={description}
            setDescription={setDescription}
          />
          &nbsp;
          <Browse image={image} setImage={setImage} />
          <Button></Button>
        </StyledCard>
      </form>
      {allCards?.map((item) => {
        return (
          <div>
            <h6>{item.titleCard}</h6>
            <p>{item.descriptionCard}</p>
            <img src={item.imageCard} alt="dummy" width="260" height="200" />
          </div>
        );
      })}
    </>
  );
};

export default Card;
