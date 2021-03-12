import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import {withNavigation} from 'react-navigation';

//using withNavigation, the component will still have access to navigation as a prop but we didn't have to pass it from 
//searchScreen which does not use it itself at all just passes it to here
const ResultList = ({title, results, navigation}) => {
    if(!results.length){
        return null; //don't show anything 
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={(result) => {
                //console.log(result)
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", {id: result.item.id})}>
                        <ResultsDetail result={result}/>
                    </TouchableOpacity>
                );
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10, 
    }
});

export default withNavigation(ResultList);