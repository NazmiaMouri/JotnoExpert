import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from '../auth/auth.reducer';
// import OrganizationReducer from '../organization/organization.reducer';
// import AppointmentReducer from '../appointment/appointment.reducer';
// import PatientReducer from '../patient/patient.reducer';
// import PrescriptionReducer from '../prescription/prescription.reducer';
// import PreferenceReducer from '../preference/preference.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  //   org: OrganizationReducer,
  //   appointment: AppointmentReducer,
  //   patient: PatientReducer,
  //   prescription: PrescriptionReducer,
  //   doctorPreference: PreferenceReducer,
});

export const rootStore = createStore(rootReducer, applyMiddleware(ReduxThunk));
