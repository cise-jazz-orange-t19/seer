import React, {Component} from "react";

import {Menu} from "antd";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import logo from "../logo.svg";
import {HeartOutlined, StarOutlined, UserOutlined} from "@ant-design/icons";

import Homepage from "../Homepage"
import Login from "../Login";

class NavBar extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <Router>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Link to="/">
                        <div className="logo"><img src={logo} className="navbar-logo-brand" alt="logo"/>SEER</div>
                    </Link>
                    <Menu.Item key="save" icon={<HeartOutlined/>}>
                        <Link to="/save"/>
                        My Saved Searches
                    </Menu.Item>
                    <Menu.Item key="rate" icon={<StarOutlined/>}>
                        <Link to="/rate"/>
                        My Ratings
                    </Menu.Item>

                    <Menu.Item key="user" icon={<UserOutlined/>}>
                        <Link to="/login"/>
                        User
                    </Menu.Item>
                </Menu>

                <Route path="/" exact component={Homepage}/>
                {
                    /* <Route path="/login" exact component={Save}></Route>
                    <Route path="/save" exact component={Rate}></Route> */
                }
                <Route path="/Login" exact component={Login}/>

            </Router>
        );
    }
}

export default NavBar;
