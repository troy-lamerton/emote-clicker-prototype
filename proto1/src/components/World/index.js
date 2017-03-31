import React, {Component, PropTypes} from 'react';

import Player from '../Player';
import EnemyGenerator from '../EnemyGenerator';

import './styles.css';

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
      <Player width={100} height={100} startY={200} startX={50} />

      <div className="generators-container">
        <EnemyGenerator emoteId="Kappa" />
        <EnemyGenerator emoteId="PogChamp" disabled />
      </div>
    </div>
  );
}

World.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  picId: PropTypes.oneOf(['newbie', 'AtheneLIVE']),
};

export default World;
