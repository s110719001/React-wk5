import { render } from "@testing-library/react";
import { Button } from "antd";

export default function SSItem({product}){
    return(
        <div className="SSItem-container">
            <img
                style={{width:'125px',height:'125px',marginRight:'10px'}}
                src={product.image}
            />
            <div className="SSItem-content">
                <a className="productdescription">{product.description}</a>
                <br></br>
                <img
                    style={{width:'23px',backgroundColor:'#fed801'}}
                    src="https://i.ibb.co/QpgqYTK/Exclusion-1.png"
                />
                <img
                    style={{width:'23px',backgroundColor:'#fed801'}}
                    src="https://i.ibb.co/QpgqYTK/Exclusion-1.png"
                />
                <img
                    style={{width:'23px',backgroundColor:'#fed801'}}
                    src="https://i.ibb.co/QpgqYTK/Exclusion-1.png"
                />
                <img
                    style={{width:'23px',backgroundColor:'#fed801'}}
                    src="https://i.ibb.co/QpgqYTK/Exclusion-1.png"
                />
                <img
                    style={{width:'23px'}}
                    src="https://i.ibb.co/QpgqYTK/Exclusion-1.png"
                />
                <div className="product-prize">{product.price}</div>
                <Button>comment : {product.comment}</Button>
            </div>
        </div>
    );
}