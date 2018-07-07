import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'
import './mainpage.css';

import apiurl from '../../apilink'
import Menu from '../menu/menu.container'
import Account from '../account/account.container'
import Graph from '../graph/graph.container'
import { doLogout } from '../../state/actions';






class ProtoMainPage extends React.Component {


    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }



    constructor(props, context) {
        super(props, context);

        this.state = {
            currLink: ""
        }

        this.setLink = this.setLink.bind(this)
    }

    componentDidMount() {

        // load time and org units dimensions from api
        let date = new Date()
        let year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        if (month.length === 1)
            month = "0" + month

        this.props.getTimeDim(year + "-" + month); // expand to current month
        this.props.getOrgUnitsDim("All"); // expand to root


        // define main menu with links, and redirect to account page
        this.props.clearMenu();
        this.props.addMenuItem("Regnskapsrapport", "/account")
        this.props.addMenuItem("Graf utvikling", "/graph")
        this.props.addMenuItem("Logout", this.props.doLogout)

        this.setLink("/account")
    }


    setLink(link) {
        this.setState({ currLink: link })
        this.props.history.push(link)
    }


    render() {

        return (
            <div className="page">
                <span className="mainpage-mainpanel">
                    { this.state.currLink==="/account" ? <Account/> : null}
                    { this.state.currLink==="/graph" ? <Graph/> : null}                    
                </span>
                <span className="mainpage-sidepanel" >
                    <div className="filler" />
                    <img className="center-image" src={apiurl + "/bird_red128.png"} alt="logo" />
                    <div className="filler" />
                    <div className="center-text">{this.props.userName}</div>
                    <Menu menu={this.props.menuList} setLink={this.setLink} />
                </span>
            </div>
        );
    }
}


const MainPage = withRouter(ProtoMainPage)

export default MainPage;

