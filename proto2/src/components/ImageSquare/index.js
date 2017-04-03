import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

const ImageSquare = (props) => {
  const { imageFolder, imageName, onClick, size } = props;
  const imageUrl = `images/${imageFolder}/${imageName}.png`;

  const createImageNode = () => {
    return (
      <div className={cx('image-container', imageFolder, {
        'image-container--clickable': onClick,
      })}>
        <img
          className={cx('image')}
          src={imageUrl}
          alt={imageName}
          title={imageName}
        />
      </div>
    );
  }

  if (onClick) {
    return (
      <a href={'#' + imageName} onClick={onClick}>
        {createImageNode()}
      </a>
    );
  }

  return createImageNode();
};

ImageSquare.propTypes = {
  imageFolder: PropTypes.oneOf(['streamers', 'emotes']).isRequired,
  imageName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ImageSquare;
