import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './style.css'
import Signup from './Signup';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
export default class Login extends React.Component {
    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };

        const Demo = () => {
            const onFinish = (values) => {
                console.log('Success:', values);
            };

            const onFinishFailed = (errorInfo) => {
                console.log('Failed:', errorInfo);
            };
        }
        return (
            <div className="login">
                <Router>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={Demo.onFinish}
                    onFinishFailed={Demo.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                     <Link to="/signup"> <Button type="primary" htmlType="submit" style={{ marginLeft: 20 }}>
                            Sign up
                        </Button >
                        </Link>  
                    </Form.Item>
                </Form>
                <Route path="/Signup" exact component={Signup}></Route>
                </Router>
            </div>
        )
    }
}