export interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    image: string;
    experience?: string;
    description?: string;
    details?: string;
    status?: string;
}
import Narendra from "../../../assets/Core Team Photos/Adv. N D Patel.jpg"
import AdvocateDhrutiTrivedi from "../../../assets/Core Team Photos/Advocate Dhruti Trivedi.jpg"
import CAAkshayDodiya from "../../../assets/Core Team Photos/CA Akshay Dodiya.jpg"
import CAArchitSeth from "../../../assets/Core Team Photos/CA Archit Seth.jpg"
import CAArjunAkruwala from "../../../assets/Core Team Photos/CA Arjun Akruwala.jpg"
import CAAshaSindhi from "../../../assets/Core Team Photos/CA Asha Sindhi.jpg"
import CAAsmaShaikh from "../../../assets/Core Team Photos/CA Asma Shaikh.jpg"
import CABhavikShah from "../../../assets/Core Team Photos/CA Bhavik Shah.jpg"
import CAHarshParikh from "../../../assets/Core Team Photos/CA Harsh Parikh.jpg"
import CAKamleshShah from "../../../assets/Core Team Photos/CA Kamlesh Shah.jpg"
import CAMananShah from "../../../assets/Core Team Photos/CA Manan Shah.jpg"
import CAMukeshDholakiya from "../../../assets/Core Team Photos/CA Mukesh Dholakiya.jpg"
import CANikunjDevpura from "../../../assets/Core Team Photos/CA Nikunj Devpura.jpg"
import CANitiPandya from "../../../assets/Core Team Photos/CA Niti Pandya.jpg"
import CAPadmanabhShah from "../../../assets/Core Team Photos/CA Padmanabh Shah.jpg"
import CAParagShah from "../../../assets/Core Team Photos/CA Parag Shah.jpg"
import CAPriyankaShah from "../../../assets/Core Team Photos/CA Priyanka Shah.jpg"
import CARujutaMunshi from "../../../assets/Core Team Photos/CA Rujuta Munshi.jpg"
import CAshwetangPujara from "../../../assets/Core Team Photos/Hariprasad.jpeg"
import CASiddharthPatel from "../../../assets/Core Team Photos/CA Siddharth Patel.jpg"
import CASudhaGupta from "../../../assets/Core Team Photos/CA Sudha Gupta ---.jpg"
import CATanupriyaPatel from "../../../assets/Core Team Photos/CA Tanupriya Patel.jpg"
import CAZankrutiMehta from "../../../assets/Core Team Photos/Zankruti Mehta.png"
import CSShambhuBhikhadia from "../../../assets/Core Team Photos/CS Shambhu Bhikhadia.jpg"
import AnilKumarSeth from "../../../assets/Core Team Photos/Anil Kumar Seth.png"
import Priteshdudani from "../../../assets/Core Team Photos/Pritesh dudani.png"
import Ullas from "../../../assets/Core Team Photos/ullash.png"


