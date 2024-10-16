import React from "react";
// import styles
import "../../styles/private/order/order.css";
// import components
import { Dashnav } from "../../components/navbar/Dashnav";
import { OrderList } from "../../components/private/order/OrderList";
import { OrderDetail } from "../../components/modal/OrderDetail";
export const OrderManager = () => {
  return (
    <div className="order-manager-container">
      <OrderDetail />
      <Dashnav />
      <div className="order-manager">
        <div className="header">
          <p>Order Manager</p>
          <div className="my-info">
            <i className="bx bx-user-circle"></i>
            <div>
              <strong>Hi, Tang Hoang Khuong</strong>
              <p>hoangkhuong2k4@gmail.com</p>
            </div>
          </div>
        </div>
        <OrderList />
      </div>
    </div>
  );
};
