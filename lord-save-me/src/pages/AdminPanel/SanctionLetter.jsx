import { Container } from "react-bootstrap";
import "./SanctionLetter.css";
import logo from "../../images/ad los.png";

const SanctionLetter = () => {
	return (
		<>
			<Container className="mt-3 mb-3" fluid="sm">


				<div className="sanction-letter">
					<div className="header"><h2><b>Loan Sanction Letter</b></h2></div>

					<div className="p-2"></div>

					<table className="main-0">
						<tbody>
							<tr width="20%">
								<td className="main0-left">
									<tr>
										<td><h5>Date: DD/MM/YYYY</h5></td>

									</tr>
									<div className="p-5"></div>
									<tr>
										<td><h5>To Mr. X,</h5></td>
									</tr>
								</td>
								<td className="main0-right"><img src={logo} alt="company logo" /></td>
							</tr>
						</tbody>
					</table>



					<div className="p-2"></div>

					<p>Thank you for choosing <b><em>ADLOS Private Limited</em></b>	. Based on your application and the information
						provided therein, we are pleased to extend an offer to you for a loan as per the preliminary
						terms and conditions mentioned below:</p>

					<div className="p-2"></div>

					<table className="main-1">
						<tbody>
							<tr>
								<td width="35%">Application No.:</td>
								<td><b>XXXXXXXXXXXXXXX</b></td>
							</tr>
							<tr>
								<td>Sanctioned Date:</td>
								<td><b>DD/MM/YYYY</b></td>
							</tr>
							<tr>
								<td>Applicant's Name:</td>
								<td><b>Mr. X</b></td>
							</tr>
							<tr>
								<td>Mobile Number:</td>
								<td><b>XXXXXXXXXXX</b></td>
							</tr>
							<tr>
								<td>Email:</td>
								<td><b>abc@gmail.com</b></td>
							</tr>
						</tbody>
					</table>

					<div className="p-2"></div>

					<table className="main-2">
						<tbody>
							<tr>
								<td width="30%">Loan Type:</td>
								<td><b>Business</b></td>
							</tr>
							<tr>
								<td>Loan Amount Sanctioned:</td>
								<td><b>DD/MM/YYYY</b></td>
							</tr>
							<tr>
								<td>Floating Interest Rate:</td>
								<td><b>X% - Rate applicable at the time of disbursement</b></td>
							</tr>
							<tr>
								<td>Loan Tenor (in years)</td>
								<td><b>X years</b></td>
							</tr>
							<tr>
								<td>Total Processing Charges:</td>
								<td><b>Upto X% of the total loan amount</b></td>
							</tr>
							<tr>
								<td>Origination Fee (inclusive of GST):</td>
								<td><b>XXXX</b></td>
							</tr>
							<tr>
								<td>Sanction Letter Validity:</td>
								<td><b>X months for date of sanction</b></td>
							</tr>
							<tr>
								<td>EMI (INR):</td>
								<td><b>XXXXX</b></td>
							</tr>
						</tbody>
					</table>

					<div className="p-2"></div>

					<h6>Additional conditions to comply to prior to loan disbursal:</h6>
					<p> <b>1.</b> Legal vetting and search to be conducted.<br />
						<b>2.</b> NOC and offered collateral.<br />
						<b>3.</b> Confirmation form, official ID and copy of ID.</p>
				</div>

			</Container>
		</>
	);
}

export default SanctionLetter




