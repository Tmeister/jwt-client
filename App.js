import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import SignInForm from './components/SignInForm';

export default function App() {
  const baseUrl = 'https://incandescent-regret.flywheelsites.com/';
  const apiUrl = `${baseUrl}wp-json/jwt-auth/v1/`;

  const remoteAuthentication = async (username, password) => {
    const body = JSON.stringify({ username, password });
    console.log(body);
    const response = await fetch(`${apiUrl}token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body,
    });

    const data = await response.json();
    console.log(data);

    if (response.status !== 200) {
      console.log(data);
      console.log(`Error: ${data.message}`);
      return;
    }

    console.log(data);
  };
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <SignInForm remoteAuthentication={remoteAuthentication} />
      <StatusBar style="auto" />
    </View>
  );
}
