import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => {
          <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    );
  }
}

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "12"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label onClick={() => this.handleChange()} htmlFor="new-todo">
            What needs to be done?
          </label>
          <input id="new-todo" value={this.state.text} />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange = () => {
    console.log(this);
    // this.setState({ text: e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}
