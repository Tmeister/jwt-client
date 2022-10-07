import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { apiUrl } from '../services';

export default function SignInForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onPress = () => {
    props.remoteAuthentication(username, password);
  };

  return (
    <View className="flex min-h-full w-full flex-col justify-center py-12">
      <View className="">
        <Text className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">
          Sign in to your WordPress API
        </Text>
      </View>

      <View className="mt-8">
        <View className="bg-white py-8 px-4 shadow rounded-lg mx-5">
          <View>
            <Text className="block text-sm font-bold text-gray-500">Email Address or Username</Text>
            <View className="mt-2">
              <TextInput
                keyboardType="email-address"
                value={username}
                onChangeText={(value) => setUsername(value)}
                className="block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </View>
          </View>

          <View className="mt-5">
            <Text className="block text-sm font-bold text-gray-500">Password</Text>
            <View className="mt-2">
              <TextInput
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
                className="block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </View>
          </View>

          <View className="mt-5">
            <TouchableOpacity
              onPress={onPress}
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 p-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Text className="text-center text-white">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="m-5">
        <Text className="text-center text-sm text-gray-500">API URL</Text>
        <Text className="text-center text-sm text-gray-500">{apiUrl}</Text>
      </View>
    </View>
  );
}
