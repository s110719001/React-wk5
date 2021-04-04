
export default function RItem({product}){
    return(
        <div className='RItem-container'>
            <img style={{width:'135px',height:'135px'}} src={product.image} />
            <br></br>
            <a className='RItem-name'>{product.description}</a>
            <div className='RItem-evaluation'>{product.evaluation}</div>
            <div className='RItem-price'>{product.price}</div>
        </div>
    );
}