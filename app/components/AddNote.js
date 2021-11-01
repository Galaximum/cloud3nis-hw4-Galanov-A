import React, {Component} from "react";
import {StyleSheet, View, Button} from 'react-native';

import * as yup from 'yup';
import {Formik, Field} from "formik";
import CustomInput from "./CustomInput";
import {connect} from "react-redux";
import {NavigationActions} from "react-navigation";
import PropTypes from "prop-types";
import {createNote} from "../redux/actions/actions_sagas";
import moment from 'moment';

class AddNote extends Component {


    render() {
        const randomLink = [
            "https://f.vividscreen.info/soft/41d8bb4858d09fee7326c6333fd22828/Landscape-Photography-1440x1280.jpg",
            "https://wallbox.ru/resize/1920x1200/wallpapers/main2/201717/voshod-solnca-bolgaria.jpg",
            "https://hdwallsource.com/img/2014/8/high-quality-wallpapers-21749-22292-hd-wallpapers.jpg",
            "https://i.ytimg.com/vi/nrZqcq3x4J0/maxresdefault.jpg",
            "https://wallbox.ru/resize/1400x1050/wallpapers/main/201421/79e7a7421e827c1.jpg",
            "https://img3.goodfon.ru/original/1280x1024/2/96/lemur-sidit-otdyh.jpg",
            "https://wallbox.ru/resize/1280x720/wallpapers/main/201252/3d0c7ca9450ad70.jpg",
            "https://cdn.fishki.net/upload/post/2019/03/18/2914737/da1b85bf120c778f5a80d408c86b9d64.jpg",
            "http://www.fonstola.ru/pic/201711/640x960/fonstola.ru-277113.jpg",
            "https://img2.goodfon.ru/original/1600x900/4/aa/yagoda-klubnika-makro-derevo.jpg",
            "https://c.wallhere.com/photos/1d/88/snow_leopard_top_big_cat_predator-1065169.jpg!d",
            "https://c.wallhere.com/photos/c4/57/town_flowers_house-163694.jpg!d"
        ]

        const addNoteValidationSchema = yup.object().shape({
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
                    validationSchema={addNoteValidationSchema}
                    initialValues={{name: "", title: "", description: ""}}
                    onSubmit={values => {
                        let randImage = randomLink[Math.floor(Math.random() * (randomLink.length))];
                        let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)

                        let note = {
                            name: values.name,
                            title: values.title,
                            description: values.description,
                            link: randImage,
                            lastDate: moment().format(),
                            id: id.toString(),
                        }
                        this.props.onAddNote(note);
                    }}>
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
                            <Button title="Добавить"
                                    onPress={handleSubmit}
                                    disabled={!isValid}/>
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}


AddNote.propTypes = {
    onAddNote: PropTypes.func
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onAddNote: (item) => {
        dispatch(NavigationActions.back());
        dispatch(createNote(item));
    },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
