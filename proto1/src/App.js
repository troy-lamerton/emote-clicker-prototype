import React, {Component} from 'react';

import Sidebar from './components/Sidebar';
import EmoteCollection from './components/EmoteCollection';
import StreamerCollection from './components/StreamerCollection';
import World from './components/World';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 9001
    };
  }

  componentWillMount() {
    this.FPS = 60;
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h2>Emote Clicker</h2>
        </header>
        {/* GAME */}

          <Sidebar width={350} id="leftControls">

            <EmoteCollection kappaCount={10} pogChampCount={2} />
            <StreamerCollection />

          </Sidebar>


          <World
            width={644}
            height={125}
            interval={1000 / this.FPS} />

        {/* END OF GAME */}
        <footer className="game-footer">
          ---footer---
        </footer>
      </main>
    );
  }
}

export default App;
