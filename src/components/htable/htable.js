import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'





class HTable extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.makeTable = this.makeTable.bind(this);
        this.makeOneRow = this.makeOneRow.bind(this);
        this.makeAllRows = this.makeAllRows.bind(this);
    }


    getDataHandler() {
        this.props.getTableData(this.props.timeSelected.id, this.props.orgUnitsSelected.id)
    }

    handleChangeSelect(e) {
        this.props.clearAccountingData();
    }


    makeOneRow(d){
        return d.map(item => {
               return (<td>{item}</td>)
        }) ;

    }


    makeAllRows(rows){
        return rows.map(r => {
            return <tr>{this.makeOneRow(r)}</tr>
        });
    }
    

    makeTable(){
        var tableData = [['A1','A2','A3'],['B1','B2','B3'],['C1',null,'C"3"'],['D1','D2','D3']]
        alert(JSON.stringify(tableData))
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
                      {this.makeTable()}
                    </Row>
                </Grid>
            </div>


        );
    }
}




export default HTable;

