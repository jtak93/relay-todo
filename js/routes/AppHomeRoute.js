import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`
      query {
        viewer(name: "James Tak")
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
