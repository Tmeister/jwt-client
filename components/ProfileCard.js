import { View, Text, Image } from 'react-native';

export default function ProfileCard(props) {
  const getHumanReadableDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <View className="mx-auto text-center w-full">
      <Image
        className="w-24 h-24 rounded-full border-2 mx-auto border-blue-300"
        source={{ url: props.user.avatar_urls?.[96] }}
      />
      <View className="overflow-hidden bg-white shadow mx-10 mt-4">
        <View className="px-4 py-5">
          <Text className="text-base font-medium leading-6 text-gray-900">{props.user.name}</Text>
          <Text className="mt-1 text-sm text-gray-400">
            {props.user.roles.map((role) => role).join(', ')}
          </Text>
        </View>
        <View className="border-t border-gray-200 px-4 py-5 divide-y divide-gray-200">
          <View className="py-4 flex-row items-center justify-between">
            <Text className="text-sm font-medium text-gray-400">Firstname</Text>
            <Text className="text-sm text-gray-900">{props.user.first_name}</Text>
          </View>
          <View className="py-4 flex-row items-center justify-between">
            <Text className="text-sm font-medium text-gray-400">Lastname</Text>
            <Text className="text-sm text-gray-900">{props.user.last_name}</Text>
          </View>
          <View className="py-4 flex-row items-center justify-between">
            <Text className="text-sm font-medium text-gray-400">Nickname</Text>
            <Text className="text-sm text-gray-900">{props.user.nickname}</Text>
          </View>
          <View className="py-4 flex-row items-center justify-between">
            <Text className="text-sm font-medium text-gray-400">Email</Text>
            <Text className="text-sm text-gray-900">{props.user.email}</Text>
          </View>
          <View className="py-4 flex-row items-center justify-between">
            <Text className="text-sm font-medium text-gray-400">Registered Date</Text>
            <Text className="text-sm text-gray-900">
              {getHumanReadableDate(props.user.registered_date)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
