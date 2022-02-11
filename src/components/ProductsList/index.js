// Responsável por renderizar a lista de produtos;
import Product from "../Product"
import './style.css'

function ProductsList({ products, filteredProducts, handleClick }){
    if(filteredProducts.length > 0){
        return(
            <div className="list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="itemList">
                        <Product product={product} handleClick={handleClick}/>
                    </div>
                ))}
            </div>
        )
    }else{
        return(
            <div className="list">
                {products.map((product) => (
                    <div key={product.id} className="itemList">
                        <Product product={product} handleClick={handleClick}/>
                    </div>
                ))}
            </div>
        )
    }
}
export default ProductsList