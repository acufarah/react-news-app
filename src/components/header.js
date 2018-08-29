import React, {Component} from 'react';
import classes from '../css/styles.css';


class Header extends Component {
    
    inputChangeHandler(event){
        console.log(event.target.value)
    }
    
    render() {
    
    return (
        <header>
            <div className={classes.logo}>LOGO</div>
            <input type="text" onChange = {this.inputChangeHandler} />
        </header>
        )
   }
}
export default Header;