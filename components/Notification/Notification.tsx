import React, { useEffect, useState } from 'react';
import { FiInfo, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

interface NotificationProps {
  type: 'success' | 'info' | 'error';
  message?: string;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({ type, message, duration = 3 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, duration * 1000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, [duration, message, type]);

  if (!visible) return null;

  let bgColor, Icon;
  switch (type) {
    case 'success':
      bgColor = '#50a14f';
      Icon = FiCheckCircle;
      break;
    case 'error':
      bgColor = '#e45649';
      Icon = FiAlertTriangle;
      break;
    case 'info':
    default:
      bgColor = '#1677ff';
      Icon = FiInfo;
      break;
  }
  return (
    <div
      style={{ backgroundColor: bgColor }}
      id="toast-success"
      className="flex absolute bottom-4 right-4 items-center w-full max-w-xs p-4 mb-4"
      role="alert"
    >
      <div className="text-white inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 rounded-lg">
        {<Icon />}
      </div>
      <div className="text-white ml-3 text-sm font-normal">{message}</div>
    </div>
  );
};

export default Notification;
