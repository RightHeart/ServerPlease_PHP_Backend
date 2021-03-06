import { PropTypes } from 'react';

export default {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  frameBorder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  allowFullScreen: PropTypes.bool,
  src: PropTypes.string,
};
