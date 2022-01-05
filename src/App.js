import './App.css';
import axios from 'axios'
import Products from './Products';
import { useEffect, useState } from 'react';

function App() {

  const url ='https://mayankapis.bakewish.in/api/floweraura/cakes/regular';
  const [prods , getProds] = useState('');

  useEffect (() => {
    console.log('in use effect')
    getSuggestions();
  },[])

  const getSuggestions = () => {
    axios.get(url)
    .then((response) => {
      const prodItems = response.data.data.results;
      console.log(prodItems)
      getProds(prodItems);
    })
    .catch(error => console.error(`Error: $error)`));

  }

  console.log('x',prods);
  return (
    <Products prods={prods} />
    )

}

export default App;
