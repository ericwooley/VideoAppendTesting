import React, {Component} from 'react';
import ReactInStyle from 'react-in-style';
class Main extends Component {
  render() {
    return (
      <div className="main" >Tests the stuff</div>
    );
  }
}
Main.prototype.displayName = 'Main';

ReactInStyle.add('.main', {
  backgroundColor: 'rgba(0, 0, 0, .9)'
});


export default Main;
