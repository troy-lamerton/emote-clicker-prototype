import React, {Component, PropTypes} from 'react';

import Enemies from '../Enemies';
import Player from '../Player';
// import EnemyGenerator from '../EnemyGenerator';

import './styles.css';

class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextTickAt: null,
      interval: props.interval || 999,
      picId: 'newbie',
      picSrc: '',
      enemies: [
        {alive: false, x: 100, emoteId: 'Kappa'},
        {alive: true, x: 250, emoteId: 'Kappa'},
        {alive: true, x: 500, emoteId: 'PogChamp'}
      ]
    };
    this.gameTick = this.gameTick.bind(this);
  }

  gameTickDue(state) {
    // gone past the timestamp game should tick at
    return Date.now() >= state.nextTickAt;
  }

  setNextGameTick = () => {
    const now = Date.now();
    console.info('next tick, now:', now)
    this.setState((state) => ({
      nextTickAt: now + state.interval
    }))
  }

  get spawnEnemy() {
    return (index, emoteId) => {
      this.setState((state) => {
        const { enemies } = state;
        if (index > 0 && index < enemies.length) {
          const newEnemy = enemies.slice(index, index + 1);
          newEnemy.alive = true;
          enemies[index] = newEnemy;
          this.setState({ enemies });
        } else {
          console.error('index out of range', 'check spawnEnemy()');
        }
      })
    }
  }

  gameTick() {
    this.forceUpdate();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.gameTickDue(nextState)) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.gameTickDue(prevState)) {
      this.setNextGameTick();
    }
  }

  render() {
    return (
      <div id="World" style={{...this.props}}>
        <Player
          streamerId="newbie"
          width={100}
          height={100}
          startY={200}
          startX={50} />

        <Enemies
          sprites={this.state.enemies} />

        <div className="generators-container">
          {/*<EnemyGenerator emoteId="Kappa" spawnEnemy={this.spawnEnemy('Kappa')} />*/}
          {/*<EnemyGenerator emoteId="PogChamp" spawnEnemy={this.spawnEnemy('PogChamp')} disabled />*/}
        </div>
      </div>
    );
  }
}

World.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  picId: PropTypes.oneOf(['newbie', 'AtheneLIVE']),
};

export default World;
