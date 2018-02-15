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


import MasonryInfiniteScroller from 'react-masonry-infinite';
if (process.env.WEBPACK)require('../styles/index.scss');
interface AppState {
    listItems: { years:string,description:string,picture:string}[];
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


    render() {
        const { menuItems } = this.props;
        const { listItems, disabled } = this.state;
        const { visible } = this.state
        let timeline=  <section id='timeline'>
    	  <div className="demo-card-wrapper">
      {
        this.state.listItems.map( (card,index) =>
          <div className= {`demo-card demo-card--step${index+1}`}   >
            <div className="head">
              <div className="number-box">
                {card.years}
              </div>
              <h2>{card.name}</h2>
            </div>
            <div className="body">

              <img src={card.picture} alt="Graphic" ></img>

            </div>
            <div className="description">{card.description}</div>
          </div>
        )
      }



    </div>

       </section>

        return (


  <div>
      <Segment
        inverted
        textAlign='left'
        vertical
      >


        <div text style={{marginLeft:'10px'}}>
          <Header
            as='h1'
            content='Mike Stone'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}
          />
          <Header
            as='h2'
            content='Full Stack Development // Games'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />

        </div>
      </Segment>

     {timeline}





  </div>
        );
    }
}
