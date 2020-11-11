import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/common/colors';
import fontSize from '../../constants/common/font.size';
import common from '../../constants/common/common';

const phoneNumberSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    fontSize: fontSize.M,
    height: common.INPUT_HEIGHT,
    padding: common.PADDING,
    elevation: 1,
    borderColor: '#000',
  },
  infoContainer: {
    padding: common.PADDING,
    borderColor: colors.PRIMARY,
    elevation: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
  },
  infoSubContainer: {
    flexDirection: 'row',
  },
  patientName: {
    flex: 1,
    fontSize: fontSize.S,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  patientDob: {
    flex: 1,
  },
  errorMessage: {
    color: colors.ERROR,
    paddingLeft: common.PADDING,
  },
});

export default phoneNumberSearchStyles;
