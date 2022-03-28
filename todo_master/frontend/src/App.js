import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import Footer from "./components/Footer.js"
import Menu from "./components/Menu.js"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users':[]
        }
    }

    componentDidMount() {
//        const users = [
//            {
//                'username': 'Иван',
//                'first_name': 'Иван',
//                'last_name': 'Иванов',
//                'email': 'Иван@иванов.ru'
//            },
//            {
//                'username': 'Петр',
//                'first_name': 'Петр',
//                'last_name': 'Петров',
//                'email': 'Петр@петров.ru'
//            }
//        ]
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
                this.setState(
                    {
                        'users': response.data
                    }
                )
        }).catch(error => console.log(error))

    }
    render() {
        return (
            <div>
                <Menu/>
                <UserList users={this.state.users}/>
                <Footer/>
            </div>
        );
    }
}

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//       </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
