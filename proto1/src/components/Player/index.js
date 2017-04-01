import React, {Component, PropTypes} from 'react';
import './styles.css';

class Player extends Component {
  get imageSrc() {
    return `images/streamers/${this.props.streamerId}.png`;
  }

  get bgImage() {
    return `url(${this.imageSrc})`
  }

  render() {
    const { x, y, radius, streamerId } = this.props;
    const diameter = radius * 2;
    const backgroundImage = this.bgImage;
    const left = x;
    const top = y;
    const playerStyle = {
      backgroundImage,
      left,
      top,
      width: diameter,
      height: diameter
    }
    return (
      <div
        id="Player"
        style={playerStyle}
        data-streamerId={streamerId} />
    );
  }
}

Player.propTypes = {
  streamerId: PropTypes.oneOf(['newbie', 'AtheneLIVE']).isRequired,
  radius: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Player;
