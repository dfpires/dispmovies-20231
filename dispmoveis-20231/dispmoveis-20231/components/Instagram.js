import { SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import {Feather} from "@expo/vector-icons"

const instagram_logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"

export default function Instagram() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark"/>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24}/>
                </TouchableOpacity>
                <Image source={{uri:instagram_logo}} style={styles.logo}/>
                <TouchableOpacity>
                    <Feather name="send" size={24}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}