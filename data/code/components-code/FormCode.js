export const FormOneCode = `
// import custom component
import RetailerEnquiryForm from "components/form/RetailerEnquiryForm";

const Page = () => {
  return <RetailerEnquiryForm />;
};

export default Page;
`.trim();

export const FormTwoCode = `
"use client";
// import custom component
import AccountDetailsForm from "components/form/AccountDetailsForm";
import ChangePasswordForm from "components/form/ChangePasswordForm";

const Page = () => {
  return (
    <div className="py-6 p-md-6 p-lg-10">
      <AccountDetailsForm />
      <hr className="my-10" />
      <ChangePasswordForm />
    </div>
  );
};

export default Page;
`.trim();

export const FormThreeCode = `
"use client";
// import custom component
import MobileSignUp from "components/form/MobileSignUp";

const Page = () => {
  return <MobileSignUp />;
};

export default Page;

`.trim();

export const FormFourCode = `
"use client";
// import custom component
import AddCategoryForm from "components/form/AddCategoryForm";

const Page = () => {
  return <AddCategoryForm />;
};

export default Page;

`.trim();
