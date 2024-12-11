import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButton from "@/components/CategoryButton";
import Listing from "@/components/Listing";
import listingData  from "@/data/destinations.json";
import GrupList from "@/components/GrupList";
import groupData from "@/data/grup.json";

export default function Page() {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All")
  const onCatChanged = (category : string) => {
    console.log(category)
    setCategory(category)
    

  } 
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 10 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginLeft: 10,
                  marginTop: 20,
                  shadowColor: "#171717",
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
              }}
            >
              <Ionicons name="notifications" size={30} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
      <View style={[styles.container, { paddingTop: headerHeight }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTex}>Home</Text>
        <View style={styles.search1}>
          <View style={styles.search2}>
            <Ionicons name="search" size={30} color={Colors.black} />
            <TextInput placeholder="search" />
          </View>
          <TouchableOpacity
            onPress={() => {}}
           
            style={styles.filter}
          >
            <Ionicons name="options" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <CategoryButton onCatChanged = {onCatChanged}/>
        <Listing   listings = {listingData} category={category}/>
        <GrupList data= {groupData}/>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTex: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  search1: {
    flexDirection: "row",
    borderBlockColor: "red",
    //backgroundColor: "#26732f",

    borderStyle: "solid",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10, // Adjust padding for better alignment
  },
  
  search2: {
    flex: 1,
    flexDirection: "row",
    borderBlockColor: "#red",
    borderWidth: 1,
    borderStyle: "solid",

    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10, // Adjust padding for better alignment
  },
  filter:{
backgroundColor:Colors.primaryColor,
padding:12,
borderRadius:10,
marginLeft:10,
marginTop: 10,

},
  
});
