import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return <Calculator tableButtons={this.tableButtons} />;
  }
}

export default App;
