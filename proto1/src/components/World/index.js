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
  }

  get initialPlayer() {
    const player = {
      x: 0,
      y: 0,
      radius: 50
    };
    return player;
  }

  get initialEnemies() {
    const NUM_ENEMIES = 3;
  
      // {alive: true, x: 250, radius: 15, emoteId: 'Kappa'},
      // {alive: true, x: 500, radius: 15, emoteId: 'PogChamp'},
    const kappaPrevalence = 0.7;
    const randomEmoteId = (Math.random() <= kappaPrevalence) ? 'Kappa' : 'PogChamp';
    const enemySkeleton = {
      alive: true,
      x: 80,
      radius: 15,
      emoteId: randomEmoteId,
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

    return enemies.map((sprite) => (
      Object.assign({}, sprite)
    ));
  }

  killEnemy(index) {
    this.setState((state) => {
      const enemies = state.enemies.map(sprite => Object.assign({}, sprite));
      const killedEnemy = enemies[index];
      killedEnemy.alive = false;
      enemies[index] = killedEnemy;

      this.props.emoteCollected(killedEnemy.emoteId);
      return { enemies };
    });
  }

  difference = (a, b) => (Math.abs(a - b));

  overlappingPlayer(sprite) {
    // difference between edges
    // assuming sprite.x is center of sprite
    // assuming sprite is travelling negatively along x
    // CHECKS: the left edge of the sprite is on top of
    // right edge of the player
    const spriteX = sprite.x - sprite.radius;
    const playerX = this.state.player.x;
    const edgeDifference = this.difference(spriteX, playerX)
    return edgeDifference <= 1;
  }

  componentDidMount() {
    this.gameTickerRef = window.setInterval(this.gameTick, this.state.interval);
    // reset enemies
    window.setInterval(() => {
      this.setState(Object.assign({}, {enemies: this.initialEnemies}));
    }, 1300);
  }

  componentWillUnmount() {
    window.clearInterval(this.gameTickerRef);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.gameTickDue(nextState)) {
      return true;
    }
    return false;
  }

  /* GAME LOOP */
      // update game state etc
      // check overlapping player

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
          console.error('index out of range', 'check World spawnEnemy()');
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
      <div id="World">
        <Player
          streamerId="newbie"
          radius={50}
          width={70}
          height={70}
          {...this.state.player} />

        <Enemies
          sprites={this.state.enemies} />

        {/*<div className="generators-container">
          <EnemyGenerator emoteId="Kappa" spawnEnemy={this.spawnEnemy('Kappa')} />
          <EnemyGenerator emoteId="PogChamp" spawnEnemy={this.spawnEnemy('PogChamp')} disabled />
        </div>*/}
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