export const TEAM: TeamMember[] = [
    {
        id: 1,
        name: "Ullas G Shah",
        role: "B.Com, FCA, CPA",
        department: "Tax",
        image: Ullas,
        experience: "28+ years",
        details: undefined,
        status: "Open",
    },
    {
        id: 2,
        name: "Narendra D Patel",
        role: "B.Com, LLB",
        department: "Legal",
        image: Narendra,
        experience: "44+ years",
        details: undefined,
        status: "Open",
    },
    {
        id: 3,
        name: "Shambhu J Bhikadia",
        role: "B.Com, LLB, CS",
        department: "Legal",
        image: CSShambhuBhikhadia,
        experience: "48+ years",
        details: undefined,
        status: "Open",
    },
    {
        id: 4,
        name: "Kamlesh H Shah",
        role: "B.Com, CA, DISA",
        department: "Audit",
        image: CAKamleshShah,
        experience: "42+ years",
        details: "CA Kamlesh Shah, a distinguished member of the profession since qualifying in 1985, is a DISA-certified professional with over four decades of extensive post-qualification experience. Associated with the firm since 1995, he stands as a pillar and backbone of the firm’s audit and advisory practice.\n\n He has led numerous statutory and tax audits across a wide spectrum of corporate and non-corporate clients, bringing depth, precision, and strategic oversight to every engagement. His expertise spans transaction advisory, special audits under Section 142(2A) of the Income Tax Act, and resolution of complex accounting and regulatory matters.\n\nWidely regarded as the go-to person for technical challenges in audit, he combines deep technical acumen with practical insight to deliver effective solutions. Beyond his professional contributions, he is a respected mentor, guiding young Chartered Accountants and serving as a stepping stone in shaping their careers.\n\nRespected for his sound judgement, integrity, and solution-oriented approach, CA Kamlesh Shah continues to play a defining role in upholding the firm’s standards of excellence and professional commitment.",
        status: "Open",
    },
    {
        id: 5,
        name: "Anil Kumar Seth",
        role: "B.Com, FCA",
        department: "Audit",
        image: AnilKumarSeth,
        experience: "46+ years",
        details: "A Chartered Accountant since 1985, he brings over four decades of rich and diverse experience across auditing and taxation. Widely regarded as a key personnel of the firm, his deep practical insights form the backbone of several critical engagements.\n\nHe has led a wide spectrum of assignments, including statutory and internal audits, tax matters, and special audits under Section 142(2A) of the Income Tax Act. Known as the go-to person for peers, he plays a key role in guiding teams, resolving audit matters and delivering well-rounded, strategic solutions to clients. \n\nPrior to his association with the firm, he held senior leadership roles across reputed organizations, contributing significantly to financial governance, compliance, and business expansion initiatives.\n\nBeyond his professional excellence, he is known as the most fun-loving presence within the team bringing energy, warmth, and a sense of camaraderie that truly defines the firm’s culture.",
        status: "Open",
    },
    {
        id: 6,
        name: "Vijay Ranjan",
        role: "IRS (Retd)",
        department: "Legal",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/Untitled-1_06-150x150.png",
        details: undefined,
        status: "Open",
    },
    {
        id: 7,
        name: "Mukesh Dholakiya",
        role: "CA",
        department: "Tax",
        image: CAMukeshDholakiya,
        details: "CA Mukesh Dholakiya is a Chartered Accountant with close to two decades of post-qualification experience in the domain of Direct Taxation.\n\nQualified as a member of the Institute of Chartered Accountants of India since 2006, he is presently associated with G.K. Choksi & Co., Chartered Accountants, as President – Direct Taxation.\n\nHis core practice encompasses complex areas of income tax law, including Search and Seizure proceedings, Block Assessments, Reassessment proceedings, Charitable Trust Taxation, and advisory on intricate direct tax matters for corporate groups, charitable institutions, and high-net-worth individuals.\n\nHe has co-authored a publication on the law of Search and Seizure and Settlement of Cases, published by the Chartered Accountants Association, Ahmedabad.\n\nHe regularly contributes professional articles on contemporary direct tax issues to leading platforms including Taxmann and Taxsutra.\n\nHis practice is defined by meticulous statutory analysis, thorough preparation, and an unwavering commitment to professional excellence.",
        status: "Closed"
    },
    {
        id: 8,
        name: "Padmanabh Shah",
        role: "M.Com, CA",
        department: "Tax",
        image: CAPadmanabhShah,
        details: undefined,
        status: "Open"
    },
    {
        id: 9,
        name: "Siddharth Patel",
        role: "CA",
        department: "Audit",
        image: CASiddharthPatel,
        details: "Associated with the firm since 2008, he brings over 18 years of experience in assurance services across BFSI, cement, manufacturing, real estate, power, airports, and healthcare.\n\nHis experience includes statutory audits across a wide spectrum of entities, such as listed companies, PSUs, closely held public companies, private limited companies, LLPs, and Section 8 companies, in addition to transaction advisory, internal audits, tax audits, forensic audits, and Special Audits under Section 142(2A) of the Income-tax Act, 1961.\n\nHe possesses strong technical expertise in Ind AS and financial reporting, complemented by robust IT capabilities and effective stakeholder engagement.\n\nHe has authored several professional articles on Ind AS, tax audits, and accounting advisory matters, and has led the implementation of technology-driven advancements within the assurance practice.\n\nRecognised for decisive leadership and disciplined execution, he consistently delivers technically rigorous and commercially pragmatic outcomes within demanding timelines.",
        status: "Closed"
    },
    {
        id: 10,
        name: "Manan H Shah",
        role: "B.Com, CA",
        department: "Tax",
        image: CAMananShah,
        details: undefined,
        status: "Open"
    },
    {
        id: 11,
        name: "Shwetang Pujara",
        role: "B. Com., LL. B., FCA, DISA, PGDBM [Fin.]",
        department: "Audit",
        image: CAshwetangPujara,
        details: undefined,
        status: "Open"
    },
    {
        id: 12,
        name: "Dhruti Trivedi",
        role: "B.Com, LLB",
        department: "Legal",
        image: AdvocateDhrutiTrivedi,
        details: "As part of G.K. Choksi & Co.'s multidisciplinary professional services, the Para Legal Department offers integrated legal advisory and documentation support.\n\nThe department helps high-net-worth clients, corporations, developers, and institutions navigate complicated legal and regulatory frameworks pertaining to real estate issues, corporate transactions, and statutory compliance.\n\nThe team focuses on contract structuring, property due diligence, Trusts, regulatory liaison, and risk mitigation under the direction of Advocate Ms. Dhruti A. Trivedi, who brings more than 26 years of experience in legal advisory and dispute resolution.\n\nTo guarantee legally sound documentation, smooth transaction execution, and efficient legal issue resolution, the department collaborates closely with clients and regulatory bodies",
        status: "Closed"
    },
    {
        id: 13,
        name: "Parag K Shah",
        role: "CA",
        department: "Tax",
        image: CAParagShah,
        details: "Heading FEMA (Foreign Exchange Management Act) and GST (Goods and Services Tax) Departments\n\nIs a Chartered Accountant, Certified Public Accountant of the USA and has obtained an MBA degree from the UK\n\nAssociated with G. K. Choksi & Co. since 2009\n\nMore than 16 years of experience in the fields of FEMA, Foreign Contribution Regulation Act and GST (earlier service tax)\n\nGiven several presentations at various bodies including the ICAI\n\nContributed articles in many publications such as Ahmedabad Chartered Accountants Journal\n\nOne of the articles published in the Ahmedabad Chartered Accountants Journal was adjudged as \"Best Article\" in the category of \"Corporate & Other Laws\"",
        status: "Closed"
    },
    {
        id: 14,
        name: "Arjun Akruwala",
        role: "CA",
        department: "Tax",
        image: CAArjunAkruwala,
        details: undefined,
        status: "Open"
    },
    {
        id: 15,
        name: "Bhavik Shah",
        role: "CA",
        department: "Tax",
        image: CABhavikShah,
        details: undefined,
        status: "Open"
    },
    {
        id: 16,
        name: "Akshay Dodiya",
        role: "CA",
        department: "Tax",
        image: CAAkshayDodiya,
        details: "Akshay Dodiya is a Chartered Accountant, Company Secretary and Registered Valuer with 12 years of experience and experience across domains related to all three professions (CA, CS and Valuer).\n\nHe looks into Merger and Acquisition, Restructuring and Transactional advisory and execution roles and over the years, has developed an edge for structure planning and execution with a taste for implementing new ideas.\n\nHe has previously worked with Tata and Arvind groups bringing industry exposure to advisory.",
        status: "Closed"
    },
    {
        id: 17,
        name: "Zankruti A Mehta",
        role: "CA",
        department: "Audit",
        image: CAZankrutiMehta,
        details: "CA Zankruti Mehta had joined firm as article assistant and since last 17 years she is employed with us and having substantial experience in audit and assurance.\n\nAn accomplished audit professional with strong expertise in conducting statutory audits across diverse industries like Real Estate, Chemicals, Jewellery etc, ensuring compliance with applicable financial reporting frameworks, regulatory requirements, and auditing standards.\n\nExperienced in planning and executing statutory audits of corporate and non-corporate entities, including verification of financial statements, evaluation of accounting policies, and assessment of internal financial controls.\n\nAdept at identifying potential risks, reviewing financial records, and ensuring that financial statements present a true and fair view in compliance with applicable regulatory requirements.\n\nDemonstrates strong analytical and problem-solving capabilities in examining financial data, verifying transactions, and evaluating compliance with accounting standards and statutory provisions.\n\nSkilled in coordinating with management, reviewing audit documentation, and providing constructive recommendations to strengthen financial reporting and governance practices.",
        status: "Closed"
    },
    {
        id: 18,
        name: "Asmaakhtar Shaikh",
        role: "CA",
        department: "Tax",
        image: CAAsmaShaikh,
        details: undefined,
        status: "Open"
    },
    {
        id: 19,
        name: "Tanupriya Patel",
        role: "CA",
        department: "Tax",
        image: CATanupriyaPatel,
        details: "CA Tanupriya Patel has been associated with GK Choksi & Co. since 2009 and is presently engaged in handling direct tax appellate matters. With extensive experience in tax litigation, she regularly deals with complex matters involving detailed factual analysis, interpretation of law, preparation of written submissions, and formulation of appellate strategy.\n\nHer practice primarily focuses on managing comprehensive litigation proceedings, including analysis of assessment orders, drafting of appeals and submissions, and assisting in representation in complex and high-value tax disputes. She has a strong command over legal drafting, enabling her to prepare clear, structured, and persuasive appellate submissions.\n\nOver the years, she has developed strong expertise in handling appellate matters including faceless hearing that require a blend of legal acumen, analytical ability, and practical understanding of tax controversy management.\n\nShe is known for her methodical approach, technical strength, calm and composed demeanour, patient handling of complex matters, and ability to deliver high-quality work within stringent timelines.",
        status: "Closed"
    },
    {
        id: 20,
        name: "Harsh Hemant Parikh",
        role: "CA",
        department: "Tax",
        image: CAHarshParikh,
        details: "Harsh Parikh is a Chartered Accountant at G. K. Choksi & Co., where his professional journey began as an intern in 2007 before officially joining as a qualified CA in 2012.\n\nHe brings extensive expertise in Direct Taxation, with a highly specialized focus on Corporate Tax and Search matters.\n\nOver the years, Harsh has developed a proven track record of skillfully navigating the intricacies of search and seizure cases, managing high-stakes situations with precision and strategic foresight.\n\nA proactive problem-solver, Harsh plays a pivotal role in handling complex litigation and compliance for diverse corporate structures.\n\nHis core competencies span advising clients on tax compliance and return filing, representing them before various authorities, briefing senior counsels, and assisting in strategic transaction structuring.\n\nBeyond his technical acumen, Harsh is known for his client-centric approach and for taking leadership initiatives.\n\nOutside of his demanding professional commitments, Harsh is an avid gamer and loves to listen music. This hobby not only offers a refreshing balance to the world of taxation but also keeps his strategic thinking, adaptability, and quick decision-making skills sharp",
        status: "Closed"
    },
    {
        id: 21,
        name: "Rujuta Munshi",
        role: "CA",
        department: "Tax",
        image: CARujutaMunshi,
        details: undefined,
        status: "Open"
    },
    {
        id: 22,
        name: "Niti Janakbhai Pandya",
        role: "CA",
        department: "Tax",
        image: CANitiPandya,
        details: undefined,
        status: "Open"
    },
    {
        id: 23,
        name: "Nikunj  Devpura",
        role: "CA",
        department: "Tax",
        image: CANikunjDevpura,
        details: undefined,
        status: "Open"
    },

    {
        id: 24,
        name: "Archit Sheth",
        role: "CA",
        department: "Tax",
        image: CAArchitSeth,
        details: "CA Archit Sheth has an extensive experience in direct tax advisory, litigation, and search-related proceedings under the Income Tax Act. He specialises in handling complex matters involving search and seizure, block assessments, unexplained assets, and high-value individual and corporate cases. His work involves strategic representation before tax authorities, drafting of submissions, and advisory on compliance. He has a keen interest in resolving intricate tax disputes through structured analysis and practical solutions.",
        status: "Closed"
    },
    {
        id: 25,
        name: "Sudha Gupta",
        role: "M.Com, MBA, CWA",
        department: "Tax",
        image: CASudhaGupta,
        details: undefined,
        status: "Open"
    },
    {
        id: 26,
        name: "Asha Sindhi",
        role: "CA",
        department: "Tax",
        image: CAAshaSindhi,
        details: undefined,
        status: "Open"
    },
    {
        id: 27,
        name: "Pritesh Dudani",
        role: "CA",
        department: "Audit",
        image: Priteshdudani,
        details: "Pritesh Dudani is a Chartered Accountant having 10 years of experience in the field of audit and assurance. He is an integral part of the firm’s Audit and Assurance Practice, bringing deep expertise in statutory audits, tax audits, and compliance for both corporate and non-corporate clients. His professional journey includes significant contributions to audits of listed entities and extensive involvement in IPO-related assignments.\n\nHe has successfully led audits across diverse industries such as Engineering, Procurement and Construction ('EPC'), automobile manufacturing, renewable energy, pharmaceuticals, and services, demonstrating versatility and sectoral knowledge. Prior to his current role, Pritesh gained valuable experience at BSR & Co LLP (an affiliate of KPMG), where he specialized in audit and assurance engagements and consistently delivered high-quality outcomes.",
        status: "Open"
    },
    {
        id: 28,
        name: "Priyanka Mehta",
        role: "CA",
        department: "Tax",
        image: CAPriyankaShah,
        details: undefined,
        status: "Open"
    },
];