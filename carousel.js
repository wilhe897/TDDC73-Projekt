/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {Text, StyleSheet, View,Icon,FlatList,Image,TouchableOpacity} from 'react-native';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const Carousel = (props) => {
  Carousel.propTypes = {
    itemsperpage: PropTypes.number.isRequired,
  };
const [pageIndex, setPageIndex] = useState(0);
let dots = [];
let numberOfPages = props.data.length / props.itemsperpage;

for (let i = 0; i < numberOfPages; i++) {
  pageIndex === i
    ? dots.push(
        <TouchableOpacity key={i} style={{...styles.circle, backgroundColor: 'green'}}/>,
      )
    : dots.push(
        <TouchableOpacity key={i} style={{...styles.circle, backgroundColor: 'grey'}} onPress={() => {setPageIndex(i); }} />,
      );
}
function handleClick(temp) {
  if (pageIndex + temp >= 0 && pageIndex + temp < numberOfPages) {
    setPageIndex(pageIndex + temp);
  }
}
  return (
        <View style={styles.carousel}>
            <FlatList
              horizontal={true}
              data={props.data.slice(
                pageIndex * props.itemsperpage,
                pageIndex * props.itemsperpage + props.itemsperpage,
              )}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.flatlist} onPress={() =>  alert('You tapped the button!')}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <Text style={styles.title}>
                    {item.name}
                </Text>
                </TouchableOpacity>
              )}
            />
            <View style={styles.pagination}>
              <TouchableOpacity
              // arrow to go left
              onPress={() => {
                handleClick(-1);
              }}>
                <View>
                  <Text>{'<'}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.header}>{dots}</View>
              <TouchableOpacity
              // arrow to go left
              onPress={() => {
                handleClick(1);
              }}>
                <View>
                  <Text>{'>'}</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    },
  flatlist: {
    width: 175,
    alignItems: 'center',
    justifyContent: 'center',
    },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  title: {
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  image: {
    width: 145,
    height: 215,
  },
  circle: {
    marginBottom: 20,
    width: 15,
    height: 15,
    margin: 10,
    borderRadius: 50,
  },
});

export default Carousel;
