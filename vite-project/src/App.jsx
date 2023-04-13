import { useState } from 'react'
import Header from './components/Header';
import ListingForm from './components/ListingForm';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <ListingForm />
    </div>
  );
}

export default App
