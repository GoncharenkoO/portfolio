import PropTypes from 'prop-types';

const linkedin = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill={color}
    >
      <path
        d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"
        color="#b8bcb8"
      ></path>
      <path d="M2 12h6v18h-6v-18z" color="#b8bcb8"></path>
      <path
        d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"
        color="#b8bcb8"
      ></path>
    </svg>
  );
};

export default linkedin;

linkedin.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
