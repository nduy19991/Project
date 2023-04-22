import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ItemSavedCommon from "../../common/ItemSavedCommon/ItemSavedCommon";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";
import NavBarlayout from "../../layout/NavBarLayout/NavBarLayout";
import Styles from "./Saved.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";

const Saved: React.FC = () => {

  const { saveds } = useSelector(
    (state: RootState) => state.saved
  );

  return (
    <div className={Styles.Container}>
      <NavBarlayout />
      <div className={Styles.header}>
        <p>Saved Items</p>
      </div>
      <div className={Styles.mid}>
        <div className={Styles.productList}>
          {saveds?.map((item : IProduct) => (
            <Row key={item._id}>
              <Col key={item._id}>
                <ItemSavedCommon item = {item} />
              </Col>
            </Row>
          ))}
        </div>
      </div>
      <FooterLayout/>
    </div>
  );
};

export default Saved;
