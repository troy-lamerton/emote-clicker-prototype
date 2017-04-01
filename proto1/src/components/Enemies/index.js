import React, {PropTypes} from 'react';

import Enemy from '../Enemy';
import EnemyContainer from '../EnemyContainer';

import './styles.css';

const Enemies = ({sprites}) => (
  <div id="Enemies">
    {sprites.map((sprite, index) => {
      let enemyContent = '-=-';
      if (sprite.alive) {
        enemyContent = (<Enemy
          emoteId={sprite.emoteId}
          width={50}
          height={50}
        />);
      } else {
        enemyContent = 'X_X';
      }

      const wrappedEnemy = (<EnemyContainer
        key={index}
        enabled={sprite.alive}
        x={sprite.x + 100}
        y={200}>
          {enemyContent}
        </EnemyContainer>);

      return wrappedEnemy;
    })}
  </div>
);

Enemies.propTypes = {
  sprites: PropTypes.arrayOf((sprites, key, componentName) => {
    let errorObj;
    sprites.forEach((spriteObj, index) => {
      if (spriteObj && (typeof spriteObj === 'object')) {
        if (spriteObj.hasOwnProperty('emoteId')) {
          if (spriteObj.hasOwnProperty('alive') && spriteObj.hasOwnProperty('kill')) {
            errorObj = false;
          } else {
            errorObj = new Error('alive, kill properties not found');
          }
        } else {
          errorObj = new Error(
            `Invalid prop "sprites" in Enemies -- failed at "emoteId": ${spriteObj} ${key}`
          );
        }
      } else {
        errorObj = new Error(
          `Invalid prop "sprites" in Enemies -- failed at "object": ${spriteObj} ${key}`
        );
      }
    });
    if (errorObj) return errorObj;
    else if (errorObj === false) return;
    else {
      return new Error(
        '"sprites" Invalid prop, in component "Enemies": "hasOwnProperty" failed.'
      );
    }
  })
};

export default Enemies;
