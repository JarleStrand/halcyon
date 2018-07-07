
import React from 'react';
import './menu.css'





class Menu extends React.Component {


    handleClick(item) {
        if (typeof item.action === 'function')
            item.action();
        else if (typeof item.action === 'string')
            this.props.setLink(item.action)
    }

    render() {
        return this.props.menu.map(item => (
            <div className="menu-item">
                <div key={item.key} classNa onClick={() => this.handleClick(item)}>
                    <a>{item.description}       </a>
                </div>
            </div>
        ))

    }
}




export default Menu;

