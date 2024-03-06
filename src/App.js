import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
// import RestaurantScreen from './components/RestaurantScreen';
import Counter from './features/counter/Counter';


export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}