import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
import productItems from "../../../data/productItems.json"
import Styles from "./ProductPage.module.css";
import { Col, Row } from "react-bootstrap";

const ProductPage: React.FC = () => {
    return (
        <div className={Styles.bg_product}>
            <div className={Styles.product}>
            {productItems.map((item) => (
            <Row>
              <Col key={item.id}>
                <CardCommon {...item} />
              </Col>
            </Row>
          ))}
            </div>
        </div>
    )
};
export default ProductPage