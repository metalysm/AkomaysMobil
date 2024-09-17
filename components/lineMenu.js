import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.profileIcon}>
                    <Icon name="user" size={50} color="#000" />
                </TouchableOpacity>
                <Text style={styles.profileText}>User Name</Text>
            </View>

            <DrawerItemList {...props} />

            <TouchableOpacity style={styles.customMenuItem}>
                <Text style={styles.customMenuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customMenuItem}>
                <Text style={styles.customMenuText}>Log Out</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    profileIcon: {
        marginBottom: 10,
    },
    profileText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    customMenuItem: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    customMenuText: {
        fontSize: 16,
    },
});
