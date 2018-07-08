import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import TreeViewDropDown from '../treeviewdropdown/treeviewdropdown.container'







class Account extends React.Component {


    componentDidMount() {


    }


    render() {

        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h1>Graf - utvikling</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <TreeViewDropDown header="Velg måned:" domain="time" tree={this.props.timeTree} selected={this.props.timeSelected}></TreeViewDropDown>
                        </Col>
                        <Col md={4}>
                            <TreeViewDropDown header="Velg organisasjonsenhet:" showRoot={true} domain="orgunits" tree={this.props.orgUnitsTree} selected={this.props.orgUnitsSelected}></TreeViewDropDown>
                        </Col>
                    </Row>
                </Grid>
            </div>


        );
    }
}




export default Account;

