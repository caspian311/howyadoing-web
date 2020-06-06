import React from 'react'

import './ErrorMessage.css';

function ErrorMessage(props) {
    return (
          <div className="error">
              <span>Error:</span>
              {props.message}
          </div>
    );
}

export default ErrorMessage