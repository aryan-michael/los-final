import { Container } from "react-bootstrap";
import "./SanctionLetter.css"

const SanctionLetter = () => {
	return(
		<>
			<Container className="mt-3 mb-3" fluid="sm">
		
				
					<body>
					  <div className="sanction-letter">
						<h6>Date: DD/MM/YYYY</h6>
						
						<div className="p-3"></div>
						
						<h6>To Mr. X,</h6>
						
						<div className="p-3"></div>
						
						<p>Thank you for choosing <b>ADLOS Private Limited</b>. Based on your application and the information
						provided therein, we are pleased to extend an offer to you for a loan as per the preliminary
						terms and conditions mentioned below:</p>
						
						<div className="p-2"></div>
						
						<table className="main-1">
							<tr>
								<td>Application No.:</td>
								<td>XXXXXXXXXXXXXXX</td>
							</tr>
							<tr>
								<td>Sanctioned Date:</td>
								<td>DD/MM/YYYY</td>
							</tr>
							<tr>
								<td>Applicant's Name:</td>
								<td>Mr. X</td>
							</tr>
							<tr>
								<td>Mobile Number:</td>
								<td>XXXXXXXXXXX</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>abc@gmail.com</td>
							</tr>
						</table>
						<div class="HTMLContainer"></div>
						<h2>Edit content directly within your software</h2>
						<p>If you're not currently able to create and edit content with the convenience of a rich text editor directly within your software, ask your software provider about the possibility of upgrading the rich text editor component.</p>
						<p>TinyMCE is the world's most popular rich text editor, trusted by millions of developers and used to power 100M+ products worldwide.</p>
						<p>Next time you're choosing the best software for content creation, choose a platform with a powerful and trusted rich text editor already built in.</p>
						<p>Read more in the related article.</p>
						<br />
					  </div>
					</body>
					
	
			</Container>
		</>
	);
}

export default SanctionLetter




