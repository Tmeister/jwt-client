import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { whoami, verifyToken } from '../services';
import ProfileCard from './ProfileCard';

export default function AuthenticationActions(props) {
  const [user, setUser] = useState(null);
  const [response, setResponse] = useState(null);

  const handleVerifyToken = async () => {
    const response = await verifyToken(props.token);
    if (!response) {
      console.log('Error: Unable to verify token');
      return;
    }

    setResponse(response);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await whoami(props.token);
      if (!user) {
        console.log('Error: Unable to fetch user');
        return;
      }

      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <View className="flex min-h-full w-full flex-col justify-center py-12">
      {user ? <ProfileCard user={user} /> : <ActivityIndicator />}
      <View className="mx-auto w-full">
        {response && (
          <View className="mx-auto mt-4 space-y-2">
            <Text className="text-center font-semibold">Code: {response.code}</Text>
            <Text className="text-center font-semibold">Status: {response.data.status}</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={handleVerifyToken}
          className="flex justify-center rounded-md border border-transparent bg-blue-600 p-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-60 mx-auto mt-4">
          <Text className="text-center text-white">Verify Token</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.logout}
          className="flex justify-center rounded-md border border-transparent bg-red-600 p-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-60 mx-auto mt-4">
          <Text className="text-center text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
