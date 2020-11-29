import "antd/dist/antd.css";
import "../scss/_base.scss";
import { Provider } from "react-redux";
import Loading from "../components/loading/Loading";
import { initializeStore } from "../store";
import Template from "../components/template/Template";

export default function App({ Component, pageProps }) {
  const store = initializeStore(pageProps.state);

  return (
    <Provider store={store}>
        <Template>
          <Component {...pageProps} />
        </Template>
    </Provider>
  );
}
