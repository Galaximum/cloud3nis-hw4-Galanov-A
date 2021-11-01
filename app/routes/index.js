import React from 'react'
import {connect} from 'react-redux'
import {createStackNavigator} from 'react-navigation'
import {createReduxContainer} from 'react-navigation-redux-helpers';

import Notes from '../components/Notes';
import NoteDetail from "../components/NoteDetail";
import EditNote from "../components/EditNote";
import AddNote from "../components/AddNote";
import {Platform, StatusBar} from "react-native";


const RouterConfigs = {
    notes: {
        screen: Notes, navigationOptions: {
            title: "Заметки",
        }
    },
    noteDetail: {
        screen: NoteDetail, navigationOptions: {
            title: "Заметка"
        }
    },
    editNote: {
        screen: EditNote, navigationOptions: {
            title: "Редактирование заметки"
        }
    },
    addNote: {
        screen: AddNote, navigationOptions: {
            title: "Добавление заметки"
        }
    },
};


export const Router = createStackNavigator(RouterConfigs, {
    initialRouteName: 'notes',
    cardStyle: {
        paddingTop: Platform.OS === 'web' ? 60 : StatusBar.currentHeight
    }
});

const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppContainer = createReduxContainer(Router);
export const AppWithNavigationState = connect(mapStateToProps)(AppContainer);
