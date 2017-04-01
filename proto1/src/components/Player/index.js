import React, {Component, PropTypes} from 'react';
import './styles.css';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streamerId: props.streamerId || 'newbie',
      enabled: props.enabled || !props.disabled,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.streamerId && this.props.streamerId !== nextProps.streamerId) {
      this.setState({
        streamerId: nextProps.streamerId
      });
    }
  }

  get imageSrc() {
    return `images/streamers/${this.state.streamerId}.png`;
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
      />
    );
  }
}

Player.propTypes = {
  radius: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  streamerId: PropTypes.oneOf(['newbie', 'AtheneLIVE']).isRequired,
};

export default Player;
