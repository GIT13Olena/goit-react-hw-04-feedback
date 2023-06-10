// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Feedback.module.css';

// const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <div>
//     {options.map(option => (
//       <button
//         key={option}
//         type="button"
//         className={styles.button}
//         onClick={() => onLeaveFeedback(option)}
//       >
//         {option}
//       </button>
//     ))}
//   </div>
// );

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
