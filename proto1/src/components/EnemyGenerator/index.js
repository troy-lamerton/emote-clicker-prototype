import React, {Component, PropTypes} from 'react';
import './style.css';

class FOLDER_NAME extends Component {
  constructor(props) {
    super(props);

    this.state = {
      KappaCount: 10,
      PogChampCount: 0,
    };
  }

  render() {
    return (
      <section id="FOLDER_NAME" style={{...this.props}}>
        <EmoteStack emote="PogChamp" count={this.state.emotes.PogChampCount} />
      </section>
    );
  }
}

FOLDER_NAME.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default FOLDER_NAME;
