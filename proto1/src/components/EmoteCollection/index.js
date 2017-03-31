import React, {Component, PropTypes} from 'react';

import EmoteStack from '../EmoteStack';

import './styles.css';

class EmoteCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      KappaCount: 0,
      PogChampCount: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    const { KappaCount, PogChampCount } = nextProps;

    if (typeof KappaCount === 'number') {
      console.log('KappaCount number:', KappaCount);
      this.setState({ KappaCount });
    }
    if (typeof PogChampCount === 'number') {
      console.log('PogChampCount number:', PogChampCount);
      this.setState({ PogChampCount });
    }
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
