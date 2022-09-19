import { configureStore } from "@reduxjs/toolkit";
// import {reducer as GlobalReducer} from './root-slice';
// import {reducer as paymentHealthAlertReducer} from './views/partials/payment-health-alert/payment-health-alert.slice';
// import {reducer as PaymentWizardReducer} from './views/screens/payment-wizard/payment-wizard.slice';
// import {reducer as CreditCardReducer} from '@shared/credit-card/slice';
import { podcastApi } from "./services/podcast.api";

const store = configureStore({
  reducer: {
    // global: GlobalReducer,
    // paymentHealthAlert: paymentHealthAlertReducer,
    // PaymentWizardReducer,
    // CreditCardReducer,
    // [podcastApi.reducerPath]: podcastApi.reducer,
    [podcastApi.reducerPath]: podcastApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      podcastApi.middleware
    );
    //   .concat(pymeApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
