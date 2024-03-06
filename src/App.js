import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
// import RestaurantScreen from './components/RestaurantScreen';
import Counter from './features/counter/Counter';
import IncrementByAmount from './features/counter/IncrementByAmount'; 


export default function App() {
  return (
    <div>
      <Counter />
      <IncrementByAmount />
    </div>
  );
}