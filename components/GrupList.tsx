import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { grupType } from "@/types/grupType";
import { Image } from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function GrupList({ data }: { data: grupType[] }) {
  const renderItems: ListRenderItem<grupType> = ({ item }) => {
    return (
      <View style={styles.item} >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View >
            <Text style={styles.text1}>{item.name}</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="star" size={15} color="#FFC107" />
                <Text style={styles.itemRating}>{item.rating}</Text>
                <Text style={styles.itemReviews}>({item.reviews})</Text>

            </View>

        </View>
      </View>
    );
  };

  return (
    <View style={{marginVertical:10}}>
      <Text style={styles.text}>Top Travel Groups</Text>
      <FlatList
        data={data}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
    margin: 10,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
  },
  item:{
    backgroundColor:Colors.white,
    padding:10,
    margin:10,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  text1:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  itemRating: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 5,
  },
  itemReviews: {
    fontSize: 14,
    color: '#999'
  }
  
});
