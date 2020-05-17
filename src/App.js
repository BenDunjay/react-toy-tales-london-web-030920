import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  state = {
    toys: [],
    display: false,
    name: "",
    url: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let newToy =  {name: this.state.name,
                  image: this.state.url,
                  likes: 0}
                  console.log(newToy)
  
      fetch(`http://localhost:3000/toys`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newToy)
      }).then(this.fetchData())
  }

  handleLike = (event, toy) => {
    event.preventDefault()

      toy.likes += 1
  
      fetch(`http://localhost:3000/toys/${toy.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(toy)
      }).then(this.fetchData())
  }

  handleDelete = (event, toy) => {
    event.preventDefault()
  
      fetch(`http://localhost:3000/toys/${toy.id}`,{
      method: 'DELETE'
      }).then(this.fetchData())
  }

handleChange = (event) => {
  event.persist()
  this.setState({
    [event.target.name]: event.target.value
  })
}

fetchData = () => {
  fetch(`http://localhost:3000/toys`)
.then(response => response.json())
.then((data) => this.setState({
    toys: data
}))
}

  componentDidMount(){
  this.fetchData()
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }



  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleChange={this.handleChange} toyName={this.state.name}  toyImage={this.state.url}  handleSubmit={this.handleSubmit}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleLike={this.handleLike} handleDelete={this.handleDelete}/>
      </>
    );
  }

}

export default App;
