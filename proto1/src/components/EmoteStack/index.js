import React, {Component, PropTypes} from 'react';
import './style.css';

class EmoteStack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count || 0,
    };

    this.imageUrl = `/emotes/${this.state.emoteId}`;
  }

  render() {
    return (
      <div id="EmoteStack" style={{...this.props}}>
        <ImageSquare type="clickable" imageUrl={this.imageUrl} />
        <Counter count={this.state.emotes.PogChampCount} interval={100} />
      </div>
    );
  }
}

EmoteStack.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  emoteId: PropTypes.string.isRequired,
};

export default EmoteStack;
