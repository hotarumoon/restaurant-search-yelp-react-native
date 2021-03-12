import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState(' ');
    const [searchApi, results, errMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price == price;
        });
    };
    return(
         // <> == < View style={{flex: 1}}>
        <>
            <SearchBar
                term={term} 
                onTermChange={(newTerm) => {setTerm(newTerm)}} 
                onTermSubmit={() => searchApi(term)}    
                />
            {errMessage ? <Text>{errMessage}</Text> : null}
            
            <ScrollView>            
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>

        </>
)};

const styles = StyleSheet.create({});
export default SearchScreen;