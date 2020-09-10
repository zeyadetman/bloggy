import React from 'react';
import PropTypes from 'prop-types';

const SocialImage = ({ img }) => <img alt="social" src={img} style={{ width: 20, margin: 0, marginRight: 5 }} />;

SocialImage.propTypes = {
  img: PropTypes.string.isRequired,
};

export default SocialImage;
