import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

const ImageSquare = (props) => {
  const { imageFolder, imageName, onClick } = props;
  const imageUrl = `images/${imageFolder}/${imageName}.png`;

  const imageNode = (<img
      className={cx('image-square')} 
      src={imageUrl}
      alt={imageName}
      title={imageName}
    />);

  if (onClick) {
    return (
      <a href={'#' + imageName} onClick={onClick}>
        {imageNode}
      </a>
    );
  }

  return imageNode;
};

ImageSquare.propTypes = {
  imageFolder: PropTypes.oneOf(['streamers', 'emotes']).isRequired,
  imageName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ImageSquare;
