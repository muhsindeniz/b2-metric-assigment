import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import { NotificationProvider } from '@/components/Notification/NotificationContext';

function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </Provider>
  );
}

export default App;
