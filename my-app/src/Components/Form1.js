import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      node: {
        name: props.name,
        type: props.type
      }
    }
  }
  handleNameChanged(event) {
    var node        = this.state.node;
    node.name  = event.target.value;
    this.setState({ node: node });
  }


  handleTypeChanged(event) {
    var node    = this.state.node;
    node.status = event.target.value;

    this.setState({ node: node });
  }

  handleButtonClicked() {
    console.log(this.state.node);
  }

  render() {
    return (
      <div class = 'row'>
        <div class = 'col'>
        <label>
          Type:
        </label>
        <br/>
        <select value={this.state.node.type} onChange={this.handleTypeChanged.bind(this)}>
          <option value="PENDING">
            Pending
          </option>
          <option value="APPROVED">
            Approved
          </option>
        </select>
        </div>
        <div class = 'col'>
        <label>
          Node Name: 
        </label>
        <br/>
        <input type="text" value={this.state.node.name} onChange={this.handleNameChanged.bind(this)}/>
        </div>
        <div class = 'col'>      
        <br/>
        <Fab color="primary" size="small" aria-label="add" onClick={this.handleButtonClicked.bind(this)}>
          <AddIcon />
        </Fab>
        </div>
      </div>
    );
  }
}

