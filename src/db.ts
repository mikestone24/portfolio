export function getListItems(): {name:string,years:string,description:string,picture:string}[] {
    // This dummy data is used to demonstrate
    // all data is sanitized safely, however
    // you could imagine this would be data from a
    // database in a real app
    return [
        {
          name:'crossinstall',
          years:"2016-2018",
          description:"Programmed interactive ads",
          picture:"http://mikestone24.github.io/crossinstall.png"
        },
        {
          name:'onpointdelivers',
          years:"2016",
          description:"Worked with investors to create a delivery service",
          picture:"http://mikestone24.github.io/onpoint.png"
        },
        {
          name:'firehoseproject',
          years:"2016",
          description:"Took an online class focused on team learning and projects",
            picture:"http://mikestone24.github.io/firehose.jpg"
      },
        {
          name:'Circa',
          years:"2015",
          description:"Created an HTML5 multiplayer board game",
          picture:"http://mikestone24.github.io/circa.png"
        },
        {name:'GoodMoney',
         years:"2013-2014",
         description:"Made a web app where you could easily share your bank transactions",
          picture:"http://mikestone24.github.io/goodmoney.png"
     },
        {name:'Trext',
        years:"2013",
        description:"Developed text message to XMPP node.js backend service",
    picture:"http://mikestone24.github.io/trext.jpg"
       },
        {
          name:'InTheMixRadio',
          years:"2012",
          description:"Ran an internet radio platform on iOS, Android and web ",
            picture:"http://mikestone24.github.io/inthemixradio.png"

        },
        {

          name:'Hellawack',
          years:"2007-2008",
          description:"Owned website that paired graphic artists and game developers"

      },
        {name:'Matrix Rayne'}

    ];
}

export function getMenuItems(): MenuItemProps[] {
    // These menu items represent each <li>
    // in the top menu bar, typically static data
    return [
        {
            id: 'home',
            href: '#',
            text: 'Home',
        },

    ];
}
