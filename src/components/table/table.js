
import React from 'react'


class Table extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.renderLine = this.renderLine.bind(this)
    }



    renderLine(line) {
        return <tr key={line.key}>
            <td>{line.description}</td><td>{line.actual}</td><td>{line.budget}</td><td>{line.deviation}</td>
            </tr>;
    }



    render() {

        if (!this.props.data)
            return null


        let res

        res = <table><tbody>
                <tr>
                    <th></th>
                    <th>Faktisk</th>
                    <th>Budsjett</th>
                    <th>Avvik</th>
                </tr>
                {this.props.data.map((line) => this.renderLine(line))}
            </tbody></table>






        return res

    }
}



export default Table;


