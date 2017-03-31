import React, {Component, PropTypes} from 'react';

import Enemy from '../Enemy';
import EnemyContainer from '../Enemy';

import './styles.css';

class Enemies extends Component {
  render() {
    return (
      <div id="Enemies">
        {this.props.sprites.map((sprite) => {
          let enemyContent = '-=-';

          if (sprite.alive) {
            enemyContent = (<Enemy
              emoteId={sprite.emoteId}
              width={50}
              height={50}
              x={sprite.x}
              y={200}
            />);
          } else {
            enemyContent = 'X_X';
          }
          return (<EnemyContainer>
              {enemyContent}
            </EnemyContainer>);
        })}
      </div>
    );
  }
}

Enemies.propTypes = {
  sprites: PropTypes.array.isRequired
};

export default Enemies;
