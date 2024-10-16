import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
import {
  toggleAnimateOrderModalOff,
  togglePreviewOrderModalOff,
} from "../../redux/slices/modal/modal";
// import slices
export const OrderDetail = () => {
  // selector
  const isToggleOrderDetailModal = useSelector(
    (state) => state.modal.previewOrderModal.isToggleModal
  );
  const isToggleAnimateOrderDetailModal = useSelector(
    (state) => state.modal.animateOrderModal.isToggleModal
  );
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleTogglePreviewBlogModalOff = () => {
    dispatch(toggleAnimateOrderModalOff());
    setTimeout(() => {
      dispatch(togglePreviewOrderModalOff());
    }, 800);
  };
  return (
    <div
      className={
        isToggleOrderDetailModal
          ? `detail-order-container`
          : `detail-order-close`
      }
    >
      <div
        className={
          isToggleAnimateOrderDetailModal
            ? `detail-order-modal open`
            : `detail-order-modal close`
        }
      >
        <div className="header">
          <strong>Invoice #1234</strong>
          <i className="bx bx-x" onClick={handleTogglePreviewBlogModalOff}></i>
        </div>
        <div className="pending-status">
          <i className="bx bx-loader"></i>
          <p>
            Invoice is wating for admin confirm, customer had paid on 15 Aug
            2023
          </p>
        </div>
        <div className="order-infomation">
          <div className="list">
            <div className="two-items">
              <div className="item">
                <p>Name</p>
                <strong>Lon Khuong</strong>
              </div>
              <div className="item">
                <p>Email</p>
                <strong>lonkhuong2k4@gmail.com</strong>
              </div>
            </div>
            <div className="two-items">
              <div className="item">
                <p>Address</p>
                <strong>FPT HCM UNIVERSITY</strong>
              </div>
              <div className="item">
                <p>Phone</p>
                <strong>081237478</strong>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="two-items">
              <div className="item">
                <p>Date</p>
                <strong>15 Aug 2023</strong>
              </div>
              <div className="item">
                <p>Time</p>
                <strong>15:02:30</strong>
              </div>
            </div>
            <div className="two-items">
              <div className="item">
                <p>Payment ID</p>
                <strong>PAYID-ayh7af9cah9ahj</strong>
              </div>
              <div className="item">
                <p>Payment method</p>
                <strong>Paypal</strong>
              </div>
            </div>
          </div>
          <div className="order-cart">
            <label htmlFor="">Items</label>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Qty</th>
                  <th>Total amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lon Khuong Ring</td>
                  <td>$25.00</td>
                  <td>2</td>
                  <td>$50.00</td>
                </tr>
                <tr>
                  <td>Lon Khuong Ring</td>
                  <td>$25.00</td>
                  <td>2</td>
                  <td>$50.00</td>
                </tr>
                <tr>
                  <td>Lon Khuong Ring</td>
                  <td>$25.00</td>
                  <td>2</td>
                  <td>$50.00</td>
                </tr>
                <tr>
                  <td>Lon Khuong Ring</td>
                  <td>$25.00</td>
                  <td>2</td>
                  <td>$50.00</td>
                </tr>
                <tr>
                  <td>Lon Khuong Ring</td>
                  <td>$25.00</td>
                  <td>2</td>
                  <td>$50.00</td>
                </tr>
              </tbody>
              <div className="total">
                <strong>Total</strong>
                <strong>$500.00</strong>
              </div>
            </table>
          </div>
        </div>
        <div className="buttons">
          <button>
            <i className="bx bx-check"></i>
            <p>Mark as Success</p>
          </button>
          <button>
            <i className="bx bx-x"></i>
            <p>Mark as Unpaid</p>
          </button>
        </div>
      </div>
    </div>
  );
};
