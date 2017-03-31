import React, {Component, PropTypes} from 'react';

import './styles.css';

class EnemyGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emoteId: props.emoteId || 'Kappa',
      nextSpawnAt: null,
      interval: props.interval,
      enabled: props.enabled || !props.disabled
    }

    this.emoteSrc = `images/${props.emoteId}.png`;
  }

  componentDidMount() {
    this.setState({
      nextSpawnAt: Date.now()
    });
  }

  spawnEnemy(emoteId) {
    this.setState((state) => ({
      nextSpawnAt: Date.now() + state.interval
    }));
  }

  render() {
    return (
      <section className="emote-generator" style={{...this.props}}>
        <img src={this.emoteSrc} alt={this.props.emoteId} title={this.props.emoteId} />
        <span>{(this.state.enabled) ? 'GO' : 'not yet'}</span>
      </section>
    );
  }
}

EnemyGenerator.propTypes = {
  emoteId: PropTypes.oneOf(['Kappa', 'PogChamp']).isRequired,
  disabled: PropTypes.bool,
  enabled: PropTypes.bool,
}

export default EnemyGenerator;
