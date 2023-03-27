import {useState} from 'react'
import CarShow from './CarShow';

function getRandomCar() {
  const cars = ['JEEP', 'Dodge', 'Mercedes', 'Audi', 'Ford', 'Mitsubishi', 'Subaru', 'BMW'];
  return cars[Math.floor(Math.random() * cars.length)];
}

function App() {
  //const [{variableName},{variableSetterFunc}] = useState({startingValue});
  const [cars, setCars] = useState([]);

  const handleClick = () => {
    setCars([...cars, getRandomCar()]);
  };

  const renderedCars = cars.map((car, index) => {
    return <CarShow carType={car} key={index} />
  });
  
  return (
    <div >
      <button onClick={handleClick}>Add Car</button>
      <div>{renderedCars}</div>
    </div>
  );
}

export default App;
