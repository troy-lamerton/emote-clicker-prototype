import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

const EnemyContainer = (props) => {
  const { x, y, alive, children } = props;
  const containerStyle = {
    display: (props.enabled) ? 'block' : 'none',
    opacity: (props.alive) ? 1 : 0.4,
    left: x,
    top: y,
  };
  // setTimeout(() => props.kill(0), 300);
  return (
    <div className={cx('enemy-container', {spinning: !alive})} style={containerStyle}>
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
