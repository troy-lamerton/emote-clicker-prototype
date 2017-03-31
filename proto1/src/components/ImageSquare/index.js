import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

const ImageSquare = (props) => {
  return (
    <a
      className={cx('image-square', props.type)} 
      style={{backgroundImage: `url('${props.emoteId}.png')`}}
    />
  );
}

export default ImageSquare;
