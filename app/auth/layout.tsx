import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      {/* Définir vos écrans d'authentification ici */}
      <Stack.Screen name="connexion" options={{ headerShown: false }} />
      <Stack.Screen name="inscription" options={{ headerShown: false }} />
    </Stack>
  );
}
