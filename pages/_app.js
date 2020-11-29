import "antd/dist/antd.css";
import "../scss/_base.scss";
import { Provider } from "react-redux";
import { initializeStore } from "../store";
import Template from "../components/template/Template";
import {appWithTranslation} from '../i18n'
function App({ Component, pageProps }) {
  const store = initializeStore();
  return (
    <Provider store={store}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </Provider>
  );
}
export default appWithTranslation(App)
