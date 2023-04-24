import { StyleSheet, Text, View } from "react-native";

export interface CategoriasScreenProps {
}

export function CategoriasScreen (props: CategoriasScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Tela 1</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    }
});