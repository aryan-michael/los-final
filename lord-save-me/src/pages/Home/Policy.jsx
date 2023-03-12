import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import NavBar from "../../components/NavBar/NavBar";

const Policy = () => {
	return (
		<>
			<NavBar />
			<MDBAccordion initialActive={1}>
				<MDBAccordionItem collapseId={1}
					headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Policy #1</>}>
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
					moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
					Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
					shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
					proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
					aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				</MDBAccordionItem>
				<MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Policy #2</>}>
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
					moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
					Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
					shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
					proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
					aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				</MDBAccordionItem>
				<MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Policy #3</>}>
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
					moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
					Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
					shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
					proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
					aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				</MDBAccordionItem>
			</MDBAccordion>
		</>
	);
}

export default Policy






























/* LOAN ORIGINATION SYSTEM -> it is an application process during a
loan life cycle.

POLICIES

Every loan providing entity will have policies
1) CIBIL (Credit Information Bureau India Limited)
score -> Credit score of client

CIBIL Score is a 3-digit numeric summary of your
 credit history, rating and report, and ranges 
from 300 to 900. 
The closer your score is to 900, the better your
credit rating is.

eg. 700-900 will be accepted
	500-700 will be overrided
	below 500 will be rejected

2) Equifax  3) Highmark
they are companies like CIBIL approved by the RBI

3) Legal verification of documents.

4) TAT (Turnaround time)
for every aspect (application, loan verification,
property verification)

5) Does the client have any cheque bouncing
history?

6) Does the client have any existing loans?
(overdue in loans)

7) Nature of industry (is it risky?) 

STEP1 --> LEAD GENERATION

1) Basic Client details -> name, mobile, email
Address, PAN, loan amount
=> verification details
-> reject/hold or process

2) CIBIL verification

3) Eligibility -> Business, Govt employee,
Professional (priority)

4) Detail verification
KYC, Employer verificaton, income details, experience

5) Document verification
> pan verification
> kyc verification
> address verification
> employment verification
> income details and financial verification
> tax returns

6) CAM (credit analysis memorandum) approval
Approval from entity providing loan
> branch approval
> head office approval

7) Before Sanction letter
> LLC verifiaction in case of business loan
> property and land verification incase of
home loan
> education institute verification incase of 
education loan

8) Loan Sanction Letter
> term
> loan amount
> rate of interest
> processing fee for loan providing entity
> emi (GST) */










