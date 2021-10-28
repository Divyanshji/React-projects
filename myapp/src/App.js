import React, {Component} from 'react'
import Ninjas from './ninjas'
import AddNinja from './AddNinjas'

class App extends Component{
  state = {
    ninjas: [
      { name: "Divyansh", age: "23", belt: "black", id: 1},
      { name: "Ayushi", age: "12", belt: "pink", id: 2},
      { name: "Mehul", age: "18", belt: "green", id: 3}
  ]
  }

  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id=Math.round(Math.random()*100);
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja= (id) =>{
    console.log(id)
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id!==id
    })
    this.setState({
      ninjas:ninjas
    })
    }
  render(){
  return (
    <div className="App">
      <h1>My First React APP</h1>
      <p>Welcome :)</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      {/* <Ninjas name="RYU" age ="25" belt="black"> */}
      <AddNinja addNinja={ this.addNinja } />
    </div>

  );
}
}


// function App() {
//   const ninjas= [
//       { name: "Divyansh", age: "23", belt: "black", id: 1},
//       { name: "Ayushi", age: "12", belt: "pink", id: 2},
//       { name: "Mehul", age: "18", belt: "green", id: 3}
//   ]
//   addNinja = (ninja) => {
//     console.log(ninja);
//   }
//   return (
//     <div className="App">
//       <h1>My First React APP</h1>
//       <p>Welcome :)</p>
//       <Ninjas ninjas={ninjas} />
//       {/* <Ninjas name="RYU" age ="25" belt="black"> */}
//       <AddNinja addNinja={ this.addNinja } />
//     </div>

//   );
// }

export default App;
