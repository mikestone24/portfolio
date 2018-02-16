export function getListItems(): {name:string,years:string,description:string,picture:string,title:string,link:string}[] {
    // This dummy data is used to demonstrate
    // all data is sanitized safely, however
    // you could imagine this would be data from a
    // database in a real app
    return [
        {
          name:'crossinstall',
          years:"2016-2018",
          description:"Programmed interactive ads",
          picture:"http://mikestone24.github.io/crossinstall.png",
          title:'Software Engineer',
          link:"http://crossinstall.com"
        },
        {
          name:'onpointdelivers',
          years:"2016",
          description:"Worked with investors to create a delivery service",
          picture:"http://mikestone24.github.io/onpoint.png",
          title:'Senior Technical Lead',
          link:"http://onpointdelivers.com"
        },
        {
          name:'firehoseproject',
          years:"2016",
          description:"Took an online class focused on ruby on rails and unit tests",
            picture:"http://mikestone24.github.io/firehose.jpg",
            title:'Student',
            link:"http://firehoseproject.com"
      },
        {
          name:'Circa',
          years:"2015",
          description:"Created an HTML5 multiplayer board game",
          picture:"http://mikestone24.github.io/circa.png",
          title:'Senior Technical Lead',
              link:"http://45.55.2.124/"
        },
        {name:'GoodMoney',
         years:"2013-2014",
         description:"Designed web app for sharing bank transactions",
          picture:"http://mikestone24.github.io/goodmoney.png",
          title:'Senior Technical Lead',
              link:"http://goodmoney.co"
     },
        {name:'Trext',
        years:"2013",
        description:"Developed text message to XMPP node.js backend service",
    picture:"http://mikestone24.github.io/trext.jpg",
      title:'Contractor',
      link:"http://trext.me/"
       },
        {
          name:'InTheMixRadio',
          years:"2012",
          description:"Ran an internet radio platform on iOS, Android and web ",
            picture:"http://mikestone24.github.io/inthemixradio.png",
              title:'Senior Technical Lead',
              link:"http://inthemixradio.com"

        },
        {

          name:'Hellawack',
          years:"2007-2008",
          description:"Owned website that paired artists and game developers",
            picture:"http://mikestone24.github.io/hellawack.png",
          title:'Owner',
          link:""

      },
        {name:'Matrix Rayne',
        years:"2004",
        description:"Modified flash game, generating tens of thousands of plays",
          picture:"http://mikestone24.github.io/matrixrayne.png",
            title:'Programmer',
            link:"https://www.youtube.com/watch?v=5tOmeJJEkDM&t=120s"
        }

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
