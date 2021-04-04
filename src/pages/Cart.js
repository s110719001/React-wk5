import logo from '../logo.svg';
import Header from '../Cartcomponent/Header';
import Footer from '../Cartcomponent/Footer';
import Product from '../Cartcomponent/Product';
import Navbar from '../Cartcomponent/Navbar';

export default function Cart() {
  return (
    <div style={{backgroundColor:'#eaeded'}}>
      <Header className="cart-header"></Header>
      <Navbar></Navbar>
      <Product></Product>
    </div>
  );
}

