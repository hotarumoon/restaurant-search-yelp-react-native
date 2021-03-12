import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    //we want to call the getResult function only one time (not everytime something changes) so we are usinf useeffect to call it only
    // the first time the component is rendered (second argument is empty array)
    useEffect(() => {
        getResult(id);
    }, [])

    if(!result){
        return null;
    }

    return (<View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem = {({item}) => {
                return <Image style={styles.image} source={{uri: item}}/>
            }}
        />
    </View>);

};

const styles = StyleSheet.create({
    image: {
        height:200,
        width: 300
    }
});

export default ResultsShowScreen;