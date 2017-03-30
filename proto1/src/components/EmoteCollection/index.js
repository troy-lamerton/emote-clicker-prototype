import React, {Component, PropTypes} from 'react';

import EmoteStack from '../EmoteStack';

import './style.css';

class EmoteCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      KappaCount: 10,
      PogChampCount: 0,
    };
  }

  render() {
    return (
      <section id="EmoteCollection" style={{...this.props}}>
        <EmoteStack emote="Kappa" count={this.state.emotes.KappaCount} />
        <EmoteStack emote="PogChamp" count={this.state.emotes.PogChampCount} />
      </section>
    );
  }
}

EmoteCollection.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default EmoteCollection;
