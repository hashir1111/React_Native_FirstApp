// Signup.js
import React, {Fragment} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Signup from './components/Signup';
import Cards from './components/Cards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <Fragment>
      {/* <Signup /> */}
      <ScrollView>
        <Cards />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </Fragment>
  );
};

export default App;
