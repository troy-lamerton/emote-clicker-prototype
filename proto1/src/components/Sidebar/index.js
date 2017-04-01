import React, {PropTypes} from 'react';
import './styles.css';

const Sidebar = (props) => (
  <aside>
    {props.children}
  </aside>
);

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
