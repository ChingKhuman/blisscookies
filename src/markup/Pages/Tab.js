import React, { useState, useEffect, useMemo } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { loadProducts } from "../../redux/action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

const Popupss = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);

  const filteredProductList = useMemo(() => {
    return productList.filter((p) => p.category.id === activeTab);
  }, [productList, activeTab]);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div class="section-full bg-white pizza-full-menu">
      <div tabs>
        <div className="bg-primary pizza-items">
          <div className="container">
            <ul className="nav nav-tabs pizza-items filters">
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === 1 },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle(1);
                  }}
                >
                  <i className="flaticon-pizza-slice"></i>
                  <span>Cakes</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === 2 },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle(2);
                  }}
                >
                  <i className="flaticon-burger"></i>
                  <span>Fries</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === 3 },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle(3);
                  }}
                >
                  <i className="flaticon-french-fries"></i>
                  <span>Vanilla Cakes</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === 4 },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle(4);
                  }}
                >
                  <i className="flaticon-cola"></i>
                  <span>Cola</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === 5 },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle(5);
                  }}
                >
                  <i className="flaticon-hot-dog"></i>
                  <span>Hotdog</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === 6 },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle(6);
                  }}
                >
                  <i className="flaticon-cookies"></i>
                  <span>Cookies</span>
                </Link>
              </li>
              <li className="nav-item item">
                <input type="radio" />
                <Link
                  className={classnames(
                    { active: activeTab === 7 },
                    "item-icon-box nav-link"
                  )}
                  onClick={() => {
                    toggle(7);
                  }}
                >
                  <i className="flaticon-sandwich"></i>
                  <span>Sandwich</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-inner">
        <div className="container-fluid">
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {/* CAKE SECTION */}
            {filteredProductList.map(
              ({ name, image, price, offer_price, id }) => {
                return (
                  <div className="dz-col col m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img">
                        <img src={image} alt="cake" />
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={`./shop-product-details/${id}`}>
                            {name}
                          </Link>
                        </h4>
                        <h5 className="price text-primary">
                          <del>₹ {price}</del>
                          <span>₹ {offer_price}</span>
                        </h5>
                        <div className="cart-btn">
                          <Link
                            to={`./shop-product-details/${id}`}
                            className="btn btnhover radius-xl"
                          >
                            <i className="ti-shopping-cart"></i> Add To Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupss;
