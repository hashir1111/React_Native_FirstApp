import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cards = () => {
  return (
    <View>
      <Text style={styles.text}>Flex Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-evenly',
  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 4,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
