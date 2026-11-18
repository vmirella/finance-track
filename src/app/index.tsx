import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button, ButtonText } from '@/src/components/ui/button';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>FinanceTrack</Text>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.subtitle}>Tu resumen financiero en una sola vista.</Text>

      <Link href="/details" asChild>
        <Button size="lg">
          <ButtonText>Ver detalles</ButtonText>
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fb',
    padding: 24,
  },
  eyebrow: {
    color: '#5b6ef5',
    fontSize: 12,
    letterSpacing: 1.5,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#101828',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#475467',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#5b6ef5',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
