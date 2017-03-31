import React, {PropTypes} from 'react';

import './styles.css';

const Counter = (props) => {
  return (
    <section className="counter" style={{...props}}>
      <span>{props.children}</span>
    </section>
  );
}

Counter.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Counter;
