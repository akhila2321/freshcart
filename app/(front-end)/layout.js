"use client";

// import node module libraries
import { Provider } from "react-redux";

// import redux store 
import store from "store/store";

// import core stylesheet(s)
import "styles/theme.scss";

// import custom components
import AppLayout from "components/layouts/AppLayout";

const FrontendLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <AppLayout>
        {children}
      </AppLayout>
    </Provider>
  );
};

export default FrontendLayout;
