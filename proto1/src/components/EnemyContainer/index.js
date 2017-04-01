import React, {PropTypes} from 'react';

import './styles.css';

const EnemyContainer = (props) => {
  const { x, y, children } = props;
  const containerStyle = {
    display: (true || props.enabled) ? 'block' : 'none',
    left: x,
    top: y,
  };

  return (
    <div className="enemy-container" style={containerStyle}>
      {children}
    </div>
  );
}

EnemyContainer.propTypes = {
  enabled: PropTypes.bool,
  x: PropTypes.number.isRequired,
  y: PropTypes.number,
};

export default EnemyContainer;
