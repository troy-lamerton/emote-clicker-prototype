import React, {PropTypes} from 'react';
import cx from 'classnames';
import {map} from 'lodash';

import ImageSquare from '../ImageSquare';

import './styles.css';

const StreamerCollection = (props) => {
  const { streamers, activeStreamer, onSelectStreamer } = props;
  return (
    <section id="StreamerCollection">
      {map(streamers, (streamer, id) => (
        <div
          key={id}
          className={cx('streamer', {active: id === activeStreamer})}>
          <ImageSquare
            onClick={() => onSelectStreamer(id)}
            imageFolder="streamers"
            imageName={id} />
          {streamer.name.slice(0, 5)}.
        </div>
      ))}
    </section>
  );
};

StreamerCollection.propTypes = {
  streamers: PropTypes.object.isRequired,
  activeStreamer: PropTypes.string.isRequired,
  onSelectStreamer: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default StreamerCollection;
