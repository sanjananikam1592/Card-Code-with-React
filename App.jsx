import React from 'react';
import Card from './components/Card.jsx';

const App = () => {
  return (
    <div className='parent '>
      <Card  user='Aman singh' age={18} img='https://plus.unsplash.com/premium_photo-1792971090378-c1300c05ebb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card  user='Sarthak Sharma' age={21} img='https://images.unsplash.com/photo-1792962212188-c60923f83386?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card  user='Rohit Kumar' age={25} img='https://images.unsplash.com/photo-1790852357604-d3ef3378aa1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>

    </div>
  );
}

export default App