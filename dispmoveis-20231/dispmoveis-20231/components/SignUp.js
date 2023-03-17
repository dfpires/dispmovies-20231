import { SafeAreaView, StatusBar, View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants'
import {Formik} from 'formik'
import {validationSchema} from './validation'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
export default function SignUp(){
    function onSubmitHandler(values){
        console.log(values)
    }
    return (
        <>
           <SafeAreaView style={styles.topSafeArea}/>
           <StatusBar style="light"/>
           <SafeAreaView style={styles.container}>
                <View style={styles.header}> 
                    <Text style={styles.headerText}> Sign Up </Text>
                </View>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    onSubmit={(values, actions) => {
                        onSubmitHandler(values, actions)
                    }}
                    validationSchema={validationSchema}
                    >
                        {({
                            handleChange,
                            values,
                            errors,
                            touched,
                            handleSubmit,
                            handleBlur
                        }) => (
                            <KeyboardAwareScrollView
                                style={styles.content}
                                showsVerticalScrollIndicator={false}>
                                {/* CONTINUA AQUI */}
                            </KeyboardAwareScrollView>
                        )}
                </Formik>
           </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    topSafeArea: {
        backgroundColor: "#3498db"
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#3498db"
    },
    header: {
        height: 60,
        justifyContent: "center", // vertical
        alignItems: "center", // horizontal
        backgroundColor: "#3498db",
    },
    headerText: {
        color: "#fff",
        fontSize: 18
    },
    content: {
        padding: 20,
        backgroundColor: "#f9f9f9"
    }
})