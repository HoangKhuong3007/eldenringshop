import React from "react";
import { useSelector } from "react-redux";
// import styles
import "../../styles/public/my-order/my-order.css";
// import components
import { SettingNav } from "../../components/navbar/SettingNav";
import { MyOrderList } from "../../components/public/my-order/MyOrderList";
import { MyOrderDetail } from "../../components/modal/MyOrderDetail";
import { CancelOrderModal } from "../../components/modal/CancelOrderModal";
export const CustomerOrderPage = () => {
  // selector
  const isToggleCancelOrderModal = useSelector(
    (state) => state.modal.cancelOrderModal.isToggleModal
  );
  return (
    <div className="customer-order-container">
      {isToggleCancelOrderModal && <CancelOrderModal />}
      <MyOrderDetail />
      <SettingNav />
      <div className="customer-order">
        <div className="header">
          <strong>Order History</strong>
        </div>
        <MyOrderList />
      </div>
    </div>
  );
};
