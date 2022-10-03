import logo from './LogoHamburgueria.png';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react'
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  
  console.log(currentSale)
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response) => response.json())
    .then((response) => setProducts(response))
    .catch((error) => console.log(error))
  }, [])
  
  function showProducts(input){
    setFilteredProducts(products.filter((product) => 
    product.name.toLowerCase().includes(input.toLowerCase()) || 
    product.category.toLowerCase().includes(input.toLowerCase())))
    
  }

  function handleClick(productId){
    const existItem = currentSale.some((product) => product.id === productId)
    if(existItem){
      setCurrentSale( currentSale.map((item) => {
        return ( item.id === productId
          ? { ...item, qtd: item.qtd + 1 }
          : item)
      }))
    }else{
      setCurrentSale([...currentSale, {...(products.find((product) => product.id === productId)), 'qtd':1}])
    }
  }

  function removeProduct(value){
    const existItem = currentSale.find((product) => product.id === value.id)
    if(existItem !== undefined && existItem.qtd > 1){
      setCurrentSale( currentSale.map((item) => {
        return ( item.id === value.id
          ? { ...item, qtd: item.qtd - 1 }
          : item)
      }))
    }else{
      setCurrentSale(currentSale.filter((product) => product.id !== value.id))
    } 
  }

  function removeAll(){
    setCurrentSale([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo hamburgueria' className='logo'/>
        <input type='text' onChange={(evt) => showProducts(evt.target.value)} 
          placeholder='Digitar pesquisa' className='searchBox'>
        </input>
      </header>
      <main className='App-main'>
        <ProductsList products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
        <div className='divCart'>
          <Cart currentSale={currentSale} removeProduct={removeProduct} removeAll={removeAll}/>
        </div>
      </main>
    </div>
  );
}

export default App;
