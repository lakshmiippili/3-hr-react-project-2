import CartButton from "./CartButton"
const Header =(props)=>{
    return <header>
        <h1 align='center'>Candy Store</h1>
        <CartButton showCart ={props.showCart}/>
    </header>
}

export default Header