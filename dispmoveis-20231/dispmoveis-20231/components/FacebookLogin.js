import { View, StatusBar, Image, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Text } from "react-native";
import FacebookBanner from '../assets/facebook-banner.jpg'

const bannerHeight = Dimensions.get("window").width

export default function FacebookLogin(){
    return (
        <>
            <StatusBar style="light"/>
            <Image source={FacebookBanner} style={styles.banner}/>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TextInput style={[styles.input, styles.inputUsername]}placeholder="Número de telefone ou e-mail" placeholderTextColor="#cdcdcf"/> 
                    <TextInput style={[styles.input, styles.inputPassword]}placeholder="Senha" placeholderTextColor="#cdcdcf" secureTextEntry={true}/> 
                    <TouchableOpacity>
                        <Text> Conecte-se </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text> Esqueceu a senha? </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text> Volte </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <View/>
                        <Text> OU </Text>
                        <View/>
                    </View>
                    <TouchableOpacity>
                        <Text> Criar uma nova conta </Text>
                    </TouchableOpacity>
                </View> 
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    banner: {
        resizeMode: "contain",
        width: "100%",
        height: bannerHeight
    },
    input: {
        borderWidth: 1,
        borderColor: "#cdcdcf",
        color: "#333333",
        fontSize: 16,
        height: 44,
        paddingHorizontal: 15
    },
    inputUsername: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    inputPassword: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    content: {
        padding: 22
    } 
})