import React, {Component} from "react";
import {StyleSheet, View, Button} from "react-native";
import {Field, Formik} from "formik";
import CustomInput from "./CustomInput";
import * as yup from "yup";
import {connect} from "react-redux";
import {NavigationActions} from "react-navigation";
import PropTypes from "prop-types";
import {updateNote} from "../redux/actions/actions_sagas";

class EditNote extends Component {
    render() {
        const {note, onEditNote} = this.props;

        const editNoteValidationSchema = yup.object().shape({
            name: yup
                .string()
                .required('Название заметки обязательно'),
            title: yup
                .string()
                .required('Краткое описание заметки обязательно'),
            description: yup
                .string()
                .required('Полное описание заметки обязательно'),
        })


        return (
            <View style={styles.container}>
                <Formik
                    validationSchema={editNoteValidationSchema}
                    initialValues={{name: note.name, title: note.title, description: note.description}}
                    onSubmit={(values) => {

                        note.name = values.name;
                        note.title = values.title;
                        note.description = values.description;
                        onEditNote(note)
                    }
                    }>
                    {({handleSubmit, isValid,}) => (
                        <View>
                            <Field
                                component={CustomInput}
                                name="name"
                                placeholder="Название заметки"
                            />
                            <Field
                                component={CustomInput}
                                name="title"
                                placeholder="Краткое описание заметки"
                            />
                            <Field
                                style={styles.textInput}
                                component={CustomInput}
                                name="description"
                                placeholder="Полное описание заметки"
                            />
                            <Button title="Изменить"
                                    onPress={handleSubmit}
                                    disabled={!isValid}/>
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}

EditNote.propTypes = {
    note: PropTypes.object,
    onEditNote: PropTypes.func
}

const mapStateToProps = (state) => ({
    note: state.edit.note
});

const mapDispatchToProps = (dispatch) => ({
    onEditNote: (item) => {
        dispatch(NavigationActions.back());
        dispatch(updateNote(item));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);

const styles = StyleSheet.create({

    container: {
        height: '100%',
        alignSelf: 'auto',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: -15
    },
    textInput: {
        height: 80,
        width: 300,
        margin: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
})

