import { Stack } from 'expo-router';

import { GluestackUIProvider } from '@/src/components/ui/gluestack-ui-provider';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#5b6ef5' },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
        }}
      />
    </GluestackUIProvider>
  );
}
