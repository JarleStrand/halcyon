import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './mainpage.css';
import { Grid, Row, Col, Button } from 'react-bootstrap'

import apiurl from '../../apilink'
import TreeViewDropDown from '../treeviewdropdown/treeviewdropdown.container'






class MainPage extends React.Component {


    componentDidMount() {


        let date = new Date()
        let year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        if (month.length == 1)
            month = "0" + month

        this.props.getTimeDim(year + "-" + month); // expand to current month
        this.props.getOrgUnitsDim("All"); // expand to root

    }


    render() {

        return (
            <div className="page">
                <span className="mainpage-mainpanel">
                    <Router>
                            <Grid>
                                <Row>
                                    <Col md={4}>
                                        <TreeViewDropDown header="Velg måned:" domain="time" tree={this.props.timeTree} selected={this.props.timeSelected}></TreeViewDropDown>
                                    </Col>
                                    <Col md={4}>
                                        <TreeViewDropDown header="Velg organisasjonsenhet:" showRoot={true} domain="orgunits" tree={this.props.orgUnitsTree} selected={this.props.orgUnitsSelected}></TreeViewDropDown>
                                    </Col>
                                </Row>
                            </Grid>
                    </Router>
                </span>
                <span className="mainpage-sidepanel" >
                    <div className="filler"/>
                    <img className="center-image" src={apiurl + "/bird_red128.png"}/>
                    <div className="filler"/>
                    <div className="center-text">{this.props.userName}</div>
                </span>

            </div>


        );
    }
}




export default MainPage;

