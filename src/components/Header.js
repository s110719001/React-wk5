import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import CartSummary from "./CartSummary";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";
import { CartIcon } from "./Icons";
import { Badge } from "antd";

export default function Header({ title }) {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    pageContentsSet(dispatch, "NORDIC NEST Shopping Cart", getJSON("/"));
    activeNavItemSet(dispatch, "/");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text" onClick={onClickHeader}>
          <Link to="/">
            <h1 className="header-title">{title}</h1>
          </Link>
          <p className="header-slogan">An example made by Create-React-App.</p>
        </div>
        <Link to={{pathname: '/cart/amazon-cart'}}>
          <nav className="header-cart-summary" >
            <Badge size={"small"} style={{ color: 'white', backgroundColor: '#6366F2' }}>
              <CartIcon size={32} />
            </Badge>
            <p className="cart-summary-text"> Shopping bag </p>
          </nav>
        </Link>
      </div>

      <hr className="hr-header-line" />
    </header>
  );
}
