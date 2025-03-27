import { StyleSheet } from 'react-native';
import Button from '../../../components/Button'
import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <Button text="Press" />
    <Link href="/dashboard/examplescreen" style={styles.textButton}>
        Create an account
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
