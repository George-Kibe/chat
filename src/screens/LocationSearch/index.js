import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


import searchResults from '../../../assets/data/search'

const LocationSearchScreen = () => {
  const navigation = useNavigation()
  const [inputText, setInputText] = useState("")
  const APIKEY="AIzaSyDnMX-u2MkG1b4UcuakpWfMNK7OQmGmHa4"

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={{height:200}}>
          <GooglePlacesAutocomplete placeholder='Search Properties by Location...'
            styles={styles.textInput}
            onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.warn(data, details);
            }}
            query={{
              key: APIKEY,
              language: 'en',
            }}
          />
        </View>
        <TextInput style={styles.textInput} 
            placeholder="Search for Favourite Locations..."
            value={inputText}
            onChangeText={setInputText} />        
      </View>
      <FlatList data={searchResults}
        renderItem={({item}) => (
          <Pressable onPress={() =>navigation.navigate("Accommodation Details")}
            style={styles.row}>
              <View style={styles.iconContainer}>
                  <Entypo name={"location-pin"} size={35} />
              </View>
              <Text style={styles.locationText}>{item.description}</Text>                            
          </Pressable>            
        )}/>
    </View>
  )
}

export default LocationSearchScreen