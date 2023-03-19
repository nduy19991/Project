import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
// import productItems from "../../../data/productItems.json"
import Styles from "./ProductPage.module.css";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

const ProductPage: React.FC = () => {

  const [products, setProducts] = React.useState<Array<IProduct>>([]);


  React.useEffect(() => {
    axios.get("http://localhost:9000/products").then((response) => {
      setProducts(response.data);
      // console.log(response.data);
    });
  }, []);
  return (
    <div className={Styles.bg_product}>
      <div className={Styles.product}>
        {products.map((item) => (
          <Row>
            <Col key={item._id}>
              <CardCommon {...item} />
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};
export default ProductPage;
