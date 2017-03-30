import React, {Component, PropTypes} from 'react';

import Player from './components/Player';
import EnemyGenerator from './components/EnemyGenerator';

import './style.css';

class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picId: 'newbie',
      picSrc: '',
    };
  }

  render = () => (
    <div id="World" style={{...this.props}}>
      <Player width={100} height={100} />

      <EnemyGenerator emote="Kappa" />
      <EnemyGenerator emote="PogChamp" />
    </div>
  );
}

World.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired,
  picId: PropTypes.oneOf(['newbie', 'AtheneLIVE']),
};

export default World;
