import React, {Component, PropTypes} from 'react';

import ImageSquare from '../ImageSquare';

import './styles.css';

class EnemyGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextSpawnAt: null,
      interval: props.interval,
      enabled: props.enabled || !props.disabled
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.readyToSpawn) {
      this.spawnEnemy();
    }
  }

  componentDidMount() {
    this.setState({
      nextSpawnAt: Date.now()
    });
  }

  get readyToSpawn() {
    return this.state.nextSpawnAt >= Date.now();
  }

  spawnEnemy = (emoteId) => {
    this.props.spawnEnemy();
    this.setState((state) => ({
      nextSpawnAt: Date.now() + state.interval
    }));
  }

  render() {
    return (
      <section className="emote-generator" style={{...this.props}}>
        <ImageSquare imageFolder="emotes" imageName={this.props.emoteId} />
        <span>{(this.state.enabled) ? '+' : '...'}</span>
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
