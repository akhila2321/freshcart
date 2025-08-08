// import node module libraries
import { Col, Row } from 'react-bootstrap';

const Version_01_00_00 = () => {
	return (
		<Row>
			<Col md={12} xs={12}>
				<Row className="docs-example mt-7">
					<Col lg={5} xs={12}>
						<div id="initial">
							<h4 className="mb-3">
								<code>v1.0.0</code>- Sep. 21, 2024
							</h4>
						</div>
					</Col>
					<Col md={7} xs={12}>
						<div id="v100">
							<h3 className="mb-0">Initial Release FreshCart Next.js</h3>
							<p>FreshCart theme Next.js version.</p>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Version_01_00_00;
