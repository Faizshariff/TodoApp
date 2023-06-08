import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Avatar, Center } from 'native-base';

const avatarsData = [
  { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', initials: 'AJ' },
  { uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', initials: 'TE' },
  { uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', initials: 'JB' },
  { uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', initials: 'TS' },
];

const { width } = Dimensions.get('window');
const avatarSize = width < 500 ? 'xs' : 'md';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const Example = () => (
  <Avatar.Group style={styles.profile} _avatar={{ size: avatarSize }}>
    {avatarsData.map(({ uri, initials }) => (
      <Avatar key={initials} source={{ uri }}>
        {initials}
      </Avatar>
    ))}
  </Avatar.Group>
);

const TaskDetails = () => (
  <View style={styles.container}>
    <Center>
      <Text style={styles.title}>Task Details</Text>
    </Center>
    <View style={styles.details}>
      <Text style={styles.subtitle}>Task Title</Text>
      <Text style={styles.taskTitle}>NFT Web App Prototype</Text>
      <Text style={styles.subtitle}>Descriptions</Text>
      <Text style={styles.description}>
        Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..
      </Text>
      <Example />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: isAndroid ? 40 : isIOS ? 60 : 0,
  },
  profile: {
    marginTop: 5,
    flexDirection: 'row',
    marginLeft: 15,
    gap: 10,
  },
  details: {
    marginBottom: isAndroid ? 30 : isIOS ? 35 : 40,
  },
  title: {
    fontSize: isAndroid ? 15 : isIOS ? 17 : 20,
    fontWeight: '500',
    marginBottom: isAndroid ? 20 : isIOS ? 30 : 40,
  },
  subtitle: {
    fontSize: isAndroid ? 14 : isIOS ? 16 : 18,
    color: '#7f8599',
    fontWeight: '500',
    marginBottom: isAndroid ? 10 : isIOS ? 15 : 20,
  },
  taskTitle: {
    fontSize: isAndroid ? 18 : isIOS ? 20 : 22,
    color: 'black',
    fontWeight: '700',
    marginBottom: isAndroid ? 20 : isIOS ? 30 : 40,
  },
  description: {
    fontSize: isAndroid ? 12 : isIOS ? 14 : 16,
    marginBottom: isAndroid ? 15 : isIOS ? 20 : 25,
    textAlign: 'justify',
  },
});

export default TaskDetails;
