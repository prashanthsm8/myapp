import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './Components/Card-list/CardList';
import {Searchbox} from './Components/search-box/Searchbox.jsx';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           HELLO WORLD
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.Component
// {
//     constructor()
//     {
//       super();
//       this.state = {
//         string : 'hi there'
//       }
//     }
//     render()
//     {
//        return (
//         <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {this.state.string}
//           </p>
//           <button onClick={()=>this.setState({string:'prashhh'})}>change state</button>
//         </header>
//       </div>
//        );
//     }
// }

class App extends React.Component
{
    constructor()
    {
      super();
      this.state = {
        monsters : [],
        searchval : ""
      }
      //this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({monsters:users}));
    }

    handleChange=(e)=>
    {
      this.setState({searchval:e.target.value});
    }
    render()
    {
      const tempmons = this.state.monsters.filter(
        (monster)=> monster.name.toLowerCase().includes(this.state.searchval.toLowerCase())
      );
       return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <Searchbox placeholder="enter monster" handleevent={
              this.handleChange
            }></Searchbox>
          <CardList monsters={tempmons}></CardList>
      </div>
       );
    }
}
export default App;
