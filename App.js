/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import Carousel from './carousel';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';



const App: () => Node = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Dune',
      image: 'https://catalog.cinema-api.com/cf/images/ncg-images/2ce7f7c16a6e49da8183bc04a72c153b.jpg?width=240&version=303B0367C7ED1C0D9B2103C7E4E55BD0&format=webp',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Batman',
      image: 'https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/415916/7a24b54c4b992e4fbd85d6ec0912880d-batman_ver3.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bc96-145571e29d72',
      name: 'Interstellar',
      image: 'https://sfanytime-images-prod.secure.footprint.net/COVERM/4879ca25-d6e3-48c1-a012-a3e700a022a2_COVERM_01.jpg?w=375&fm=pjpg&s=36e6fd6d333c2fe6bd9e9dc3d1a1844b',
    },
    {
      id: 'bd7akbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Min Granne Totoro',
      image: 'https://media.ginza.se/Images/item_img_1200/315352.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91sd97f63',
      name: 'Rädda Willy',
      image: 'https://sfanytime-images-prod.secure.footprint.net/COVERM/COVERM_66ad1f7c-8cdd-4909-8584-963ee680e7e4_sv.jpg?w=375&fm=pjpg&s=69ac3d27219503d66d0fb8474e09a516',
    },
    {
      id: '58694a0f-3da1-471f-bc96-14557ds29d72',
      name: 'The Godfather',
      image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53ewrb28ba',
      name: 'Joker',
      image: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-dsafd91aa97f63',
      name: 'Jaws',
      image: 'https://musicart.xboxlive.com/7/dbd31000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145wqd71e29d72',
      name: 'Scarface',
      image: 'https://static.posters.cz/image/1300/poster/scarface-movie-i8166.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bg96-145dwqf1e29d72',
      name: "Rosemary's Baby",
      image: 'https://static.parade.com/wp-content/uploads/2020/03/rosemarysbaby.jpg',
    },
    {
      id: '58694a0f-3da1-471f-ad96-145fsvce29d72',
      name: 'Parasite',
      image: 'https://static.parade.com/wp-content/uploads/2020/03/Parasite2.jpg',
    },
    {
      id: '58694a0f-3da1-471f-cd96-145qws1e29d72',
      name: 'Blade Runner 2049',
      image: 'https://m.media-amazon.com/images/I/71NPmBOdq7L._AC_SL1333_.jpg',
    },
  ];
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView style={ [{flex: 1}]} >
      <StatusBar/>
        <View style={styles.sectionContainer}>
          <PasswordStrengthMeter
          value={password}
          onChangeText={text => setpassword(text)}
          minChar={6}
          />
        </View>
        <View style={styles.carousel}>
         <Carousel
         itemsperpage={4}
         data={DATA}
         />
         </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  carousel: {
    flex: 1,
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

export default App;
