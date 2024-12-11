import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import data from "@/data/destinations.json";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

// Props için tip tanımı
type SearchProps = {
  text: string;
};

export default function Search({ text }: SearchProps) {
  console.log(text, "search");
  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  //console.log(filterData, "filterData");

  const renderItems = ({ item }) => {
    return (
        <Link href={`/listing/${item.id}`} asChild>

        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.imag} />
            <View style={styles.book}>
              <Ionicons name="bookmark" size={24} color={Colors.white} />{" "}
            </View>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
  
            <View style={{ flexDirection: "row" ,justifyContent:"space-between"}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome
                  name="map-marker"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.loc}> {item.location}</Text>
              </View>
              <Text style={styles.pri}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
        </Link>
    );
  };

  return (
    <View>
        
      <FlatList data={filterData} renderItem={renderItems} />
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: "#fff",
        width: 220,
      },
      imag: {
        width: 200,
        height: 200,
        borderRadius: 10,
        resizeMode: "cover",
        marginBottom: 30,
      },
      book: {
        position: "absolute",
        top: 185,
        right: 30,
        backgroundColor: Colors.primaryColor,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.white,
      },
    
      text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
      },
      pri:{
        fontSize:12,
        fontWeight:"600",
        color:Colors.primaryColor,
    
      },
      loc:{
        fontSize:12,
        marginLeft:5,
    
      }
});
