import {StyleSheet} from 'react-native';
import colors from '../../constants/common/colors';
import fontSize from '../../constants/common/font.size';
import common from '../../constants/common/common';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  scollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    margin: common.MARGIN,
    padding: common.MARGIN,
  },
  title: {
    color: colors.PRIMARY,
    fontWeight: 'bold',
    fontSize: fontSize.L,
    textAlign: 'center',
  },
  input: {
    height: common.INPUT_HEIGHT,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginEnd: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: colors.PRIMARY,
    padding: common.PADDING,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: fontSize.M,
  },
  loginPageLogoContainer: {
    alignItems: 'center',
    width: '70%',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#0A8D95',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  jotnoLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchButton: {
    flexDirection: 'row',
    marginBottom: common.MARGIN,
  },
  doctorPassword: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    width: '100%',
    height: common.INPUT_HEIGHT,
    padding: common.PADDING,
    fontSize: fontSize.M,
  },
  doctorBMDC: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    width: '55%',
    paddingHorizontal: common.PADDING,
    fontSize: fontSize.M,
    borderLeftWidth: 0,
  },
  buttonWrapper: {
    marginBottom: common.MARGIN,
  },
  dialCall: {
    fontSize: fontSize.M,
  },
});
