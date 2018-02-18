import * as React from 'react';

import {
  Divider,
  Header,
  Icon,
  Image,
  Segment,
  Label,
} from 'semantic-ui-react'



interface AppState {
    listItems: {name:string,years:string,description:string,picture:string,title:string,link:string}[];
    disabled: boolean;
    visible: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
    removeCss:any;
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

        const { listItems, disabled } = this.state;
        const { visible } = this.state

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown',
]
        let timeline=  <section id='timeline'>
    	  <div className="demo-card-wrapper">
      {
        this.state.listItems.map( (card,index) =>

          <div className= {`demo-card demo-card--step${index+1}`}   >
            <a href={card.link}>
            <div className="head">
              <div className="number-box">
                {card.years}
              </div>
              <h2>{card.name} <span>{card.title}</span> </h2>
            </div>
            <div className="body">

              <img src={card.picture} alt="Graphic" ></img>

            </div>
            <div className="description">{card.description}</div>
              </a>
          </div>

        )
      }



    </div>

       </section>

        return (


  <div>
      <Segment inverted   vertical >


        <div>


        <Segment inverted clearing style={{marginBottom:'0px', padding:'0px', paddingLeft:'0px'}}>
        <Header as='h1' floated='left' className='mikestone' style={{ fontSize: '4em', fontWeight: 'normal',marginBottom:"0px"}}>
            Mike Stone
        </Header>

      <Header as='h1' floated='right' className='contact'  style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}>

      <Label size='massive' as='a' href='http://github.com/mikestonecodes'>

      <Icon name='github' />
        Github
        </Label>

      <Label size='massive' as='a'  href='mailto:michaeljacobstone@gmail.com'>
      <Icon name='mail' />
       Contact
    </Label>


      </Header>

    </Segment>





        </div>
      </Segment>


      <Segment
        inverted
        textAlign='center'
        vertical

        style={{backgroundColor:"#383838",padding:'20px'}}
      >
      <p   style={{ fontSize: '1.8em', fontWeight: 'normal',marginBottom:'5px'}}>
      For the last 14 years I have coded websites and games. I can help build your next project!

      </p>

      <Divider inverted/>
      <Label.Group size='big' style={{marginTop:'10px'}}  >
      {
        ['react.js','html5','canvas','phaser','node.js','php','javascript','ruby on rails','mongodb','redis','svg','websockets'].map( (card,inde)=>
           <Label basic
           color={colors[inde%colors.length] }

           style={{ boxShadow: "0px 1px 22px 4px rgba(0, 0, 0, 0.07)" } }
           >{card}</Label>
        )

      }
      </Label.Group>





  </Segment>



     {timeline}





  </div>
        );
    }
}
