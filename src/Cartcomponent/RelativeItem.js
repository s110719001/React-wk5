import { Col, Row } from "antd";
import RItems from "./RItems"

export default function RelativeItem({product}){
    return(
        <div className="relative-items">
            <h2 style={{fontWeight:'bold',color:'black'}}>Featured items you may like</h2>
            <Row>
                {
                    product.map( product => (
                        <Col span={4}>
                            <RItems product={product}></RItems>
                        </Col>
                    ))
                }
            </Row>
        </div>

    );
}