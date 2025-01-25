import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AddTask { }

const AddTask = () => {
    return (
        <View style={styles.container}>
            <Text>AddTask</Text>
        </View>
    );
};

export default AddTask;

const styles = StyleSheet.create({
    container: {}
});
