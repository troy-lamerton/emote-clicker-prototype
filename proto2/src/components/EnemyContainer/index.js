import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

const EnemyContainer = (props) => {
  const { x, alive, enabled, children } = props;
  const containerStyle = {
    display: (enabled) ? 'block' : 'block',
    opacity: (alive) ? 1 : 0.7,
    left: x,
  };
  // setTimeout(() => props.kill(0), 300);
  return (
    <div className={cx('enemy-container', {spinning: !alive || !enabled})} style={containerStyle}>
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
