import './styles.css';
import React from 'react';

export const JsThis = () => {
  console.log(this); // this as a gobal object (window), react changes the context, it work in Vanilla Js

  function thisContext() {
    return console.log(this); // this in function
  }
  thisContext();

  const person = {
    name: 'Karolina',
    sayHello() {
      console.log(this.name); // this in object, returns value of property name
    },
    typicalJsFunction: function () {
      console.log(this.name);
    },
    arrowJsFunction: () => console.log(this?.name),
  };
  person.sayHello();
  person.typicalJsFunction();
  person.arrowJsFunction(); //in arrow function name is undefined

  class Car {
    constructor(make) {
      this.make = make;
    }
    getMake() {
      console.log(this.make);
    }
  }
  const myCar = new Car('Toyota');
  myCar.getMake();
  return <div></div>;
};
