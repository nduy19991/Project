import React from "react";
import InputCommon from "../../common/InputCommon/InputCommon";
import Styles from "./RegisterPage.module.css"
import logo from "../../../images/logo_asos.png";
import facebook from "../../../images/facebook.png";
import google from "../../../images/google.png";

const RegisterPage: React.FC = () => {
    return (
        <div className={Styles.surrounding}>
          <div className={Styles.container}>
            {/* HEADER */}
            <div className={Styles.logo}>
              <img src={logo} alt="logo asos" />
            </div>
    
            {/* MAIN FORM */}
            {/* HEADER FORM */}
            <div className={Styles.main}>
              <div className={Styles.option}>
                <div className={Styles.titleJ}>Join</div>
                <div className={Styles.titleS}>Sign in</div>
              </div>
              {/* SOCIAL OPTION */}
              <div className={Styles.info}>
                <div
                  style={{
                    textAlign: "center",
                    margin: "40px auto 40px",
                    letterSpacing: "3px",
                    fontSize: "15px",
                    color: "#222222",
                  }}
                >
                  <h3>SIGN IN WITH ...</h3>
                </div>
                <div className={Styles.options_social}>
                  <div className={Styles.social_container}>
                    <div className={Styles.btn_social}>
                      <img
                        src="https://my.asos.com/Content/dist/images/d860112c552f4380997e32b29c5a0432.svg"
                        alt="google"
                        className={Styles.social_icon}
                      />
                      <div className={Styles.social_text}>GOOGLE</div>
                    </div>
                    <div className={Styles.btn_social}>
                      <img
                        src="https://my.asos.com/Content/dist/images/6ec595bf7f84e4933b4c1ab32c21c49a.svg"
                        alt="apple"
                        className={Styles.social_icon}
                      />
                      <div className={Styles.social_text}>APPLE</div>
                    </div>
                    <div className={Styles.btn_social}>
                      <img
                        src={facebook}
                        alt="facebook"
                        className={Styles.social_icon}
                        style={{ height: "22px", width: "22px", paddingTop: "5%" }}
                      />
                      <div className={Styles.social_text}>FACEBOOK</div>
                    </div>
                  </div>
                </div>
                <div className={Styles.text}>Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil</div>
                <div>
                  <br />
                </div>
              </div>
            </div>
          </div>
    
          {/* FOOTER */}
          <div className={Styles.footer}>
            <div className={Styles.label}>
              <a>Privacy Policy</a>
              <a style={{ padding: "5px" }}>|</a>
              <a>Term and Conditions</a>
            </div>
          </div>
        </div>
      );
};

export default RegisterPage