import React, {PropTypes} from 'react';

import './styles.css';

const Counter = (props) => {
  return (
    <div className="counter" style={{...props}}>
      {props.children}
    </div>
  );
}

Counter.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Counter;
