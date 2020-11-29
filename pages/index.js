import Head from "next/head";
import { withTranslation } from "../i18n";

function Home({ t }) {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center">{t("title")}</h1>
    </div>
  );
}
Home.getInitialProps = async () => ({
  namespacesRequired: ['general', 'products'],
})
export default withTranslation('general')(Home);
