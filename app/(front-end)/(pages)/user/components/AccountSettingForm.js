// import custom components
import ChangePasswordForm from "components/form/ChangePasswordForm";
import DeleteAccountButton from "components/form/DeleteAccountButton";
import AccountDetailsForm from "components/form/AccountDetailsForm";

const AccountSettingForm = () => {
  return (
    <div className="py-6 p-md-6 p-lg-10">
      <AccountDetailsForm />
      <hr className="my-10" />
      <ChangePasswordForm />
      <hr className="my-10" />
      <DeleteAccountButton />
    </div>
  );
};

export default AccountSettingForm;
