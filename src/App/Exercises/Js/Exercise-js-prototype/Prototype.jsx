import './styles.css';

export const Prototype = () => {
  //Definiowanie funkcji konstruktora
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  Object.prototype.getMake = function () {
    return this.make;
  };
  Object.prototype.getModel = function () {
    return this.model;
  };
  const myCar = new Car('Toyota', 'Camry');
  const myCar2 = new Car('Fiat', '500');

  Array.prototype.newArrayMethod = function () {
    console.log('yes, i am new global array method');
  };

  const exampleArray = [1, 2, 3];
  return (
    <>
      <div>
        Make: {myCar.getMake()}
        Model: {myCar.getModel()}
      </div>
      <div>
        Make: {myCar2.getMake()}
        Model: {myCar2.getModel()}
      </div>
      <div>{exampleArray.newArrayMethod()}</div>
    </>
  );
};
