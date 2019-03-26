import PropTypes from 'prop-types';
import Avatar from './Avatar';
import './Avatar.scss';

Avatar.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
  avatarImage: PropTypes.object,
  editable: PropTypes.bool,
  location: PropTypes.string,
};

Avatar.defaultProps = {
  avatarImage: null,
  className: '',
  editable: false,
  location: null,
};

export default Avatar;
