"use client";
//import node module libraries
import { useDispatch, useSelector } from "react-redux";

// import required redux actions
import {
  createCustomer,
  updateCustomer,
  selectCustomers,
  selectSelectedCustomer,
  selectCustomer,
  toggleCreateAddressModal,
  toggleCreatePaymentModal,
  addSelectedCustomerAddress,
  addSelectedCustomerPayment,
  deleteCustomer,
} from "store/storeSlices/customerSlice";

// This hook is used to manage customer data in the Redux store.
export function useCustomer() {
  const dispatch = useDispatch();

  // Selects the customers from the Redux store.
  const savedCustomer = useSelector(selectCustomers);

  const customers = [...savedCustomer].sort((a, b) => {
    // Sort customers by created_at date in descending order
    return new Date(b.created_at) - new Date(a.created_at);
  });

  //Selected customer
  const selectedCustomer = useSelector(selectSelectedCustomer);

  const isCreateAddressModalOpen = useSelector(
    (state) => state.customer.isCreateAddressModalOpen
  );

  const isCreatePaymentModalOpen = useSelector(
    (state) => state.customer.isCreatePaymentModalOpen
  );

  const handleCreateCustomer = (customer) => {
    dispatch(createCustomer(customer));
  };

  const handleUpdateCustomer = (customer) => {
    dispatch(updateCustomer(customer));
  };

  const handleSelectCustomer = (customerId) => {
    dispatch(selectCustomer(customerId));
  };

  // Handlers for modals
  const handleCreateAddressModal = (isOpen) => {
    dispatch(toggleCreateAddressModal(isOpen));
  };

  const handleCreatePaymentModal = (isOpen) => {
    dispatch(toggleCreatePaymentModal(isOpen));
  };

  const createNewAddress = (id, address) => {
    dispatch(addSelectedCustomerAddress({ id: id, address: address }));
  };

  const createNewPayment = (id, address) => {
    dispatch(addSelectedCustomerPayment({ id: id, address: address }));
  };

  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomer({ id: id }));
  };

  return {
    customers,
    selectedCustomer,
    isCreateAddressModalOpen,
    isCreatePaymentModalOpen,
    handleCreateAddressModal,
    handleCreatePaymentModal,
    handleCreateCustomer,
    handleUpdateCustomer,
    handleSelectCustomer,
    createNewAddress,
    createNewPayment,
    handleDeleteCustomer,
  };
}
