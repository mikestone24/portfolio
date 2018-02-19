import * as React from 'react';
import Project from './Project'
import {
    Divider,
    Header,
    Icon,
    Image,
    Segment,
    Label,
} from 'semantic-ui-react'

export default class App extends React.Component<AppProps, AppProps> {
    constructor(props: AppProps) {
        super(props);
        // We initialise its state by using the `props` that were passed in when it
        // App component has fully mounted on the DOM
        this.state = { listItems: this.props.listItems };
    }

    render() {
        const { listItems } = this.state;

        const colors = [
            'red', 'orange', 'yellow', 'olive', 'green', 'teal',
            'blue', 'violet', 'purple', 'pink', 'brown',
        ]

        let timeline = <section id='timeline'>
            <div className="demo-card-wrapper">
              { this.state.listItems.map((card, index) => <Project card={card} index={index} key={"project"+index} />) }
            </div>
        </section>

        return (
            <div>
                <Segment inverted vertical >
                    <div>
                        <Segment inverted clearing style={{ marginBottom: '0px', padding: '0px', paddingLeft: '0px' }}>
                            <Header as='h1' floated='left' className='mikestone' style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: "0px" }}>
                                Mike Stone
                            </Header>

                            <Header as='h1' floated='right' className='contact' style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0 }}>
                                <Label size='massive' as='a' href='http://github.com/mikestonecodes'>
                                    <Icon name='github' />
                                    Github
                                </Label>

                                <Label size='massive' as='a' href='mailto:michaeljacobstone@gmail.com'>
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
                    style={{ backgroundColor: "#383838", padding: '20px' }}
                >
                    <p style={{ fontSize: '1.8em', fontWeight: 'normal', marginBottom: '5px' }}>
                        For the last 14 years I have coded websites and games. I can help build your next project!
                    </p>
                    <Divider inverted />
                    <Label.Group size='big' className='skills' style={{ marginTop: '10px' }}  >
                        {
                            ['react.js', 'html5', 'canvas', 'phaser', 'node.js', 'php', 'javascript', 'ruby on rails', 'mongodb', 'redis', 'svg', 'websockets'].map((card, inde) =>
                                <Label basic
                                    className={colors[inde % colors.length]}
                                    style={{ boxShadow: "0px 1px 22px 4px rgba(0, 0, 0, 0.07)" }}
                                    key={"skill"+inde}
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
