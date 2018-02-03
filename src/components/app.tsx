import * as React from 'react';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
const FixedMenu = () => (
<Menu fixed='top' size='large'>
<Container>
  <Menu.Item as='a' active>Home</Menu.Item>
  <Menu.Item as='a'>Work</Menu.Item>
  <Menu.Item as='a'>Company</Menu.Item>
  <Menu.Item as='a'>Careers</Menu.Item>
  <Menu.Menu position='right'>
    <Menu.Item className='item'>
      <Button as='a'>Log in</Button>
    </Menu.Item>
    <Menu.Item>
      <Button as='a' primary>Sign Up</Button>
    </Menu.Item>
  </Menu.Menu>
</Container>
</Menu>
)
interface AppState {
    listItems: string[];
    disabled: boolean;
    visible: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        // We initialise its state by using the `props` that were passed in when it
        // was first rendered. We also want the button to be disabled until the
        // App component has fully mounted on the DOM
        this.state = { listItems: this.props.listItems, disabled: true , visible:false};
    }

    // Once the App component has been mounted, we can enable the button
    componentDidMount() {
        this.setState({ disabled: false });
    }

    // Update the state whenever its clicked by adding a new item to
    // the list - imagine this being updated with the results of AJAX calls, etc
    handleAdd = () => {
        this.setState(prevState => ({
            listItems: prevState.listItems.concat('Item ' + prevState.listItems.length),
        }));
    };

    handleSort = () => {
        this.setState(prevState => ({
            listItems: prevState.listItems.sort(),
        }));
    };

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    render() {
        const { menuItems } = this.props;
        const { listItems, disabled } = this.state;
        const { visible } = this.state

        return (
          <div>



      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >


        <Container text>
          <Header
            as='h1'
            content='Mike Stone'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
          />
          <Header
            as='h2'
            content='Web frontend and games'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Button primary size='huge'>
            Portfolio
          </Button>
        </Container>
      </Segment>


    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>

          </Grid.Column>
          <Grid.Column floated='right' width={6}>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>


          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
    
    </Segment>
  </div>
        );
    }
}
