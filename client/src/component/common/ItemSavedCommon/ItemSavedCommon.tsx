import React, { useMemo } from "react";
import numeral from "numeral";
import "numeral/locales/en-gb";
import Styles from "./ItemSavedCommon.module.css";
import { useAppDispatch } from "../../../redux/Store";
import { deleteToSave } from "../../../redux/save/Save.service";

numeral.locale("en-gb");

const ItemSavedCommon: React.FC<ICardCommon> = (props) => {
  const { item } = props

  const formattednewPrice = item?.total ? numeral(item?.total).format("$0,0") : null;

  const dispatch = useAppDispatch();

  const handleDeleteToCart = () => {
    if (item) {
      dispatch(deleteToSave(item));
    }
  }

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.top}>
          <div className={Styles.image}>
            {/* style={{ backgroundImage: `url(${imgLeave})` }} */}
            <img src={item?.imgLeave} alt="" />
          </div>

          <div className={Styles.title}>
            {item?.title ?? <div className="input-group-text">{item?.title}</div>}
          </div>
        </div>

        <div className={Styles.mid}>
          <div className={Styles.price}>
            <span className={Styles.new_price}>
              {formattednewPrice ?? <span>{formattednewPrice}</span>}
            </span>
          </div>

          {/* SELECT GROUP */}
          <div className={Styles.select_group}>
            <section className={Styles.form}>
              <option value="">MALLARD GREEN</option>
            </section>
            <select
              className={Styles.form_select}
              aria-label=".form-select-sm example"
            >
              <option selected>Size</option>
              <option value="1">XS</option>
              <option value="2">XL</option>
            </select>
          </div>
        </div>
        <button className={Styles.button} onClick={handleDeleteToCart}>MOVE TO BAG</button>
      </div>
    </div>
  );
};

export default ItemSavedCommon;
