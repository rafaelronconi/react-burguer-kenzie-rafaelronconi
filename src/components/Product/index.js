// Responsável por apresentar as informações do produto: 
// nome, categoria e preço, além de um button para adicionar ao carrinho;
import './style.css'

function Product({ product, handleClick }){
    return(
        <div className="card">
            <div className='imgContainer'>
                <img src={product.img} alt="foto do produto" className="img"/>
            </div>    
            <div className='infoCard'>
                <span className="productName">{product.name}</span>
                <span className="productCategory">{product.category}</span>
                <span className="productPrice">R$ {product.price.toFixed(2)}</span>
                <button onClick={() => handleClick(product.id)} className="addButton">Comprar</button>
            </div>
        </div>
    )
}

export default Product