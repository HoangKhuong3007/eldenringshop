import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
import {
  toggleAnimateRefundModalOff,
  togglePreviewRefundModalOff,
} from "../../redux/slices/modal/modal";
// import slices
export const RefundDetail = () => {
  // selector
  const isToggleRefundDetailModal = useSelector(
    (state) => state.modal.previewRefundModal.isToggleModal
  );
  const isToggleAnimateRefundDetailModal = useSelector(
    (state) => state.modal.animateRefundModal.isToggleModal
  );
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleToggleDetailRefundModalOff = () => {
    dispatch(toggleAnimateRefundModalOff());
    setTimeout(() => {
      dispatch(togglePreviewRefundModalOff());
    }, 800);
  };
  return (
    <div
      className={
        isToggleRefundDetailModal
          ? `detail-refund-container`
          : `detail-refund-close`
      }
    >
      <div
        className={
          isToggleAnimateRefundDetailModal
            ? `detail-refund-modal open`
            : `detail-refund-modal close`
        }
      >
        <div className="header">
          <strong>Refund Request #1234</strong>
          <i className="bx bx-x" onClick={handleToggleDetailRefundModalOff}></i>
        </div>
        <div className="pending-status">
          <i className="bx bx-loader"></i>
          <p>Refund request is wating for admin confirm</p>
        </div>
        <div className="refund-info">
          <img src="" alt="" />
          <div className="reason">
            <strong>Reason</strong>
            <p>
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
            </p>
          </div>
        </div>
        <div className="buttons">
          <button>
            <i className="bx bx-check"></i>
            <p>Mark as Approved</p>
          </button>
          <button>
            <i className="bx bx-x"></i>
            <p>Mark as Rejected</p>
          </button>
        </div>
      </div>
    </div>
  );
};
