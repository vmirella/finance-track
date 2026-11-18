import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles</Text>
      <Text style={styles.subtitle}>Saldo actual: $12,450.00</Text>
      <Text style={styles.subtitle}>Objetivo: ahorrar $500 este mes</Text>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Volver al inicio</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf4ff',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#101828',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#475467',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#101828',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
