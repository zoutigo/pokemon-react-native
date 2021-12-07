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

const PokemonInfo = ({name, level, isMale, src, onClickPokemon}: Pokemon) => {
  return (
    <View>
      <Text>This is a pokemon</Text>
      <Text>
        Name : {name}. Level: {level}
      </Text>
      {isMale ? <Text>this is a male</Text> : <Text>this is a female</Text>}
      <TouchableOpacity onPress={(): void => onClickPokemon()}>
        <Image source={src} style={styles.imagePokemon} />
      </TouchableOpacity>
    </View>
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
    <View>
      <Text> Value: {counterPokedex} </Text>
      <Button title="Next" onPress={onNext} />
      <Button title="Previous" onPress={onPrevious} />
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
      {/* <FlatList
        data={PokemonList.reverse()}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}): any => (
          <PokemonInfo
            id={item.id}
            name={item.name}
            level={item.level}
            isMale={item.isMale}
            src={item.src}
          />
        )}
      /> */}
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
