import {StyleSheet} from 'react-native';
import colors from '../../../constants/common/colors';
import common from '../../../constants/common/common';
import fontSize from '../../../constants/common/font.size';

export default StyleSheet.create({
  buttonWrapper: {
    borderColor: colors.SECONDARY,
    borderBottomWidth: 1,
  },
  buttonGroup: {
    borderColor: colors.SECONDARY,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  defButton: {
    flex: 1,
    backgroundColor: colors.BRAND,
    paddingVertical: common.PADDING,
  },
  altButton: {
    flex: 1,
    paddingVertical: common.PADDING,
  },
  defText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: fontSize.M,
  },
  altText: {
    textAlign: 'center',
    fontSize: fontSize.M,
  },
  messageWrapper: {
    borderWidth: 1,
    borderColor: colors.SECONDARY,
    backgroundColor: colors.ACCENT,
    padding: common.PADDING,
  },
  titleWrapper: {
    borderWidth: 1,
    borderColor: colors.SECONDARY,
    backgroundColor: colors.SECONDARY,
    padding: common.PADDING,
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.M,
  },
});
