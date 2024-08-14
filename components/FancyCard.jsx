import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View>
        <Image
          src={{
            uri: '../public/pictures/ubit.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            UMAER BHASHA INSTITUTE OF INFORMATION TECHNOLOGY
          </Text>
          <Text style={styles.cardLabel}>University of Karachi</Text>
          <Text style={styles.cardDescription}>
            The main objective of the UBIT is to impart quality education and
            conduct research in computer science and information technology.
            Through structured degree programs, intensive training courses for
            professionals, academicians, and researchers by organizing workshops
            and training courses.
          </Text>
          <Text style={styles.cardFooter}>Karachi, Pakistan</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
