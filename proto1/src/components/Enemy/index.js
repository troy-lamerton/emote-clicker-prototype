import React, {PropTypes} from 'react';

import ImageSquare from '../ImageSquare';

import './styles.css';

const Enemy = (props) => (
  <div className="enemy">
    <ImageSquare
      imageFolder="emotes"
      imageName={props.emoteId}
    />
  </div>
);

Enemy.propTypes = {
  emoteId: PropTypes.string.isRequired,
  enabled: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Enemy;
