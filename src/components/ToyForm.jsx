import React, { Component } from 'react';

class ToyForm extends Component {

  render() {
    return (
      <div className="container" >
        <form className="add-toy-form"  onSubmit={this.props.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" placeholder="Enter a toy's name..." className="input-text" name="name" onChange={this.props.handleChange} value={this.props.toyName}/>
          <br/>
          <input type="text" placeholder="Enter a toy's image URL..." className="input-text" name="url"  onChange={this.props.handleChange}  value={this.props.toyImage}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"  />
        </form>
      </div>
    );
  }

}

export default ToyForm;
