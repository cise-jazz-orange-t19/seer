import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HeartTwoTone, TrademarkCircleFilled,UserOutlined} from '@ant-design/icons';
import { Button,Divider  } from 'antd';
import 'antd/dist/antd.css'
import Homepage from './Homepage.jsx';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from './Login';

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
      <Link to="/">  <div className="logo" ><img src={logo} className="navbar-logo-brand" alt="logo"/>SEER</div></Link>
      <Link to="/save">  <div className="save"><Button icon={<HeartTwoTone />}>My saved searches</Button></div></Link>
      <Link to="/rate">  <div className="rate"><Button icon={<TrademarkCircleFilled />}>My ratings</Button></div></Link>

       <Link to="/login"> <div className="user"><Button icon={<UserOutlined />}>User</Button></div></Link>
        <Divider className="divider"/>


        <Route path="/" exact component={Homepage}></Route>
        {/* <Route path="/login" exact component={Save}></Route>
        <Route path="/save" exact component={Rate}></Route> */}
        <Route path="/Login" exact component={Login}></Route>
        </Router>
      </div>
    )
  }
}
export default App;
