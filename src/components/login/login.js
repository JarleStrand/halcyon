import React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap'
import Spinner from '../spinner/spinner.container'



class LoginForm extends React.Component {


    constructor(props, context) {
        super(props, context);


        this.state = {
            username: "",
            password: ""
        };

    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.doAuthentication(this.state.username, this.state.password);
    }


    updateUsername(evt) {
        this.setState({
            username: evt.target.value
        });
    }

    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }



    render() {
        return (
            <div>
                <Spinner />
                <Form className="form-signin">
                    <h1>Logg på</h1>

                    <FormGroup controlId="userName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Brukernavn
                    </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="brukernavn" value={this.state.username} onChange={evt => this.updateUsername(evt)} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="userPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Passord
                    </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="passord" value={this.state.password} onChange={evt => this.updatePassword(evt)} />
                        </Col>
                    </FormGroup>

                    <Button className="btn btn-lg btn-primary btn-block" type="submit" onClick={evt => this.handleSubmit(evt)}>Logg på</Button>

                </Form>
            </div>
        );

    }
}

export default LoginForm;
