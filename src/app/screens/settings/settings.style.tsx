import { StyleSheet } from 'react-native';
import colors from '../../constants/common/colors';
import common from '../../constants/common/common';
import fontSize from '../../constants/common/font.size';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: common.MARGIN
    },
    subContainer: {
        width: '47.7%',
        padding: common.PADDING,
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        alignItems: 'center',
        shadowColor: '#0A8D95',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 2.00,
        elevation: 5,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        color: colors.PRIMARY,
        fontSize: fontSize.M
    }
});