import { StyleSheet, Text, View } from 'react-native';

type BalanceCardProps = {
  label: string;
  value: string;
  tone?: 'primary' | 'success';
};

export function BalanceCard({ label, value, tone = 'primary' }: BalanceCardProps) {
  return (
    <View style={[styles.card, tone === 'success' && styles.successCard]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f4f7ff',
    borderRadius: 16,
    padding: 18,
    minWidth: 150,
    flex: 1,
    margin: 8,
  },
  successCard: {
    backgroundColor: '#eafaf1',
  },
  label: {
    color: '#48536b',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  value: {
    color: '#101828',
    fontSize: 22,
    fontWeight: '700',
  },
});
