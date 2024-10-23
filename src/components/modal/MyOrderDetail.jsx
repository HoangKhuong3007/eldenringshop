import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
import {
  toggleAnimateMyOrderModalOff,
  togglePreviewMyOrderModalOff,
} from "../../redux/slices/modal/modal";
// import slices
export const MyOrderDetail = () => {
  // selector
  const isToggleMyOrderDetailModal = useSelector(
    (state) => state.modal.previewMyOrderModal.isToggleModal
  );
  const isToggleAnimateMyOrderDetailModal = useSelector(
    (state) => state.modal.animateMyOrderModal.isToggleModal
  );
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleToggleDetailMyOrderModalOff = () => {
    dispatch(toggleAnimateMyOrderModalOff());
    setTimeout(() => {
      dispatch(togglePreviewMyOrderModalOff());
    }, 800);
  };
  return (
    <div
      className={
        isToggleMyOrderDetailModal
          ? `detail-myorder-container`
          : `detail-myorder-close`
      }
    >
      <div
        className={
          isToggleAnimateMyOrderDetailModal
            ? `detail-myorder-modal open`
            : `detail-myorder-modal close`
        }
      >
        <div className="header">
          <strong>My Invoice #1234</strong>
          <i
            className="bx bx-x"
            onClick={handleToggleDetailMyOrderModalOff}
          ></i>
        </div>
        <div className="pending-status">
          <i className="bx bx-loader"></i>
          <p>
            Invoice is wating for admin confirm, you had paid on 15 Aug 2023
          </p>
        </div>
        <div className="myorder-infomation">
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
          <div className="myorder-cart">
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
          <button>I want to cancel order</button>
        </div>
      </div>
    </div>
  );
};
