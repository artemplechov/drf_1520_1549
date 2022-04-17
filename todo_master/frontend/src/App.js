import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import ProjectsList from './components/Projects.js';
import TODOList from './components/TODO.js';
import Footer from "./components/Footer.js"
import Menu from "./components/Menu.js";
import NotFound404 from "./components/NotFound404.js";
import {HashRouter,Route, BrowserRouter,Switch,Redirect} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users':[],
            'projects':[],
            'TODOs':[],
        }
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
                this.setState(
                    {
                        'users': response.data
                    }
                )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
                this.setState(
                    {
                        'projects': response.data
                    }
                )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/TODO/').then(response => {
                this.setState(
                    {
                        'TODOs': response.data
                    }
                )
        }).catch(error => console.log(error))

    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path="/projects" component={() => <ProjectsList projects={this.state.projects}/>}/>
                        <Route exact path="/TODO" component={() => <TODOList TODOs={this.state.TODOs}/>}/>
                        <Redirect from="/user" to="/"/>
                        <Redirect from="/project" to="/projects"/>
                        <Redirect from="/TODOS" to="/TODO"/>
                        <Redirect from="/TODOs" to="/TODO"/>
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}



export default App;
