import React, {Component, PropTypes} from 'react';

import './styles.css';

class StreamerCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streamers: [
        {
          name: 'zero'
        },
        {
          name: 'one'
        },
        {
          name: 'two'
        }
      ]
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
      <section id="StreamerCollection" style={{...this.props}}>
        {this.state.streamers.map((streamer, index) => (
          <span key={index}>{streamer.name}</span>
        ))}
      </section>
    );
  }
}

StreamerCollection.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default StreamerCollection;
