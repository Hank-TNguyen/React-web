import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementByID('app'));