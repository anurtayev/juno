import React from 'react';
import ReactMeteorData from 'meteor/react-meteor-data';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <AccountsUI />
          </div>
          <div>
            {this.props.toolbar}
          </div>
        </div>
        <div>
          {React.cloneElement(this.props.workbench, {
            projects: this.data.projects,
            projectsReady: this.data.projectsReady
          })}
        </div>
      </div>
    );
  }
}