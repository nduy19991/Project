import React from "react";
// import Styles from "./LoginPage.module.css";
import Styles from "./LoginPage.module.css";
import InputCommon from "../../common/InputCommon/InputCommon";

const LoginPage: React.FC = () => {

  return (
    <div className={Styles.bg_form}>
      <div className={Styles.form}>
        <InputCommon label="Email" />
        <InputCommon label="Password" />
      </div>
    </div>
  );
};

export default LoginPage;
