import React, { Component } from 'react';

export default class ButtonRender extends Component {
  render() {
    return (
      <div>
        <button style={{ margin: '10px' }}>All Items</button>
        <button style={{ margin: '10px' }}>Unfinished Items</button>
        <button style={{ margin: '10px' }}>Completed Items</button>
      </div>
    );
  }
}
