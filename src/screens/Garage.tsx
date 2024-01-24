import { StyleSheet, Text, View } from 'react-native';
import CardView from '../cardView';

export default function GarageCars() {
    return (
        <View style={styles.container}>
            <View style={styles.cardBox}>

                <CardView />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardBox: {
        position: 'relative',
        width: 350,
        height: '90%',
        overflow: 'hidden',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'white',
        borderBottomStartRadius: 68,
        borderTopRightRadius: 68
    }
});
