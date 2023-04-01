import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 5 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Нажми, чтобы добавить 5</button>
      </div>
    );
  }
}

export default MyComponent