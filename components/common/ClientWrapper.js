"use client";
//import node module libraries
import { Provider } from "react-redux";
import store, { persistor } from "store/store";
import { PersistGate } from "redux-persist/es/integration/react";

const ClientWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ClientWrapper;
