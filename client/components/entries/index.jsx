import React from 'react';

export default (props) => (
  <table className='table'>
    <thead>
    
      <tr className='info'>
        <button type="button" className="btn btn-success" onClick={this.handleSubmit} >Invoice</button>
      </tr>

      <tr className='info'>
        <th>&#8230;</th>
        <th>Date</th>
        <th>Code</th>
        <th>Title</th>
        <th>Task</th>
        <th>Hours</th>
        <th>Description</th>
      </tr>
      
    </thead>
    <tbody>
    
      {props.entries.map( entry => (
        <tr key={entry._id}>
          <td>
            <button className="edit"  onClick={this.copyEntry}>&#x270e;</button>
            <button className="copy"  onClick={this.copyEntry}>&#x2398;</button>
            <button className="delete" onClick={this.deleteEntry}>&times;</button>
          </td>
          <td>{entry.date}</td>
          <td>{entry.projectCode}</td>
          <td>{entry.projectName}</td>
          <td>{entry.projecTask}</td>
          <td>{entry.hours}</td>
          <td>{entry.description}</td>
          <div className="col-xs-2">{moment(this.props.entry.createdAt).format('D-MM-YY, hh:mm')}</div>

        </tr>
      ))}
      
    </tbody>
  </table>
);