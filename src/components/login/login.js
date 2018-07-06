import React from 'react';

import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap'




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
            <Form className="form-signin">
                <h1>Please sign in</h1>

                <FormGroup controlId="userName">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Username" value={this.state.username} onChange={evt => this.updateUsername(evt)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="userPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" value={this.state.password} onChange={evt => this.updatePassword(evt)} />
                    </Col>
                </FormGroup>

                <Button className="btn btn-lg btn-primary btn-block" type="submit" onClick={evt => this.handleSubmit(evt)}>Sign in</Button>

            </Form>
        );

    }
}

export default LoginForm;
