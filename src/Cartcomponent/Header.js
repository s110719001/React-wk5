import { Select } from "antd";
import { Link } from "react-router-dom";



export default function Header(){
    const Option = Select;
    return(
        <div className="cart-header">
            <Link to="/" style={{width:'7%'}}>
                <img
                    style={{width:'100%',padding:'18px 0px 10px 13px'}}
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <img
                style={{width:'1.5%',height:'1.5%',marginRight:'-1.5%'}}
                src="https://www.nicepng.com/png/full/431-4318427_location-icon-white-png.png"
            />
            <div className="header-word">
                <p className="slim">deliver to</p>
                <p className="bold">Taiwan</p>
            </div>
            <div className='header-inputbox'>
                <Select className="select-box" defaultValue="ALL">
                    <Option value='ALL'>ALL</Option>
                </Select>
                <input className="input-box"></input>
                <img
                    className='searchbtn'
                    src="https://www.flaticon.com/svg/vstatic/svg/49/49116.svg?token=exp=1616840156~hmac=4c7ff40679f8bb947a97b44f1f48be99"
                />
            </div>
            <img
                style={{width:'1.5%'}}
                src="https://www.flaticon.com/svg/vstatic/svg/2933/2933128.svg?token=exp=1616839079~hmac=c9a674873403381ffd1179875a3ad274"
            />
            <div className="header-word">
                <p className="slim">Hello,Sign in</p>
                <p className="bold">Account & Lists</p>
            </div>
            <div className="header-word">
                <p className="slim">Returns</p>
                <p className="bold">& Orders</p>
            </div>
            <img 
                style={{width:'2.7%'}}
                src="http://qumbre.com/upwork/adam/the-resort/html/en3/images/icon-5minwalk-supermarket-white.png"
            />
            <p className="word-cart">Cart</p>
        </div>
    );
}