import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UBIT from '../assets/ubit.jpg';
import UBIT1 from '../assets/UNI.jpg';

export default function FancyCard() {
  const UBITIMAGE = Image.resolveAssetSource(UBIT).uri;
  const UNIIMAGE = Image.resolveAssetSource(UBIT1).uri;
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <ScrollView>
        <View style={[styles.card, styles.cardElevated]}>
          <Image source={{uri: UBITIMAGE}} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>
              UMAER BHASHA INSTITUTE OF INFORMATION TECHNOLOGY
            </Text>
            <Text style={styles.cardLabel}>University of Karachi</Text>
            <Text style={styles.cardDescription}>
              The main objective of the UBIT is to impart quality education and
              conduct research in computer science and information technology.
              Through structured degree programs, intensive training courses for
              professionals, academicians, and researchers by organizing
              workshops and training courses.
            </Text>
            <Text style={styles.cardFooter}>Karachi, Pakistan</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image source={{uri: UNIIMAGE}} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>
              UMAER BHASHA INSTITUTE OF INFORMATION TECHNOLOGY
            </Text>
            <Text style={styles.cardLabel}>University of Karachi</Text>
            <Text style={styles.cardDescription}>
              The main objective of the UBIT is to impart quality education and
              conduct research in computer science and information technology.
              Through structured degree programs, intensive training courses for
              professionals, academicians, and researchers by organizing
              workshops and training courses.
            </Text>
            <Text style={styles.cardFooter}>Karachi, Pakistan</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginTop: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginTop: 0,
  },
  cardDescription: {
    color: '#2C3335',
    fontSize: 12,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '700',
  },
});
