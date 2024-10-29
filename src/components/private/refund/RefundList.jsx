import React from "react";
import { useDispatch } from "react-redux";
// import styles
import "../../../styles/components/private/refund/refund.css";
// import slices
import {
  toggleAnimateRefundModalOn,
  togglePreviewRefundModalOn,
} from "../../../redux/slices/modal/modal";
export const RefundList = () => {
  // dispatch
  const dispatch = useDispatch();
  // handle func
  const handleToggleRefundDetailModalOn = () => {
    dispatch(togglePreviewRefundModalOn());
    setTimeout(() => {
      dispatch(toggleAnimateRefundModalOn());
    }, 1);
  };
  return (
    <div className="refund-list-container">
      <div className="utils">
        <div className="item-container">
          <div className="item">
            <div>
              <p>Total invoice refunded</p>
              <i className="bx bx-x-circle"></i>
            </div>
            <strong>4 invoices</strong>
            <small>from 10 invoices</small>
          </div>
        </div>
        <div className="item-container">
          <div className="item">
            <div>
              <p>Wating request</p>
              <i className="bx bx-error-alt"></i>
            </div>
            <strong>5 Invoices</strong>
            <small>wating for confirm</small>
          </div>
        </div>
      </div>
      <table className="refund-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PAYID-a4habb8akjqwa</td>
            <td>
              <img src="" alt="" />
            </td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </td>
            <td className="pending-refund">
              <i className="bx bxs-circle"></i>
              <p>Pending</p>
            </td>
            <td>
              <i
                className="bx bx-info-circle"
                onClick={handleToggleRefundDetailModalOn}
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
