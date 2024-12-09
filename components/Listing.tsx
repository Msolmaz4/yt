import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    listings :any[]
}


export default function Listing({listings}:Props) {

const renderItems:ListRenderItem<ListingType> = ({item}) => {
    return(
        <View>
            <Text>{item.name}</Text>
        
        </View>
    )
}


  return (
    <View>
     <FlatList data={listings} renderItem={renderItems}/>
    </View>
  )
}

const styles = StyleSheet.create({})