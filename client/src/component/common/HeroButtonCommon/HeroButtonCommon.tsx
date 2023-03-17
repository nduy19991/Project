import React from "react";
import Styles from "./HeroButtonCommon.module.css";
import clsx from "clsx";

const HeroButtonCommon: React.FC<HeroButtonCommon> = (props) => {
  const { title, hideboder, height } = props;

  return (
    <div>
      <button 
      className={clsx(Styles.hero_button, {
        [Styles.hideboder] : hideboder
      })}
      style={{height: height}}
      >
        {title ?? <span className={Styles.bot_textbtn}>{title}</span>}
      </button>
    </div>
  );
};

export default HeroButtonCommon;
