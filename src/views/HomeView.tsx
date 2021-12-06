import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type PokemonInfoType = {
  name: string;
  level: number;
  isMale: boolean;
  src: any;
};

const PokemonInfo = ({name, level, isMale, src}: PokemonInfoType) => {
  return (
    <View>
      <Text>This is a pokemon</Text>
      <Text>
        Name : {name}. Level: {level}
      </Text>
      {isMale ? <Text>this is a male</Text> : <Text>this is a female</Text>}
      <Image source={src} style={styles.imagePokemon} />
    </View>
  );
};

const HomeView = () => {
  const name = 'Pikachu';
  const level: number = 15;
  const isMale: boolean = true;

  return (
    <View>
      <PokemonInfo
        name={name}
        level={level}
        isMale={isMale}
        src={require('../assets/images/25.png')}
      />
      <PokemonInfo
        name={name}
        level={level}
        isMale={isMale}
        src={require('../assets/images/127.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePokemon: {
    height: 200,
    width: 200,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeView;
