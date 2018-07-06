import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap'

import TreeViewDropDown  from '../treeviewdropdown/treeviewdropdown.container'



const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)


const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)


class MainPage extends React.Component {


    componentDidMount() {

        let date = new Date()
        let year = date.getFullYear().toString();
        let month = (date.getMonth()+1).toString();
        if(month.length==1)
            month = "0" + month

        this.props.getTimeDim(year + "-" + month); // expand to current month
        this.props.getOrgUnitsDim("All"); // expand to root

    }


    render() {

        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                        <li onClick={this.props.doLogout}>Logout</li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={Topics} />


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

                </div>
            </Router>
        );
    }
}




export default MainPage;

