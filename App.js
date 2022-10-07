import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';

import Dashboard from './components/Dashboard';
import SignInForm from './components/SignInForm';
import { authenticate } from './services';

export default function App() {
  const [token, setToken] = useState(null);
  const handleAuthentication = async (username, password) => {
    const remoteToken = await authenticate(username, password);
    if (!remoteToken) {
      console.log('Error: Unable to authenticate');
      return;
    }

    setToken(remoteToken);
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      {!token && <SignInForm remoteAuthentication={handleAuthentication} />}
      {token && <Dashboard token={token} />}

      <StatusBar style="auto" />
    </View>
  );
}
