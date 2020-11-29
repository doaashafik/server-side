import React from "react";
import { Button } from "antd";
import { withTranslation } from "../../i18n";
import Style from './SwitchLanguage.module.scss'
const SwitchLanguage = ({ i18n, t}) => {
  return (
    <Button
      type="button"
      className={Style.buttonSwitch}
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}>
      {t("change-locale")}
    </Button>
  );
};
export default withTranslation('general')(SwitchLanguage);
