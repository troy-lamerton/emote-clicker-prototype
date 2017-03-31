import React, {PropTypes} from 'react';
import './styles.css';

const Sidebar = (props) => (
  <section id="Sidebar" style={{...props}}>
    {/*{{props.children}}*/}
  </section>
);

Sidebar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
