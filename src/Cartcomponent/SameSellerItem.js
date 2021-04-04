import { Col } from "antd";
import SSItems from "./SSItems";

export default function SameSellerItem({product}){
    return(
        <div className="sameseller-content">
            <h3 style={{fontWeight:'bold',color:'black'}}>Sponsored Products related to items in your cart</h3>
            {
                product.map(product => (
                <Col>
                    <SSItems product={product}></SSItems>
                </Col>
            ))}
            
            
        </div>
    );
}