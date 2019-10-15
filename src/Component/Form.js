import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={ev => ev.preventDefault()}>
       
        <input type="text" onChange={this.props.handleChange} />
        <p> {this.props.value}</p>
      </form>
    );
  }
}
export default Form;
