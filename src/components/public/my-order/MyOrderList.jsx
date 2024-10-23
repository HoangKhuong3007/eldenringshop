import React from "react";
import { useDispatch } from "react-redux";
// import styles
import "../../../styles/components/public/my-order/my-order.css";
// import slices
import {
  toggleAnimateMyOrderModalOn,
  togglePreviewMyOrderModalOn,
} from "../../../redux/slices/modal/modal";
export const MyOrderList = () => {
  // dispatch
  const dispatch = useDispatch();
  // handle func
  const handleToggleMyOrderDetailModalOn = () => {
    dispatch(togglePreviewMyOrderModalOn());
    setTimeout(() => {
      dispatch(toggleAnimateMyOrderModalOn());
    }, 1);
  };
  return (
    <div className="customer-order-list">
      <div className="order-item" onClick={handleToggleMyOrderDetailModalOn}>
        <div className="item1">
          <div className="time">
            <i className="bx bx-time"></i>
            <div>
              <p>Processing</p>
              <strong>01 Sep 2023</strong>
            </div>
          </div>
          <i className="bx bx-chevron-right"></i>
        </div>
        <div className="item2">
          <div className="item">
            <i className="bx bxl-paypal"></i>
            <div>
              <p>Payment ID</p>
              <strong>PAYID-188361773</strong>
            </div>
          </div>
          <div className="item">
            <i className="bx bx-dollar-circle"></i>
            <div>
              <p>Invoice Amount</p>
              <strong>$50.00</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
