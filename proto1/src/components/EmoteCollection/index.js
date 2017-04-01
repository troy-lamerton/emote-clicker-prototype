import React, {PropTypes} from 'react';

import EmoteStack from '../EmoteStack';

import './styles.css';

const EmoteCollection = (props) => (
  <section id="EmoteCollection" style={{...props}}>
    <EmoteStack emoteId="Kappa" count={props.Kappa} />
    <EmoteStack emoteId="Kappa" count={props.Kappa} />
    <EmoteStack emoteId="Kappa" count={props.Kappa} />
    <EmoteStack emoteId="PogChamp" count={props.PogChamp} />
    <EmoteStack emoteId="PogChamp" count={props.PogChamp} />
  </section>
);

EmoteCollection.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default EmoteCollection;
