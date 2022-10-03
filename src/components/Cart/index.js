// Responsável por apresentar os produtos inseridos 
// no carrinho e o valor total da compra.
import './style.css'
function Cart({ currentSale, removeProduct, removeAll }){
    if(currentSale.length === 0){
        return(
            <div className="cartContainer">
                <div className="cartTitle">Carrinho de compras</div>
                <div className='cartInfoEmpty'>
                    <div className="cartEmpty">
                        <span className='emptyText1'>Sua sacola esta vazia</span>
                        <span className='emptyText2'>Adicione itens</span>
                    </div>   
                </div>
                
            </div>
        )
    }else{
        return(
            <div className="cartContainer">
                <div className="cartTitle">Carrinho de compras</div>
                <div className='cartInfo'>
                    <div className="cartList">
                        {currentSale.map((currentProduct) => 
                            <div key={currentProduct.id} className="cartItem">
                                <img src={currentProduct.img} alt="imagem do produto" className="img"/>
                                <span className="name">{currentProduct.name}</span>
                                <span className="category">{currentProduct.category}</span>
                                <span className="qtd">Quantidade:{currentProduct.qtd}</span>
                                <button onClick={() => removeProduct(currentProduct)} className="remove">Remover</button>
                            </div>
                        )}
                    </div>
                    <div className="cartFooter">
                        <div className='Total'>
                            <div className='totalText'>Total:</div>
                            <div className='valueText'>
                                R$ {currentSale.reduce(
                                    (acum, cur) => (acum + (cur.price * cur.qtd)),0
                                ).toFixed(2)}
                            </div>
                        </div>
                        <button onClick={() => removeAll()} className="removeAll">remover todos</button>
                    </div>

                </div>
                
            </div>
        )
    }
}
export default Cart