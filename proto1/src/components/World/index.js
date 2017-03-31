import React, {Component, PropTypes} from 'react';

import Enemies from '../Enemies';
import Player from '../Player';
import EnemyGenerator from '../EnemyGenerator';

import './styles.css';

class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picId: 'newbie',
      picSrc: '',
      enemies: [
        {alive: false, x: 0, emoteId: 'Kappa'},
        {alive: false, x: 0, emoteId: 'Kappa'},
        {alive: false, x: 0, emoteId: 'Kappa'}
      ]
    };
  }

  get spawnEnemy() {
    return (index, emoteId) => {
      this.setState((state) => {
        const { enemies } = state;
        if (index > 0 && index < enemies.length) {
          enemies.slice(index, index + 1).alive = true;
          return enemies;
        } else {
          console.error('index out of range', 'check spawnEnemy()');
        }
      })
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
          sprites={this.state.enemies}
        />

        <div className="generators-container">
          <EnemyGenerator emoteId="Kappa" spawnEnemy={this.spawnEnemy('Kappa')} />
          <EnemyGenerator emoteId="PogChamp" spawnEnemy={this.spawnEnemy('PogChamp')} disabled />
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
