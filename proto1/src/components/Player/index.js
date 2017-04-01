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
    const backgroundImage = this.bgImage;
    return (
      <div
        id="Player"
        style={{backgroundImage, ...this.props}}
      />
    );
  }
}

Player.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number.isRequired,
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired,
  streamerId: PropTypes.oneOf(['newbie', 'AtheneLIVE']).isRequired,
};

export default Player;
