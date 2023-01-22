import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo cumque provident corporis! Consequuntur ex at unde nesciunt laborum earum perferendis exercitationem blanditiis ullam quae commodi deleniti quia soluta perspiciatis facere molestiae vitae placeat, aspernatur ipsum quaerat illum iste! Est, harum expedita culpa laudantium perspiciatis ipsum aperiam eum labore provident et quasi inventore officia non eius doloremque ad facere eveniet. Laudantium corporis perspiciatis, culpa, magni esse neque velit asperiores nihil eveniet vero officia inventore quis possimus impedit explicabo veniam commodi! Ullam voluptatum, vitae, dolores nobis ipsum consequuntur minima, soluta qui laudantium quod quos in neque fuga veniam. Quisquam voluptas ut optio.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
