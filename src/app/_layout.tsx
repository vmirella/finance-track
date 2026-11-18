import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#5b6ef5' },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
      }}
    />
  );
}
