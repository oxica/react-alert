import PropTypes from 'prop-types';
import s from './Alert.module.css';

function Alert({ text, type }) {
  const typeClass = type ? s[type] : s.alert;
  return (
    <p role="alert" className={typeClass}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']),
};

export default Alert;
