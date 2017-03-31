import React, {Component, PropTypes} from 'react';
import './styles.css';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picId: 'newbie',
      picSrc: '',
    };
  }

  render = () => (
    <div id="Player" style={{...this.props}} />
  );
}

Player.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired,
  picId: PropTypes.oneOf(['newbie', 'AtheneLIVE']),
};

export default Player;
