const { createMachine, assign } = require('xstate');

const fetchMachine = createMachine({
  
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
        logout:{
          target:'LOGIN',
          actions:['Logout']
        }
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
        }
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
