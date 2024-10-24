import React from 'react';
import PropTypes from 'prop-types';
import './message-history.style.css';

export const MessageHistory = ({ msg }) => {
    if (!msg || msg.length === 0) return null;

    return(
    <>
    {msg.map((row, i) => (
      <div className="message-history">
          <div key={i} className="message-item mt-3">
            <div className="send font-weight-bold text-secondary">
              <div className="sender">Sender: {row.messageBy}</div>
              <div className="date">Date: {row.date}</div>
            </div>
            <div className="message">{row.message}</div>
          </div>
      </div>
    ))}
    </>
)
  };
 

MessageHistory.propTypes={
    msg: PropTypes.array.isRequired,
}

