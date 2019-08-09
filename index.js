import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import './style.css';
import 'antd/dist/antd.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
 <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">
      Search
    </Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">
      Search
    </Button>
  </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
