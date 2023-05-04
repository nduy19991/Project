import React, { useState, useMemo } from "react";
import numeral from "numeral";
import "numeral/locales/en-gb";
import Styles from "./ItemBagCommon.module.css";
import SelectCommon from "../SelectCommon/SelectCommon";
import { AiOutlineHeart, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "../../../redux/Store";
import { deleteToCart } from "../../../redux/cart/Cart.service";

numeral.locale("en-gb");

const ItemBagCommon: React.FC<ICardCommon> = (props) => {
  const { item } = props

  const formattedoldPrice = item?.price ? numeral(item?.price).format("$0,0") : null;

  const formattednewPrice = item?.total ? numeral(item?.total).format("$0,0") : null;

  const [isShowLike, setIsShowLike] = useState(true);

  const handleClick = () => {
    setIsShowLike(!isShowLike);
  };
  console.log(item)

  const dispatch = useAppDispatch();

  const handleDeleteToCart = () => {
    if (item) {
      dispatch(deleteToCart(item));
    }
  }
  const listSelect = useMemo(
    () => [
      {
        id: 1,
        // title: "SIZE",
        list: [
          { id: 1, text: "S", value: "1" },
          { id: 2, text: "2", value: "2" },
          { id: 3, text: "3", value: "3" },
          { id: 4, text: "4", value: "4" },
        ],
      },
      {
        id: 2,
        // title: "Qty",
        list: [
          { id: 1, text: "Qty", value: "1" },
          { id: 2, text: "2", value: "2" },
          { id: 3, text: "3", value: "3" },
          { id: 4, text: "4", value: "4" },
        ],
      },
    ],
    []
  );
  return (
    <>
      <div className={Styles.surrounding}>
        <div className={Styles.container}>
          <div className={Styles.left}>
            <div>
              {/* LEFT*/}
              <div
                className={Styles.image}
                style={{ backgroundImage: `url(${item?.imgLeave})` }}
              ></div>
            </div>
          </div>

          <div className={Styles.right}>
            <div className={Styles.price}>
              <span className={Styles.normal_price}>
                {item?.normalPrice ? (
                  <span>{numeral(item?.normalPrice).format("$0,0.00")}</span>
                ) : null}
              </span>
              <span className={Styles.new_price}>
                {formattednewPrice ?? <span>{formattednewPrice}</span>}
              </span>
              <span className={Styles.old_price}>
                {item?.discount ? <span>{formattedoldPrice}</span> : null}
              </span>
            </div>

            {/* PRODUCT_NAME */}
            <div className={Styles.title}>
              {item?.title ?? <div className="input-group-text">{item?.title}</div>}
            </div>

            {/* SELECT GROUP */}
            <div className={Styles.select_group}>
              <span className={Styles.select_size}>SILVER</span>
              <span className={Styles.type}>
                {listSelect?.map((item) => {
                  return (
                    <SelectCommon
                      list={item.list}
                      key={`item__nav__${item.id.toString()}`}
                    />
                  );
                })}
              </span>
            </div>

            <div className={Styles.like}>
              <button className={Styles.btn_like} onClick={handleClick}>
                {isShowLike ? (
                  <AiOutlineHeart className={Styles.heart} />
                ) : (
                  <AiFillHeart className={Styles.heart} />
                )}
              </button>
              <span className={Styles.btn_text}>Save for later</span>
            </div>
          </div>
          <div onClick={handleDeleteToCart}><AiOutlineClose/></div>
        </div>
      </div>
    </>
  );
};

export default ItemBagCommon;
