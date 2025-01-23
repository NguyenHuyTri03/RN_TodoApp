import Checkbox from 'expo-checkbox';
import * as React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Pressable, FlatList, TouchableOpacity } from 'react-native';

interface HomePage { }

interface Task {
    id: number,
    name: string,
    completed: boolean,
    date: string
}

const taskList: Task[] = [
    {
        id: 1,
        name: 'Task 1',
        completed: false,
        date: '26/01/2025'
    },
    {
        id: 2,
        name: 'Task 2',
        completed: false,
        date: '26/01/2025'
    },
    {
        id: 3,
        name: 'Task 3',
        completed: false,
        date: '26/01/2025'
    },
    {
        id: 4,
        name: 'Task 4',
        completed: false,
        date: '26/01/2025'
    }
]

const HomePage = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Todo App</Text>
            </View>

            <View style={styles.tasksView}>
                <FlatList
                    data={taskList}
                    keyExtractor={item => item.id + ''}
                    style={{
                        alignSelf: 'stretch'
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.taskDetail}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Checkbox
                                        style={{ alignSelf: 'center' }}
                                    />

                                    <View>
                                        <Text style={styles.taskName}>{item.name}</Text>
                                        <Text style={styles.taskDate}>{item.date}</Text>
                                    </View>
                                </View>

                                <Ionicons name="trash-outline" size={30} style={{ color: "#e55143", alignSelf: 'center' }} />
                            </View>
                        )
                    }}
                />
            </View>

            <View style={styles.taskAddView}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.taskAddBtn}
                >
                    <Text style={{ fontSize: 25, color: '#f2f2f2' }}>Create task</Text>
                    <FontAwesome5 name="pen" style={{ paddingLeft: 10, alignSelf: 'center' }} size={24} color="#f2f2f2" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    // Major Views
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingTop: 40,

        backgroundColor: '#333333'
    },
    tasksView: {
        flex: 8,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    taskAddView: {
        flex: 2,
        alignSelf: 'stretch',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    // Miscelaneous
    title: {
        fontSize: 35,
        color: '#f2f2f2'
    },
    taskInput: {
        paddingVertical: 10,
        paddingHorizontal: 15,

        fontSize: 25,
        color: '#f2f2f2',
        backgroundColor: '#333333',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#404040'
    },
    taskAddBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',

        backgroundColor: '#2CB897',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#404040'
    },

    // Task details
    taskDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,

        backgroundColor: '#272727',
        borderRadius: 7,
    },
    taskName: {
        marginLeft: 20,
        marginBottom: 5,

        fontSize: 25,
        color: '#f2f2f2'
    },
    taskDate: {
        marginLeft: 20,

        fontSize: 20,
        color: '#606060'
    }
});

{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        paddingHorizontal: 20
                    }}>
                        <TextInput
                            style={styles.taskInput}
                            placeholder='What do you need to do?'
                            placeholderTextColor='#505050'
                        />
                    </View>
                </TouchableWithoutFeedback>

                <Pressable>

                </Pressable> */}