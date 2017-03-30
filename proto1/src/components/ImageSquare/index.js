import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import './style.css';

function ImageSquare() {
  return (
    <a
      className={cx('image-square', this.props.type)} 
      style={{...this.props}}
      style={{backgroundImage: `url('${this.props.imageUrl}')`}}
    />
  );
}

ImageSquare.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  imageUrl: PropTypes.string.isRequired,
};

export default ImageSquare;
