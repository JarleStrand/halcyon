import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

import TreeViewDropDown from '../treeviewdropdown/treeviewdropdown.container'
import Table from '../table/table'






class Account extends React.Component {




    getDataHandler() {
        this.props.getTableData(this.props.timeSelected.id, this.props.orgUnitsSelected.id)
    }



    render() {

        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h1>Regnskapsrapport</h1>
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
                    <Row> <hr/> </Row>
                    <Row>
                        <Col md={2}>
                            <Button bsSize="small" onClick={() => this.getDataHandler()}>Hent rapport</Button>
                        </Col>
                    </Row>


                    <Row>
                        <Table data={this.props.tableData} />
                    </Row>
                </Grid>
            </div>


        );
    }
}




export default Account;

