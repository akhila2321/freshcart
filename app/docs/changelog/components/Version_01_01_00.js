// import node module libraries
import Link from "next/link";
import { Col, Row } from 'react-bootstrap';

const Version_01_01_00 = () => {
	const NewReactFiles = [
		'/app/(dashboard)/dashboard/blog/*.*',
		'/app/(dashboard)/dashboard/components/CustomerAdditionalInfo.js',
		'/app/(dashboard)/dashboard/components/CustomerAddressTable.js',
		'/app/(dashboard)/dashboard/components/CustomerDetails.js',
		'/app/(dashboard)/dashboard/components/CustomerDetailsOffcanvas.js',
		'/app/(dashboard)/dashboard/components/CustomerPaymentHistory.js',
		'/app/(dashboard)/dashboard/customers/create-customer/*.*',
		'/app/(dashboard)/dashboard/customers/edit-customer/*.*',
		'/components/common/ClientWrapper.js',
		'/components/common/DatePicker.js',
		'/components/common/TagsInputs.js',
		'/components/form/CreateCustomerForm.js',
		'/components/form/CreateNewBlogForm.js',
		'/components/form/UpdateCustomerForm.js',
		'/components/modal/CreateAddressModal.js',
		'/components/modal/CreatePaymentModal.js',
		'/hooks/useCustomer.js',
		'/hooks/useDebounce.js',
		'/store/storeSlices/customerSlice.js'
	]

	const NewDataFiles = [
		'/src/BlogPostData.js',
		'/src/BlogDetailsData.js'
	]

	const UpdatedReactFiles = [
		'/app/(dashboard)/dashboard/components/CustomerTable.js',
		'/app/(dashboard)/dashboard/customers/Index.js',
		'/app/(dashboard)/layout.js',
		'/app/docs/changelog/*.*',
		'/app/layout.js',
		'/components/common/ImageDropzone.js',
		'/components/dashboard/common/DashboardDataTable.js',
		'/components/dashboard/common/DashboardHeading.js',
		'/components/dashboard/navbar/DashboardNavigation.js',
		'/helper/utils.js',
		'/routes/DashboardRoutes.js',
		'/store/store.js',
	]

	const UpdatedDataFiles = [
		'/data/DashboardData.js',
	]

	return (

		<Row>
			<Col md={12} xs={12}>
				<Row className="docs-example mt-7">
					<Col lg={5} xs={12}>
						<div id="initial">
							<h4 className="mb-3">
								<code>v1.1.0</code>- Jun. 27, 2025
							</h4>
						</div>
					</Col>
					<Col md={7} xs={12}>
						<div id="v100">

							<div>
								<h4 className="mb-1 fw-semi-bold">FreshCart NextJS Update</h4>
								<ul>
									<li>Added <code>react-slugify, @yaireo/tagify, redux-persist</code> packages</li>
									<li>Added new pages<br />
										<Link target="_blank" href="/dashboard/blog/grid">Blog Grid</Link><br />
										<Link target="_blank" href="/dashboard/blog/list">Blog List</Link><br />
										<Link target="_blank" href="/dashboard/blog/new-post">New Blog Post</Link><br />
										<Link target="_blank" href="/dashboard/customers/create-customer">Add New Customer</Link><br />
										<Link target="_blank" href="/dashboard/customers/edit-customer">Edit Customer</Link><br />
									</li>
									<li>Required packages are updated.</li>
									<li>Fixed a few bugs</li>
								</ul>
							</div>

							<div className="mb-3">
								<h4>New Components / Layout / Hook / React Files:</h4>
								<ul>
									{NewReactFiles.map((item, index) => {
										return (<li key={index}><code>{item}</code></li>)
									})}
								</ul>
							</div>




							<div className="mb-3">
								<h4>New Data Files:</h4>
								<ul>
									{NewDataFiles.map((item, index) => {
										return (<li key={index}><code>{item}</code></li>)
									})}
								</ul>
							</div>

							<div className="mb-3">
								<h4>Updated Components / Layout / Hook / React Files:</h4>
								<ul>
									{UpdatedReactFiles.map((item, index) => {
										return (<li key={index}><code>{item}</code></li>)
									})}
								</ul>
							</div>


							<div className="mb-3">
								<h4>Updated Data Files:</h4>
								<ul>
									{UpdatedDataFiles.map((item, index) => {
										return (<li key={index}><code>{item}</code></li>)
									})}
								</ul>
							</div>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Version_01_01_00;
