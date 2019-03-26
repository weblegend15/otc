import PropTypes from 'prop-types';
import Avatar from './Avatar';
import './Avatar.scss';

Avatar.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
  avatarImage: PropTypes.object.isRequired,
  editable: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

Avatar.defaultProps = {
  className: '',
  editable: false,
};

export default Avatar;
