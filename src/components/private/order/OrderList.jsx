import React from "react";
import { useDispatch } from "react-redux";
// import styles
import "../../../styles/components/private/order/order.css";
// import slices
import {
  toggleAnimateOrderModalOn,
  togglePreviewOrderModalOn,
} from "../../../redux/slices/modal/modal";
export const OrderList = () => {
  // dispatch
  const dispatch = useDispatch();
  // handle func
  const handleToggleOrderDetailModalOn = () => {
    dispatch(togglePreviewOrderModalOn());
    setTimeout(() => {
      dispatch(toggleAnimateOrderModalOn());
    }, 1);
  };
  return (
    <div className="order-list-container">
      <div className="utils">
        <div className="item-container">
          <div className="item">
            <div>
              <p>Total invoice amount</p>
              <i className="bx bx-dollar"></i>
            </div>
            <strong>USD 2300.00</strong>
            <small>from 10 invoices</small>
          </div>
        </div>
        <div className="item-container">
          <div className="item">
            <div>
              <p>Pending invoices</p>
              <i className="bx bx-calendar-x"></i>
            </div>
            <strong>9 Invoices</strong>
            <small>wating for confirm</small>
          </div>
        </div>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Invoice Amount</th>
            <th>Create Date</th>
            <th>Payment method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PAYID-a4habb8akjqwa</td>
            <td>
              <div>
                <strong>Lon Khuong Elden Ring</strong>
                <p>hoangkhuong2k4@gmail.com</p>
              </div>
            </td>
            <td>$150.00</td>
            <td>18 Aug 2023</td>
            <td>Paypal</td>
            <td className="pending-order">
              <i className="bx bxs-circle"></i>
              <p>Pending</p>
            </td>
            <td>
              <i
                className="bx bx-info-circle"
                onClick={handleToggleOrderDetailModalOn}
              ></i>
            </td>
          </tr>
          <tr>
            <td>PAYID-a4habb8akjqwa</td>
            <td>
              <div>
                <strong>Lon Khuong Elden Ring</strong>
                <p>hoangkhuong2k4@gmail.com</p>
              </div>
            </td>
            <td>$150.00</td>
            <td>18 Aug 2023</td>
            <td>Paypal</td>
            <td className="success-order">
              <i className="bx bxs-circle"></i>
              <p>Success</p>
            </td>
            <td>
              <i
                className="bx bx-info-circle"
                onClick={handleToggleOrderDetailModalOn}
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
