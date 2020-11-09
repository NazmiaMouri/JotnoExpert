import {StyleSheet} from 'react-native';
import fontSize from '../../constants/common/font.size';
import colors from '../../constants/common/colors';
import common from '../../constants/common/common';

export default StyleSheet.create({
  orgContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: common.PADDING,
  },
  orgwrapper: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 0,
    justifyContent: 'flex-start',
  },
  orgList: {
    width: '100%',
    height: 'auto',
    padding: 1,
  },
  organizationCard: {
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    backgroundColor: '#fff',
    padding: common.PADDING,
  },
  logoutButton: {
    width: '100%',
    padding: common.PADDING,
    height: 10,
  },
  myOrgWrapper: {
    width: '100%',
    padding: common.HORIZONTAL,
    paddingHorizontal: common.PADDING,
    backgroundColor: colors.PRIMARY,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    marginTop: common.MARGIN,
  },
  doctorTitle: {
    fontSize: fontSize.XL,
    fontWeight: 'bold',
    color: colors.BRAND,
  },
  doctorTitleWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    height: 120,
    width: 100,
  },
  item: {
    borderWidth: 1,
    borderColor: colors.ASH,
    marginBottom: 1,
  },
  title: {
    fontSize: fontSize.L,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: fontSize.T,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BRAND,
  },
  patientName: {
    fontSize: fontSize.L,
    fontWeight: '600',
    color: colors.PRIMARY,
  },
  employment: {
    fontSize: fontSize.T,
    color: colors.SECONDARY,
  },
  emptyOrganization: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: colors.SECONDARY,
    fontSize: fontSize.M,
  },
});
