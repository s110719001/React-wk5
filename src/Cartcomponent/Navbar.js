import { Button } from "antd";



export default function Navbar(){
    return(
        <div className="navbar">
            <Button type="text" className="btn">
                <img
                    style={{width:'1.8em',marginRight:'15%'}}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
                />
                <p style={{margin:'0',paddingRight:'1em'}}>ALL</p>
            </Button>
            <Button type="text" className="btn">
               <div className='btn-word'>Today's Deals</div> 
            </Button>
            <Button type="text" className="btn">
                <div className='btn-word'>Customer Service</div> 
            </Button>
            <Button type="text" className="btn">
                <div className='btn-word'>Gift Cards</div> 
            </Button>
            <Button type="text" className="btn">
                <div className='btn-word'>Sell</div> 
            </Button>
            <Button type="text" className="btn">
                <div className='btn-word'>Registry</div> 
            </Button>
            <Button type="text" className="btn-IN">
                <div className='btn-word'>Important News</div> 
            </Button>
        </div>
    );
}