import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {PokemonList} from '../data/PokemonList';
import {Pokemon} from '../models/Pokemon';
import * as commonStyle from '../utils/commonStyle';
import TestView from './TestView';

const PokemonInfo = ({name, level, isMale, src, onClickPokemon}: Pokemon) => {
  return (
    <>
      <Text style={styles.text_appeared}>A new Pokemon appeared !</Text>
      <TouchableOpacity onPress={(): void => onClickPokemon()}>
        <Image source={src} style={styles.imagePokemon} />
      </TouchableOpacity>
      <Text>
        Name : {name}. Level: {level}
      </Text>
      {isMale ? <Text>this is a male</Text> : <Text>this is a female</Text>}
    </>
  );
};

const HomeView = () => {
  const [counterPokedex, setCounterPokedex] = useState(0);
  const [pokeList, setPokeList] = useState(PokemonList);

  const getNamePokemon = (namePokemon: string) => {
    console.log('my name is:', namePokemon);
  };

  const modifyLevel = () => {
    const newList = [...pokeList];
    newList[counterPokedex].level = pokeList[counterPokedex].level + 5;
    setPokeList(newList);
  };

  const onNext = () => {
    if (counterPokedex === pokeList.length - 1) {
      setCounterPokedex(0);
    } else {
      setCounterPokedex(prev => prev + 1);
    }
  };
  const onPrevious = () => {
    if (counterPokedex === 0) {
      setCounterPokedex(pokeList.length - 1);
    } else {
      setCounterPokedex(prev => prev - 1);
    }
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.title_container}>
        <Text style={styles.text_title}>Pokedex Application </Text>
      </View>
      <View style={styles.pokemon_container}>
        <PokemonInfo
          id={pokeList[counterPokedex].id}
          name={pokeList[counterPokedex].name}
          level={pokeList[counterPokedex].level}
          isMale={pokeList[counterPokedex].isMale}
          src={pokeList[counterPokedex].src}
          onClickPokemon={() => {
            getNamePokemon(pokeList[counterPokedex].name);
            modifyLevel();
          }}
        />
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.buttonNextPrevious} onPress={onNext}>
          <Image
            source={require('../assets/icons/left-arrow.png')}
            style={styles.iconButton}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNextPrevious}
          onPress={onPrevious}>
          <Image
            source={require('../assets/icons/right-arrow.png')}
            style={styles.iconButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },

  title_container: {
    flex: 1,
    alignItems: 'center',
  },

  pokemon_container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  text_title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgb(200, 0, 0)',
    marginTop: 30,
  },
  imagePokemon: {
    width: 200,
    height: 200,
  },

  iconButton: {
    width: 40,
    height: 40,
  },

  text_appeared: {
    marginBottom: 20,
    fontStyle: 'italic',
    fontSize: 18,
  },

  //@ts-ignore
  buttonNextPrevious: {
    ...commonStyle.elevationButton,
    ...commonStyle.roundedButton,
  },
});

export default HomeView;
