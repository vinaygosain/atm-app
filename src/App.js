import React from 'react';
import InputForm from './components/inputForm';
import BreakdownTable from './components/breakdownTable';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalAmount: 0,
    }

    this.handleChangeAmount = this.handleChangeAmount.bind(this);
  }

  handleChangeAmount(val) {
    this.setState({
      totalAmount: val,
    })
  }

  render() {
    return (
      <>
        <div className="title-main">ATM Money Dispenser</div>
        <div className="app">
          <InputForm onChangeAmount={this.handleChangeAmount} />
          <BreakdownTable totalAmount={this.state.totalAmount} />
        </div>
      </>
    );
  }
}

export default App;
