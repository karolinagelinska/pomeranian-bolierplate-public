import React from 'react';
import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';

export const FigmaDesign = () => {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div>
        <div className="exercise-wrapper">
          <div className="first-container">
            <p className="left-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="right-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="side-container second-container">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <p className="main-container third-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
          <p className="main-container fourth-container">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img className="snow-wolf-picture" src={snowWolf} alt="snow wolf" />
          <p className="side-container fifth-container">zapisz na później</p>
          <p className="main-container sixth-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
          <button className="button">zapisz na pózniej</button>
          <div className="main-container seventh-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              mauris cursus mattis molestie a iaculis at. Dictum varius duis at
              consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
              phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
              etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
              dictum varius duis at consectetur lorem. Massa ultricies mi quis
              hendrerit.
            </p>
            <p>
              Leo vel orci porta non pulvinar neque laoreet. In egestas erat
              imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
              sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida
              quis blandit turpis cursus in. Ornare quam viverra orci sagittis
              eu. Metus dictum at tempor commodo ullamcorper a. Vestibulum
              mattis ullamcorper velit sed ullamcorper morbi. Amet massa vitae
              tortor condimentum lacinia quis. Quis enim lobortis scelerisque
              fermentum dui faucibus in ornare. Auctor elit sed vulputate mi.
            </p>
          </div>
          <div>
            <div className="rectangle first-rectangle"></div>
            <div className="rectangle second-rectangle"></div>
            <div className="rectangle third-rectangle"></div>
          </div>
        </div>
      </div>
    </>
  );
};
