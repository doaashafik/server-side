import "antd/dist/antd.css";
import "../scss/_base.scss";
import { Provider } from "react-redux";
import Loading from "../components/loading/Loading";
import { PersistGate } from "redux-persist/integration/react";
import { initializeStore, persistor } from "../store";
import Template from "../components/template/Template";

export default function App({ Component, pageProps }) {
  const store = initializeStore(pageProps.state);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </PersistGate>
    </Provider>
  );
}
