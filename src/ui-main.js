const React = require('react');
const {Component} = React;
const {render} = require('react-dom');

class Application extends Component {
  render() {
    return (
      <div className="application">
        <div className="header">
          <h1>yeah</h1>
        </div>
        <div className="body">
          <div className="sidebar">
            sidebar...
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

render(
    <Application>
      boom....
    </Application>,
    document.getElementById('application-wrapper'));
