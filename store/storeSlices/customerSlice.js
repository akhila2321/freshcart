import { createSlice } from "@reduxjs/toolkit";
import { customerDataWithAdditionalInfo } from "data/DashboardData";

// This slice is used to manage customer data in the Redux store.
const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customers: customerDataWithAdditionalInfo,
    selectedCustomer: customerDataWithAdditionalInfo[0] || null,
    isCreateAddressModalOpen: false,
    isCreatePaymentModalOpen: false,
  },
  reducers: {
    createCustomer: (state, action) => {
      // This action adds a new customer to the state.
      const newCustomer = action.payload;
      state.customers.push({
        ...newCustomer,
        addresses: [],
        payments: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    },
    updateCustomer: (state, action) => {
      // This action updates an existing customer in the state.
      const { id, ...updatedData } = action.payload;
      const index = state.customers.findIndex((customer) => customer.id === id);
      if (index !== -1) {
        state.customers[index] = {
          ...state.customers[index],
          ...updatedData,
          updated_at: new Date().toISOString(),
        };
      }
    },
    selectCustomer: (state, action) => {
      // This action sets the selected customer in the state.
      const customerId = action.payload;
      state.selectedCustomer =
        state.customers.find((customer) => customer.id === customerId) || null;
    },
    toggleCreateAddressModal: (state, action) => {
      // This action toggles the visibility of the create address modal.
      state.isCreateAddressModalOpen = action.payload;
    },
    toggleCreatePaymentModal: (state, action) => {
      // This action toggles the visibility of the create payment modal.
      state.isCreatePaymentModalOpen = action.payload;
    },
    addSelectedCustomerAddress: (state, action) => {
      const { id, address } = action.payload;

      const index = state.customers.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.customers[index].addresses.push(address);
        state.customers[index].updated_at = new Date().toISOString();

        // Also update selectedCustomer if it's the same one
        if (state.selectedCustomer && state.selectedCustomer.id === id) {
          state.selectedCustomer = {
            ...state.customers[index],
          };
        }
      }
    },
    addSelectedCustomerPayment: (state, action) => {
      const { id, address } = action.payload;

      const index = state.customers.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.customers[index].payments.push(address);
        state.customers[index].updated_at = new Date().toISOString();

        // Also update selectedCustomer if it's the same one
        if (state.selectedCustomer && state.selectedCustomer.id === id) {
          state.selectedCustomer = {
            ...state.customers[index],
          };
        }
      }
    },
    deleteCustomer: (state, action) => {
      const { id } = action.payload;
      state.customers = state.customers.filter((item) => item.id !== id);
    },
  },
});

// It initializes the state with customer data and provides an action to create a new customer.
export const {
  createCustomer,
  updateCustomer,
  selectCustomer,
  toggleCreateAddressModal,
  toggleCreatePaymentModal,
  addSelectedCustomerAddress,
  addSelectedCustomerPayment,
  deleteCustomer,
} = customerSlice.actions;

export const selectCustomers = (state) => state.customer.customers;

export const selectSelectedCustomer = (state) =>
  state.customer.selectedCustomer;

export default customerSlice;
