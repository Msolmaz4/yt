import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import destinationCategories from "@/data/category";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
type Props ={
  onCatChanged :(category:string)=>void;
}

export default function CategoryButton({onCatChanged}:Props) {
  const scrollRef = useRef<ScrollView | null>(null);

  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [active, setActive] = useState(0);
  const handle = (index: number) => {
    const seleceted =itemRef.current[index];

    setActive(index);
    //console.log(index);
    seleceted?.measure((x)=>{
      scrollRef.current?.scrollTo({
        x: x.x,
        y: 0,
        animated: true,
      });
    

    })
    onCatChanged(destinationCategories[index].title);
  };
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] = el}
            onPress={() => {
              handle(index);
            }}
            style={
              active == index ? styles.categoryBtnActive : styles.categoryButton
            }
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={22}
              color={active == index ? Colors.white : Colors.black}
            />
            <Text style={active == index ? styles.categoryBtn1Active  :styles.categoryBtn}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtn: {
    marginLeft: 5,
    color: Colors.black,
  },
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtn1Active:{
    color: Colors.white,
    marginLeft: 5,
  }
});
