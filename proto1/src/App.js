import React, {Component} from 'react';

import Sidebar from './components/Sidebar';
import EmoteCollection from './components/EmoteCollection';
import StreamerCollection from './components/StreamerCollection';
import World from './components/World';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.leftControlWidth = 350;
  }
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h2>Emote Clicker</h2>
        </header>
        {/* GAME */}

          <Sidebar width={this.leftControlWidth}>

            {/*<EmoteCollection />*/}
            {/*<StreamerCollection />*/}

          </Sidebar>


          <World type="fullsize" />

        {/* END OF GAME */}
        <p className="App-intro">
          Login with Twitch to save progress
        </p>
      </main>
    );
  }
}

export default App;
