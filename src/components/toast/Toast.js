import React, { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaRegWindowClose
} from "react-icons/fa";

import "./toast.css";

const Toast = ({ position, autoDeleteInterval }) => {
  const { state, dispatch } = useContext(ToastContext);

  const generateIcon = (type) => {
    switch (type) {
      case "INFO":
        return <FaInfoCircle />;
      case "WARNING":
        return <FaExclamationTriangle />;
      case "DANGER":
        return <FaExclamationCircle />;
      case "SUCCESS":
        return <FaCheck />;
      default:
        return;
    }
  };

  const generateBackgroundColor = (type) => {
    switch (type) {
      case "INFO":
        return "#5bc0de";
      case "WARNING":
        return "#f0ad4e";
      case "DANGER":
        return "#d9534f";
      case "SUCCESS":
        return "#5cb85c";
      default:
        return;
    }
  };

  return (
    <div className={`notification-container ${position}`}>
      {state.map((notification, i) => {
        if (autoDeleteInterval) {
          setInterval(() => {
            dispatch({
              type: "DELETE_NOTIFICATION",
              payload: notification.id
            });
          }, autoDeleteInterval);
        }
        return (
          <div
            style={{
              backgroundColor: generateBackgroundColor(notification.type)
            }}
            key={notification.id}
            className={`notification`}
          >
            <div className="notification-image">
              {generateIcon(notification.type)}
            </div>
            <div className="notification-body">
              <p className="notification-title">{notification.title}</p>
              <p className="notification-message">{notification.message}</p>
            </div>
            <div className="notification-close">
              <FaRegWindowClose
                onClick={() =>
                  dispatch({
                    type: "DELETE_NOTIFICATION",
                    payload: notification.id
                  })
                }
                className="close-button"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
