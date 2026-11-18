import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { BalanceCard } from './components/BalanceCard';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>FinanceTrack</Text>
        <Text style={styles.title}>Resumen financiero</Text>

        <View style={styles.grid}>
          <BalanceCard label="Saldo actual" value="$12,450.00" />
          <BalanceCard label="Ingresos" value="$3,200.00" tone="success" />
          <BalanceCard label="Gastos" value="$1,380.00" />
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Próximo objetivo</Text>
          <Text style={styles.panelText}>Ahorra $500 para tu fondo de emergencia.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  container: {
    padding: 24,
    paddingTop: 40,
  },
  eyebrow: {
    color: '#5b6ef5',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  title: {
    color: '#101828',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 8,
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  panel: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    marginTop: 24,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  panelTitle: {
    color: '#101828',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  panelText: {
    color: '#475467',
    fontSize: 16,
    lineHeight: 24,
  },
});
