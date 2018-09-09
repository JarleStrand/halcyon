import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

import { BixitApi } from '../../libs/bixitapi';




class HTable extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.makeTable = this.makeTable.bind(this);
        this.makeOneRow = this.makeOneRow.bind(this);
        this.makeAllRows = this.makeAllRows.bind(this);
    

    }


    componentDidMount() {

        this.props.mdxConnect();

    
    }



    getDataHandler() {
        var mdx = `


        SELECT {[HFM Account].[HFM Main].&[PL0100],[HFM Account].[HFM Main].&[PL1010]}*{[Scenario].[Scenario].&[ACT]}
        ON 0,
       [Profitcenter].[Profitcenter].&[31026].CHILDREN *[Time].[Year - Quarter - Month].[Month].&[2017-05] ON 1
       FROM EDW
       WHERE
       ([Time].[Year].&[2017])
       
               
        `        
        this.props.mdxQuery(mdx);

    }



    makeOneRow(d){
        return d.map(item => {
               return (<td>{item.value}</td>)
        }) ;

    }


    makeAllRows(rows){
        return rows.map(r => {
            return <tr>{this.makeOneRow(r)}</tr>
        });
    }
    

    makeTable(){

        var tableData =  this.props.mdxRes ? this.props.mdxRes.measures : null;
        if(!tableData)
            tableData = [];


        return (
            <table>
                {this.makeAllRows(tableData)}
            </table>
        )
    }


    render() {

        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h1>Tabell</h1>
                        </Col>
                    </Row>
            
                    <Row> <hr /> </Row>
                    <Row> <hr /> </Row>
                    <Row>
                        <Col md={2}>
                            <Button bsSize="small" onClick={() => this.getDataHandler()}>Hent rapport</Button>
                        </Col>
                    </Row>
                    <Row>
                      {this.makeTable()}
                    </Row>
                </Grid>
            </div>


        );
    }
}




export default HTable;

