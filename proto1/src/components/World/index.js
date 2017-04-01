import React, {Component, PropTypes} from 'react';
import {mapValues} from 'lodash';

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
      player: this.initialPlayer,
      enemies: this.initialEnemies,//: enemySprites
    };

    this.gameTick = this.gameTick.bind(this);
    this.gameTickerRef = null;
  }

  get initialPlayer() {
    const player = {
      x: 0,
      radius: 50
    };
    return player;
  }

  get initialEnemies() {
    const NUM_ENEMIES = 3;
  
      // {alive: true, x: 250, radius: 15, emoteId: 'Kappa'},
      // {alive: true, x: 500, radius: 15, emoteId: 'PogChamp'},
    const enemySkeleton = {
      alive: true,
      x: 80,
      radius: 15,
      emoteId: 'Kappa'
    };
    let enemies = new Array(NUM_ENEMIES);
    enemies = enemies.fill(enemySkeleton);

    enemies = enemies.map((skeleton, index) => (
      mapValues(skeleton, (value, key) => {
        switch (key) {

          case 'x':
            return value + value * index;

          default:
            return value;
        }
      })
    ));
    console.log(enemies)

    return enemies.map((sprite) => (
      Object.assign({}, sprite)
    ));
  }

  killEnemy(index, callback = () => {}) {
    this.setState((state) => {
      const enemies = state.enemies.map(sprite => Object.assign({}, sprite));
      const killedEnemy = enemies[index];
      killedEnemy.alive = false;
      enemies[index] = killedEnemy;
      return { enemies };
    }, callback);
  }

  difference = (a, b) => (Math.abs(a - b));

  overlappingPlayer(enemy) {
    // difference between edges
    // assuming x is the center of the object
    // assuming enemy is travelling negatively along x
    // CHECKS: the left edge of the enemy is on top of
    // right edge of the player
    const enemyX = enemy.x - enemy.radius;
    const playerX = this.state.player.x;
    const edgeDifference = this.difference(enemyX, playerX)
    // console.log(edgeDifference)//, playerX)
    return edgeDifference <= 1;
  }

  componentDidMount() {
    this.gameTickerRef = window.setInterval(this.gameTick, this.state.interval);
    // reset enemies
    window.setInterval(() => {
      console.log(this.initialEnemies);
      this.setState(Object.assign({}, {enemies: this.initialEnemies}));
    }, 1300);
  }

  componentWillUnmount() {
    window.clearInterval(this.gameTickerRef);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.gameTickDue(nextState)) {
      console.log('.');
      return true;
    }
    return false;
  }

  /* GAME LOOP */
  componentDidUpdate(prevProps, prevState) {
    /*if (this.gameTickDue(prevState)) {
      // update game state etc
      // check overlapping player
      this.state.enemies.forEach((sprite, index) => {
        if (this.overlappingPlayer(sprite)) {
          // console.info('ded', index);
          // this.killEnemy(index, this.setNextGameTick);
        }
      })
    }*/
  }

  gameTickDue(state) {
    // gone past the timestamp game should tick at
    return Date.now() >= state.nextTickAt;
  }

  setNextGameTick = () => {
    const now = Date.now();
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
    this.setState((state) => {
      const enemies = state.enemies.slice();
      let enemiesUpdated = enemies.map((sprite, index) => {
        if (this.overlappingPlayer(sprite)) {
          this.killEnemy(index);
        }
        return Object.assign(sprite, {
          x: sprite.x - 1
        })
      });
      return enemiesUpdated
    });
  }

  render() {
    return (
      <div id="World" style={{...this.props}}>
        <Player
          streamerId="newbie"
          radius={50}
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
