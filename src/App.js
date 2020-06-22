import React,{Component} from 'react';

import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx'
class App extends Component {

  constructor(){
    super();


    this.state={
      monsters: [],
      searchFiled:'',
    
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users =>this.setState({monsters:users}))
  }

  render(){

    // const {monsters,searchField} = this.state;

    // const filtered = monsters.filter( monster=>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    //   );

    


     

   
 
    


    return (
      <div className="App">
        <h1>Monster Project </h1>
        <input   
          type='search' 
          placeholder="search monsters" 
          onChange={e=>this.setState({searchField:e.target.value})}
        />
        <CardList monsters= {this.state.monsters}>
        
        </CardList>
        

      </div>
    );
  }
}

export default App;
