import { StyleSheet } from 'react-native';
import colors from '../../../constants/common/colors';
import common from '../../../constants/common/common';
import fontSize from '../../../constants/common/font.size';

export default StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
        borderColor: colors.PRIMARY,
        borderWidth: 1,
    },
    defButton: {
        flex: 1,
        backgroundColor: colors.BRAND,
    },
    altButton: {
        flex: 1,
    },
    defText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: fontSize.M,
        paddingVertical: common.PADDING,
    },
    altText: {
        textAlign: 'center',
        color: colors.PRIMARY,
        fontSize: fontSize.M,
        paddingVertical: common.PADDING,
    },
});