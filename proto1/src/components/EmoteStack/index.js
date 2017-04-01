import React, {Component, PropTypes} from 'react';

import ImageSquare from '../ImageSquare';
import Counter from '../Counter';

import './styles.css';

const EmoteStack = (props) => (
  <div className="emote-stack" style={{...props}}>
    <ImageSquare
      type="clickable"
      imageFolder="emotes"
      imageName={props.emoteId} />
    <Counter>
      {props.count}
    </Counter>
  </div>
);

EmoteStack.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  emoteId: PropTypes.oneOf(['Kappa', 'PogChamp']).isRequired
};

export default EmoteStack;
