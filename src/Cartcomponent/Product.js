import { Col,Row,Button, Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import SameSellerItem from "./SameSellerItem";
import RelativeItem from "./RelativeItem";
import SamesellerProduct from "../Cartjson/sameseller-images.json";
import RelativeProduct from "../Cartjson/relative-images.json";

export default function Product(){
    const { Option } = Select;
    return(
        <div style={{backgroundColor:'#eaeded'}}>
            <Row style={{paddingTop:'2em'}}>
                <Col span={18} className='shopping-col'>
                    <div className='shopping-content'>
                        <h1 style={{margin:'0'}}>Shopping Cart</h1>
                        <a href="/" className="deselectbtn">Deselect all items</a>
                        <div className="bar"></div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Checkbox defaultChecked={true} style={{marginRight:'1em'}}></Checkbox>
                            <img
                                style={{width:'12em',height:'12em',marginTop:'1em',marginRight:'1em'}}
                                src="https://m.media-amazon.com/images/I/7118dLnPVqL._AC_AA180_.jpg"
                            />
                            <div style={{flexDirection:'column',textAlign:'start',padding:'1em 15em 1em 0'}}>
                                <a href="/" className="productname">Beexcellent Gaming Headset with Noise
                                 Canceling mic, PS4 Xbox One Headset with Crystal 3D Gaming Sound, Memory 
                                 Foam Earpad for PC, Mac, Laptop, Mobile
                                 </a>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <p style={{color:'white',backgroundColor:'#e5821c',fontSize:'12px',paddingInline:'5px',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',margin:'0'}}>#1 Best Seller</p>
                                    <p style={{color:'#98a3b2',margin:'0',marginLeft:'0.5em',fontSize:'12px'}}>in Mac Game Headsets</p>
                                </div>
                                <p style={{color:'#7fba7f',fontSize:'12px'}}>In Stock</p>
                                <p style={{color:'#98a3b2',fontSize:'12px'}}>FREE Shipping to Taiwan when you spend over $75.00 on eligible items.</p>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <div style={{color:'black'}}>Qty :</div>
                                    <Select className="qtyselecter" id='qty' defaultValue='1'>
                                        <Option value='1'>1</Option>
                                        <Option value='2'>2</Option>
                                        <Option value='3'>3</Option>
                                    </Select>
                                </div>
                                <p style={{color:'black',marginBottom:'0'}}>Color : Red</p>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <div style={{width:'1px',height:'1em',backgroundColor:'#98a3b2',alignSelf:'center'}}></div>
                                    <a style={{marginInline:'0.5em',fontSize:'13px'}}>Delete</a>
                                    <div style={{width:'1px',height:'1em',backgroundColor:'#98a3b2',alignSelf:'center'}}></div>
                                    <a style={{marginInline:'0.5em',fontSize:'13px'}}>Save for later</a>
                                    <div style={{width:'1px',height:'1em',backgroundColor:'#98a3b2',alignSelf:'center'}}></div>
                                    <a style={{marginLeft:'0.5em',fontSize:'13px'}}>Compare with similar Items</a>
                                </div>
                            </div>
                            <p className='price'>US$16.99</p>
                        </div>
                        <div className="bar"></div>
                        <div style={{textAlign:'end'}}>
                            <p style={{margin:'0',fontWeight:'bold',fontSize:'1.5em',color:'black'}}>Subtotal (1 item): $16.99</p>
                            <button className="checkoutbtn">Proceed to checkout</button>
                        </div>
                    </div>
                    <Col span={24} className='buyagain-col'>
                        <div className='buyagain-content'>
                            <h1>Your Items</h1>
                            <Button autoFocus='true' type="link" size="small" style={{marginLeft:'1.7em'}}>
                                No items saved for later
                            </Button>
                            
                            <Button type="link" size="small">
                                Buy it again    
                            </Button>
                            <div className="bar"></div>
                        </div>
                    </Col>
                    <p style={{textAlign:'start',margin:'1em 0 0 0',color:'black'}}>The price and availability of items at Amazon.com are subject to change. 
                    The Cart is a temporary place to store a list of your items and reflects 
                    each item's most recent price. Shopping Cart.</p>
                </Col>
                
                <Col span={6} className='sameseller-col'>
                    <SameSellerItem product={SamesellerProduct}></SameSellerItem>
                </Col>
            </Row>
            <Col className='relative-col'>
                <RelativeItem product={RelativeProduct}></RelativeItem>
            </Col>
        </div>
    );
}