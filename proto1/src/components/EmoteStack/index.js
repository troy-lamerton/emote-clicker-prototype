import React, {Component, PropTypes} from 'react';

import ImageSquare from '../ImageSquare';
import Counter from '../Counter';

import './styles.css';

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
      <div className="emote-stack" style={{...this.props}}>
        <ImageSquare type="clickable" imageUrl={`/emotes/${this.props.emoteId}`} />
        <Counter>
          {this.state.count}
        </Counter>
      </div>
    );
  }
}

EmoteStack.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  emoteId: PropTypes.oneOf(['Kappa', 'PogChamp']).isRequired
};

export default EmoteStack;
