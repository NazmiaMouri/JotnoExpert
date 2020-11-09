import { StyleSheet } from 'react-native';
import fontSize from '../../../constants/common/font.size';
import colors from '../../../constants/common/colors';

export default StyleSheet.create({
    container: {
        padding: 10
    },
    formControl: {
        marginBottom: 10
    },
    label: {
        fontWeight: '700',
        fontSize: fontSize.S
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        borderColor: colors.PRIMARY,
        borderWidth: 1,
        borderRadius: 5
    },
    required: {
        color: colors.ERROR
    },
    errorText: {
        color: colors.ERROR,
        fontSize: fontSize.XT,
        fontWeight: 'bold',
        opacity: 0.8
    }
});