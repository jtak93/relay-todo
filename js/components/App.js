import React from 'react';
import Relay from 'react-relay';
import { Input } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleNameChange(e, data) {
    console.log(data);
    this.props.relay.setVariables({
      name: data.value
    })
  }
  render() {
    return (
      <div>
        <Input placeholder='Enter Name...' onChange={this.handleNameChange} />
        <h1>TODO list</h1>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  initialVariables: {
    name: ''
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name
        todos
      }
    `,
  },
});
