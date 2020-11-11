import {StyleSheet} from 'react-native';
import fontSize from '../../../constants/common/font.size';
import colors from '../../../constants/common/colors';
import common from '../../../constants/common/common';

export default StyleSheet.create({
  container: {
    padding: common.PADDING,
  },
  errorMessage: {
    color: colors.ERROR,
    fontSize: fontSize.T,
  },
  formControl: {
    marginBottom: common.MARGIN,
  },
  inputTitle: {
    fontSize: fontSize.M,
  },
  input: {
    height: common.INPUT_HEIGHT,
    padding: common.PADDING,
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    fontSize: fontSize.M,
  },
  required: {
    color: colors.ERROR,
  },
});
