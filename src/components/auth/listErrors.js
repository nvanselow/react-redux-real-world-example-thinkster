import React, { PropTypes } from 'react';

const ListErrors = ({ errors }) => {
  if (errors) {
    return (
      <ul className="error-messages">
        {
          Object.keys(errors).map(key => (
            <li key={key}>
              {key} {errors[key]}
            </li>
          ))
        }
      </ul>
    );
  }

  return null;
};

ListErrors.propTypes = {
  errors: PropTypes.object,
};

export default ListErrors;
