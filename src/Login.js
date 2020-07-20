import React, { PureComponent } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import auth from "./auth";

class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            login: false
        }
    }

    // login = (e) => {
        
    //     e.preventDefault();

    //     this.setState({
    //         login: true
    //     })
    //     if(this.state.login == true){
    //         return <Redirect to= "/home" />;
    //     }
    // }

    // loginSubmit = (e) => {
    //     e.preventDefault();
    //     return <Redirect to= "/home" />;
    // }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large' onClick={() => {
                        auth.login(() => {
                            this.props.history.push("/home");
                        })
                    }}>
                        Login
                    </Button>
                    <br></br>
                    <Link to={"/home"}> Alternative Link Here..</Link>
                    </Segment>
                </Form>
                {/* <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message> */}
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login;