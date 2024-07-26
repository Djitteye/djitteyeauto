import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { Link } from 'expo-router';
export default function parking() {
return (
<View >
<Text>Aora!</Text>
<StatusBar style="auto" />
<Link href="/index" style={{ color: 'blue' }}>Go
to parking</Link>
</View>
);
}