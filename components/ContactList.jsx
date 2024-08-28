import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Peter Parker',
      status: 'Just an extra ordinary teacher',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Flife%2Fmovies%2F2017%2F07%2F04%2Fwhy-teen-peter-parker-tom-holland-is-something-marvel-new-spider-man%2F103195878%2F&psig=AOvVaw0115Ay6KquMA9WPwQoGr0u&ust=1724942514738000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCdjfT1l4gDFQAAAAAdAAAAABAJ',
    },
    {
      uid: 2,
      name: 'Aragorn Elessar',
      status: 'I ❤️ To Code and Teach!',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F768145280163339093%2F%3Famp_client_id%3DCLIENT_ID%2528_%2529%26mweb_unauth_id%3D%257B%257Bdefault.session%257D%257D%26amp_url%3Dhttps%253A%252F%252Fwww.pinterest.com%252Famp%252Fpin%252F768145280163339093%252F%26open_share%3Dt&psig=AOvVaw36kT2tMHPEWZ-g7Bq6NXsF&ust=1724942609820000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCW95D2l4gDFQAAAAAdAAAAABAE',
    },
    {
      uid: 3,
      name: 'Joey Tribbiani',
      status: 'Making your GPay smooth',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJoey_Tribbiani&psig=AOvVaw1l_vOMlx40Q1g3yQUmhmrr&ust=1724942639027000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjY_pz2l4gDFQAAAAAdAAAAABAE',
    },
    {
      uid: 4,
      name: 'Thomas Shelby',
      status: 'Building secure Digital banks',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hairbond.com%2Fcelebrity-how-to%2Ftommy-shelby-haircut-peaky-blinders-hair-styles-using-hairbond%2F&psig=AOvVaw1uFR8nVM4OWOvoYrsh_cW-&ust=1724942662181000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICzr6r2l4gDFQAAAAAdAAAAABAE',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
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
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
