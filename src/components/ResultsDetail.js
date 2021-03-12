import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


const ResultsDetail = ({result}) => {
    //console.log("RESULT: ", result);
    //console.log("RESULT.index: ", result.index);
    //console.log("RESULT.item.image_url: ", result.item.image_url);
    return( 
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.item.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.item.rating} Stars, {result.item.review_count} Reviews</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    }, 
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 4
    },
    name: {
        fontWeight: 'bold',

    }

});

export default ResultsDetail;