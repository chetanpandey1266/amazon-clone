import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'

function Header() {
    const [{basket}] = useStateValue();
    // on destructuring first gives state and second gives dispatch
    return (
        <nav className="header">
            {/*Main Logo */}
            <Link to="/">
                <img className="header_logo"
            src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""/>
            </Link>

            {/*Search bar */} 
            <div className="header_search">
            <input type="text" className="header_searchInput"/>  
            <SearchIcon className="header_searchIcon" />
            </div>

            {/*Three Links */}
            <div className="header_nav">
                {/*first link*/}
                <Link to="/login" className="header_link">  {/*Link is different from href as href refreshes the page while Link doesn't*/}
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Chetan</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/*Second link*/}
                <Link to="/" className="header_link">  {/*Link is different from href as href refreshes the page while Link doesn't*/}
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/*Third link*/}
                <Link to="/" className="header_link">  {/*Link is different from href as href refreshes the page while Link doesn't*/}
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/*Basket Icon */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>{/*This is an example of mutable update*/}
                    </div>
                </Link>                
            </div>
        </nav>
    )
}

export default Header;
 
