import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => {this.setState({ robots: users })})
    // }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })  
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredProfile = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
            <h1 className='h1'>Loading...</h1> :
         (
            <div className='tc'>
                <h1 className='h1 f2'>Profile Tablist</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredProfile} />
                </Scroll>
            </div>
        );
    }
}


export default App;