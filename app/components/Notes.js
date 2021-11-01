import React, {Component} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Button} from "react-native";
import PropTypes from "prop-types";
import {NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";
import {Ionicons} from "@expo/vector-icons";
import {EDIT, REMOVE} from "../constants/menu";
import {deleteNote, loadNotes} from "../redux/actions/actions_sagas";
import {setDetailNote, setEditNote} from "../redux/actions/actions_reducers";

class Notes extends Component {
    componentDidMount() {
        this.props.onLoadData();
    }

    render() {
        const {notes, onNotePress, onMenuSelected, onPressAddBtn} = this.props


        return (
            <View style={styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={notes}
                    renderItem={({item}) => (
                        <MenuProvider>
                            <View style={styles.item}>
                                <Menu style={styles.setting} onSelect={value => onMenuSelected(value, item)}>
                                    <MenuTrigger>
                                        <Ionicons
                                            name="ios-menu-outline"
                                            size={30}
                                            color="black"/>
                                    </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption style={styles.setting_row} value={EDIT}>
                                            <Ionicons name="create-outline" size={24} color="blue"/>
                                            <Text style={styles.menuContent}>Редактировать</Text>
                                        </MenuOption>
                                        <MenuOption style={styles.setting_row} value={REMOVE}>
                                            <Ionicons name="md-trash" size={24} color="red"/>
                                            <Text style={styles.menuContent}>Удалить</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        onNotePress(item)
                                    }}>
                                        <Image style={styles.image} source={{uri: item.link}}/>
                                        <Text style={styles.name}> {item.name} </Text>
                                        <Text style={styles.title}> {item.title} </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </MenuProvider>
                    )}
                />
                <View style={styles.add_btn}>
                    <Button color='green'
                            title="Создать новую заметку"
                            onPress={onPressAddBtn}/>
                </View>
            </View>

        )
    }
}

Notes.propTypes = {
    onMenuSelected: PropTypes.func,
    onNotePress: PropTypes.func,
    onPressAddBtn: PropTypes.func,
    onLoadData: PropTypes.func,
    notes: PropTypes.array,
    isLoadData: PropTypes.bool
};

const mapStateToProps = (state) => ({
    notes: state.content.notes,
    isLoadData: state.content.isLoadData
});

const mapDispatchToProps = (dispatch) => ({
    onMenuSelected: (menuId, item) => {
        switch (menuId) {
            case EDIT: {
                dispatch(setEditNote(item));
                dispatch(NavigationActions.navigate({routeName: 'editNote'}));
            }
                break
            case REMOVE:
                dispatch(deleteNote(item));
                break
        }
    },
    onNotePress: (item) => {
        dispatch(setDetailNote(item));
        dispatch(NavigationActions.navigate({routeName: 'noteDetail'}));
    },
    onPressAddBtn: () => {
        dispatch(NavigationActions.navigate({routeName: 'addNote'}));
    },
    onLoadData: () => {
        dispatch(loadNotes());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D6D3D6',
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    menuContent: {
        marginLeft: 5,
        fontSize: 16,
        color: "#000",
    },
    item: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 15,
        elevation: 10
    },
    name: {
        fontSize: 22,
        textAlign: "center",
        color: "#111111",
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        margin: 10,
        color: "#111111",
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        margin: 5,
        color: "#111111",
    },
    image: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,


        marginLeft: 25,
        marginRight: 25,
        margin: 10,
        width: 400,
        height: 220,
    },
    setting: {
        right: '-43%',
        marginTop: 5,
        marginBottom: 10
    },

    setting_row: {
        width: '100%',
        flexDirection: "row"
    },
    add_btn: {
        marginTop: 15,
        marginBottom: 15
    }
});
