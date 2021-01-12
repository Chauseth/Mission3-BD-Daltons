import React, { Component } from 'react';
import logo from './img/Logo.png';
import { ReactComponent as Menu} from './svg/view_headline.svg';
import { ReactComponent as Panier} from './svg/buy_absolute.svg';


class Header extends Component {


    render() {
        return (
          <div className="Header d-flex justify-content-around align-items-center">
            <Menu />
            <img src ={logo} alt="" ></img>
            <h1 className= "d-none">Le site de BD</h1>



            <Panier />
          </div>
        );
      }
      
}

export default Header;