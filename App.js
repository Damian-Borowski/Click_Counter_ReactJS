class Counter extends React.Component {

  state = {
    count: 0,
    result: 0
  }

  handleMatchClick(type, number) {
    if (type === "substraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    } else if (type === "reset") {
      this.setState(prevState => (
        {
          count: 0,
          result: 0
        }
      ))
    }

  }

  render() {
    return (
      <>
        <button onClick={this.handleMatchClick.bind(this, "substraction", +1)}>+1</button>
        <button onClick={this.handleMatchClick.bind(this, "reset")}>Reset</button>
        <button onClick={() => this.handleMatchClick("substraction", 1)}>-1</button>
        <h1>Liczba kliknięć:{this.state.count}</h1>
        <h1>Wynik:{this.state.result}</h1>
      </>
    )
  }


}

ReactDOM.render(<Counter />, document.getElementById('root'))
