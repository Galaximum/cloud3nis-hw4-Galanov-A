import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native"
import {connect} from "react-redux";

class NoteDetail extends Component {
    render() {
        const {note} = this.props
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: note.link}}/>
                <Text style={styles.name}>{note.name}</Text>
                <Text style={styles.description}>{note.description}</Text>
            </View>
        )

    }
}

const mapStateToProps = (state) => ({
    note: state.detail.note
});

export default connect(mapStateToProps)(NoteDetail);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    name:{
        fontSize: 22,
        textAlign: "center",
        color: "#111111",
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        margin: 5,
        color: "#111111",
    },
    image: {
        resizeMode: "contain",
        margin:10,
        alignSelf:'center',
        width:'90%',
        height: 250,
    }
});
