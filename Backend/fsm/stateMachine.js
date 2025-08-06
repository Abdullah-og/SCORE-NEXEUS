const { createMachine, assign } = require('xstate');

const fetchMachine = createMachine({
  /** @xstate-layout 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 */
  
  id: 'Score Nexus',
  initial: "LOGIN",
  context: {
    retries: 0
  },
  states: {
    LOGIN: {
      on: {
        login:{ 
          target:'DASHBOARD',
          actions:['EmailValidation']
        },
        signup:{
          target:'SIGNUP',
          actions:['SignupInfo']
        }
      }
    },
    SIGNUP: {
      on: {
        login:{
          target:'LOGIN',
          actions:['SignupInfo']
        },
        Register:{
          target:'LOGIN',
          actions:['SignupInfo']
        }
      }
    },
    DASHBOARD:{
      on:{
        AddPlayers:{
          target:'ADDPLAYER',
          actions:['PlayerAddition']
        },
        ManagePlayer:{
          target:'MANAGEPLAYER',
          actions:['ManagePlayer']       
        },
        ScheduleMatch:{
          target:'SCHEDULEMATCH',
          actions:['ScheduleMatch']
        },
        about:{
          target:'ABOUT',
          actions:[]
        },
        logout:{
          target:'LOGIN',
          actions:['Logout']
        }
      }
    },
    ADDPLAYER:{
      on:{
        AddPlayers:{
          target:'ADDPLAYER',
          actions:['PlayerAddition']
        },
        Dashboard:{
          target:'DASHBOARD',
          actions:['Dashboard']
        },
        ManagePlayer:{
          target:'MANAGEPLAYER',
          actions:['ManagePlayer']
        },
        ScheduleMatch:{
          target:'SCHEDULEMATCH',
          actions:['MatchInfo']
        },
        about:{
          target:'ABOUT',
          actions:[]
        },
        logout:{
          target:'LOGIN',
          actions:['Logout']
        },
      }
    },
    MANAGEPLAYER:{
      on:{
        Edit:{
          target:'EDITPLAYER',
          actions:['EditName']
        },
        Delete:{
          target:'MANAGEPLAYER',
          actions:['DeleteName']
        },
        Dashboard:{
          target:'DASHBOARD',
          actions:['Dashboard']
        },
        ScheduleMatch:{
          target:'SCHEDULEMATCH',
          actions:['MatchInfo']
        },
        AddPlayers:{
          target:'ADDPLAYER',
          actions:['PlayerAddition']
        },
        ManagePlayer:{
          target:'MANAGEPLAYER',
          actions:['ManagePlayer']
        },
        logout:{
          target:'LOGIN',
          actions:['Logout']
        },
        about:{
          target:'ABOUT',
          actions:[]
        },
      }
    },
    EDITPLAYER:{
      on:{
        Savechanges:{
          target:'MANAGEPLAYER',
          actions:['PlayerUpdated'],
        },
        Cancel:{
          target:'MANAGEPLAYER',
          actions:['UpdationCancel']
        },
        Edit:{
          target:'EDITPLAYER',
          actions:['EditName']
        },
      }
    },
    
    SCHEDULEMATCH:{
      on:{
        ScheduleMatch:{
          target:'SCHEDULEMATCH',
          actions:['MatchInfo']
        },
        Edit:{
          target:'SCHEDULEMATCH',
          actions:['EditMatch']
        },
        Delete:{
          target:'SCHEDULEMATCH',
          actions:['DeleteMatch']
        },
        Dashboard:{
          target:'DASHBOARD',
          actions:['Dashboard']
        },
        ManagePlayer:{
          target:'MANAGEPLAYER',
          actions:['ManagePlayer']
        },
        AddPlayers:{
          target:'ADDPLAYER',
          actions:['PlayerAddition']
        },
        logout:{
          target:'LOGIN',
          actions:['Logout']
        },
        about:{
          target:'ABOUT',
          actions:[]
        },
      }
    },
    ABOUT:{
      on:{
        AddPlayers:{
          target:'ADDPLAYER',
          actions:['PlayerAddition']
        },
        ManagePlayer:{
          target:'MANAGEPLAYER',
          actions:['ManagePlayer']       
        },
        ScheduleMatch:{
          target:'SCHEDULEMATCH',
          actions:['ScheduleMatch']
        }, 
        about:{
          target:'ABOUT',
          actions:[]
        },
        logout:{
          target:'LOGIN',
          actions:['Logout']
        }

      }
      
    }
  },
  actions:{
    EmailValidation: (context, event) => {
      console.log('Validating email');
    },
    SignupInfo: (context, event) => {
      console.log('Processing signup info');
    },
    PlayerAddition: (context, event) => {
      console.log('Adding player');
    },
    EditName: (context, event) => {
      console.log('Editing player name');
    },
    DeleteName: (context, event) => {
      console.log('Deleting player');
    },
    PlayerUpdated: (context, event) => {
      console.log('Player update saved.');
    },
    UpdationCancel: (context, event) => {
      console.log('Player edit cancelled.');
    },
    MatchInfo: (context, event) => {
      console.log('Scheduling match.');
    },
    EditMatch: (context, event) => {
      console.log('Editing match');
    },
    DeleteMatch: (context, event) => {
      console.log('Deleting match');
    }
  }
});

module.exports = fetchMachine;
