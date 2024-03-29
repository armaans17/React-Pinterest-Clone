import React, { useState, useEffect } from "react";
import Pin from "./Pin";
import styled from "styled-components";
import "./Pinboard.css";
import AddIcon from "@material-ui/icons/Add";
import { FaQuestion } from "react-icons/fa";

const PinBoard = ({ pins }) => {
  return (
    <Wrapper>
      <Container className="mainboard__container">
        {pins.map((pin) => {
          return <Pin key={pin.id} url={pin.urls} />;
        })}
      </Container>

      <AddIcon className="icon" />
    </Wrapper>
  );
};

export default PinBoard;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 15px;
  justify-content: center;
  background-color: white;
`;

const Container = styled.div``;
