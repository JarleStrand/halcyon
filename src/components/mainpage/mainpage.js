import React from 'react';
import {
    withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'
import './mainpage.css';

import apiurl from '../../apilink'
import Menu from '../menu/menu.container'
import Account from '../account/account.container'
import Graph from '../graph/graph.container'






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
        this.props.clearMenu("mainmenu");
        this.props.addMenuItem("mainmenu", "Regnskapsrapport", "/account")
        this.props.addMenuItem("mainmenu", "Graf utvikling", "/graph")
        this.props.addMenuItem("mainmenu", "Logg av", this.props.doLogout)
        this.props.selectMenuItem("mainmenu", 0)

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
                    <h1 className="center-text">HALCYON</h1>
                    <img className="center-image" src={apiurl + "/bird_red128.png"} alt="logo" />
                    <div className="filler" />
                    <div className="username">{this.props.userName}</div>
                    <div className="smallfiller" />
                    <Menu menuId="mainmenu" setLink={this.setLink} />
                </span>
            </div>
        );
    }
}


const MainPage = withRouter(ProtoMainPage)

export default MainPage;

