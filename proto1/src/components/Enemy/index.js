import React, {Component, PropTypes} from 'react';

import ImageSquare from '../ImageSquare';

import './styles.css';

function Enemy(props) {
  const enemyStyle = {
    display: (props.enabled) ? 'block' : 'none'
  };

  return (
    <div className="enemy" style={enemyStyle}>
      <ImageSquare
        imageFolder="emotes"
        imageName={sprite.emoteId}
        width={50}
        height={50}
        x={sprite.x}
        y={200}
      />
    </div>
  );
}

Enemy.propTypes = {
  sprites: PropTypes.array.isRequired
};

export default Enemy;
