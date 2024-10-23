import React from "react";
// import styles
import "../../styles/public/my-order/my-order.css";
// import components
import { SettingNav } from "../../components/navbar/SettingNav";
import { BounceLoader } from "react-spinners";
import { MyOrderList } from "../../components/public/my-order/MyOrderList";
import { MyOrderDetail } from "../../components/modal/MyOrderDetail";
export const CustomerOrderPage = () => {
  return (
    <div className="customer-order-container">
      <MyOrderDetail />
      <SettingNav />
      <div className="customer-order">
        <div className="header">
          <strong>Order History</strong>
          <div className="loading">
            <BounceLoader color="#23B870" size={25} />
            <p>Loading orders</p>
          </div>
          {/* <div className="saved">
            <i className="bx bx-check"></i>
            <p>All loaded</p>
          </div> */}
        </div>
        <MyOrderList />
      </div>
    </div>
  );
};
