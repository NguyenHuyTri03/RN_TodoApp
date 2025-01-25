import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Task from '../interfaces/Task'
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Pressable, FlatList, TouchableOpacity } from 'react-native';

interface HomePage { }

const taskList: Task[] = [
    {
        id: 1,
        name: 'Task 1',
        completed: false,
    },
    {
        id: 2,
        name: 'Task 2',
        completed: false,
    },
    {
        id: 3,
        name: 'Task 3',
        completed: false,
    },
    {
        id: 4,
        name: 'Task 4',
        completed: false,
    }
]

const HomePage = () => {
    const [tasks, setTasks] = useState(taskList)
    const [addState, setAddState] = useState(false)
    const [taskNameState, setTaskName] = useState('')

    const handleCheckbox = (id: number) => {
        let temp = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
        setTasks(temp)
    }

    const handleTaskDelete = (id: number) => {

        let temp = tasks.filter((task) => task.id !== id)

        setTasks(temp)
    }

    const handleAddTask = (taskName: string) => {
        setTaskName('')
        let id: number = tasks.length + 1

        let task = {
            id: id,
            name: taskName,
            completed: false
        }

        tasks.push(task)
        setAddState(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Todo App</Text>
            </View>

            {addState ? (
                <View style={styles.addTaskView}>

                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                        <Text style={{
                            marginBottom: 10,
                            marginLeft: 20,

                            color: '#f2f2f2',
                            fontSize: 25,
                        }}>Task</Text>

                        <View style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            paddingHorizontal: 20
                        }}>
                            <TextInput
                                style={styles.taskInput}
                                placeholder='What do you need to do?'
                                placeholderTextColor='#505050'
                                value={taskNameState}
                                onChangeText={setTaskName}
                            />
                        </View>

                    </View>

                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.taskAddBtn}
                    >
                        <Pressable
                            onPress={() => { handleAddTask(taskNameState) }}>
                            <Text style={{ color: '#f2f2f2', fontSize: 20 }}>Add task</Text>
                        </Pressable>
                    </TouchableOpacity>

                    <View style={{ flex: 3 }}>

                    </View>
                </View>
            ) : (
                <View style={styles.tasksView}>
                    <FlatList
                        data={tasks}
                        keyExtractor={item => item.id + ''}
                        style={{
                            alignSelf: 'stretch'
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.taskDetail}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Checkbox
                                            style={{ alignSelf: 'center', height: 25, width: 25 }}
                                            value={item.completed}
                                            onValueChange={() => {
                                                handleCheckbox(item.id)
                                            }}
                                            color={item.completed ? '#2CB897' : undefined}
                                        />

                                        <View>
                                            <Text style={[styles.taskName, item.completed && styles.taskNameCompleted]}>{item.name}</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }} activeOpacity={0.7} onPress={() => { handleTaskDelete(item.id) }}>
                                        <Ionicons
                                            name="trash-outline"
                                            size={30}
                                            style={{ color: "#e55143" }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
            )}

            <View style={styles.taskAddBtnView}>
                {addState ? (

                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.taskCancelBtn}
                            onPress={() => {
                                setAddState(!addState)
                            }}
                        >
                            <Text style={{ fontSize: 25, color: '#f2f2f2' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                ) : (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.taskAddBtn}
                        onPress={() => {
                            setAddState(!addState)
                        }}
                    >
                        <Text style={{ fontSize: 25, color: '#f2f2f2' }}>Create task</Text>
                        <FontAwesome5 name="pen" style={{ paddingLeft: 10, alignSelf: 'center' }} size={24} color="#f2f2f2" />
                    </TouchableOpacity>
                )}
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
    taskAddBtnView: {
        flex: 2,
        alignSelf: 'stretch',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    addTaskView: {
        flex: 8,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },

    // Miscelaneous
    title: {
        fontSize: 35,
        color: '#f2f2f2'
    },
    taskInput: {
        paddingVertical: 10,
        paddingHorizontal: 15,

        fontSize: 20,
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
    taskCancelBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',

        backgroundColor: '#ff3d42',
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
    taskNameCompleted: {
        marginLeft: 20,
        marginBottom: 5,

        fontSize: 25,
        color: '#f2f2f2',
        textDecorationLine: 'line-through'
    },

});

