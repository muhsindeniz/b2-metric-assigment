import { createContext, useContext, ReactNode, useState } from 'react';
import Notification from './Notification';

interface NotificationProps {
  type: 'success' | 'info' | 'error';
  message?: string;
  duration?: number;
}

interface NotificationContextType {
  showNotification: (props: NotificationProps) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [key, setKey] = useState(0);

  const [notification, setNotification] = useState<
    (NotificationProps & { timestamp?: number }) | null
  >(null);

  const showNotification = (props: NotificationProps) => {
    setKey((prev) => prev + 1); // Her çağrıda key değerini artır
    setNotification(props);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification }}>
      {children}
      {notification && <Notification key={key} {...notification} />}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
