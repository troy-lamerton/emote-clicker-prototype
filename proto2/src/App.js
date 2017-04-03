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
      Kappa: 0,
      PogChamp: 0,
      streamers: {
        newbie: {
          name: 'Gamerboy23'
        },
        AtheneLIVE: {
          name: 'AtheneLIVE',
        },
        random: {
          name: '?'
        }
      },
      activeStreamer: 'newbie',
    };

    this.emoteCollected = this.emoteCollected.bind(this);
  }

  componentWillMount() {
    this.FPS = 60;
  }

  emoteCollected(emoteId) {
    this.setState((prevState) => ({
      [emoteId]: prevState[emoteId] + 1
    }));
  }

  selectStreamer = (streamerId) => {
    this.setState((state) => ({
      activeStreamer: streamerId
    }));
  }

  render() {
    return (
      <main className="App">
        {/* GAME */}
        <main className="game">
          <Sidebar
            width={3000}
            id="Sidebar-left">

            <EmoteCollection
              width={100}
              height={200}
              {...this.state} />

            <StreamerCollection
              streamers={this.state.streamers}
              activeStreamer={this.state.activeStreamer}
              onSelectStreamer={this.selectStreamer} />

          </Sidebar>


          <World
            width={644}
            height={125}
            interval={1000 / this.FPS}
            emoteCollected={this.emoteCollected}
            activeStreamer={this.state.activeStreamer}
          />

        </main>
        {/* END OF GAME */}
        <footer className="game-footer">
          ---footer---
        </footer>
      </main>
    );
  }
}

export default App;
