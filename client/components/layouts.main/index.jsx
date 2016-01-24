import React from 'react';
import AccountsUI from '../accounts-ui/index.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ReactMeteorData from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import reactMixin from 'react-mixin';


class MainLayout extends React.Component {
  
  getMeteorData() { 
    console.log('rrrrrr');
    console.log(Meteor.user());
    return {
      username: Meteor.user() ? Meteor.user().username : ''
    };
  }
  
  render() {
    
    console.log(this.data.username);
    
    return (
      <div>
        <header>
          <AccountsUI/>
        </header>
        <div>
          {this.props.content()}
        </div>
      </div>
    );
  }
}

reactMixin(MainLayout.prototype, ReactMeteorData);

export default MainLayout;
