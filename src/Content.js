import theranautilis_cover from './assets/Project/theranautilis.png'
import theranautilis from './assets/Project/theranautilis1.png'
import theranautilis2 from './assets/Project/theranautilis2.png'
import theranautilis3 from './assets/Project/theranautilis3.png'
import theranautilis4 from './assets/Project/theranautilis4.png'
import theranautilis5 from './assets/Project/theranautilis5.png'
import theranautilis6 from './assets/Project/theranautilis6.png'
import theranautilis7 from './assets/Project/theranautilis7.png'
import Things_Education_cover from './assets/Project/Things-Education.png'
import Things_Education_1 from './assets/Project/Things_Education_1.png'
import Things_Education_2 from './assets/Project/Things_Education_2.png'
import Things_Education_3 from './assets/Project/Things_Education_3.png'
import Things_Education_4 from './assets/Project/Things_Education_4.png'
import Things_Education_5 from './assets/Project/Things_Education_5.png'
import Things_Education_6 from './assets/Project/Things_Education_6.png'
import humm_cover from './assets/Project/humm_cover.png'
import humm1 from './assets/Project/humm1.png'
import humm2 from './assets/Project/humm2.png'
import GMS_cover from './assets/Project/GMS_cover.png'
import Gms1 from './assets/Project/Gms1.png'
import Gms2 from './assets/Project/Gms2.png'
import petrol_erp_cover from './assets/Project/petrol_erp_cover.png'
import petrol_erp1 from './assets/Project/petrol_erp1.png'
import petrol_erp2 from './assets/Project/petrol_erp2.png'
import linnta_cover from './assets/Project/linnta_cover.png'
import linnta1 from './assets/Project/linnta1.png'
import linnta2 from './assets/Project/linnta2.png'
import invoice_ms_cover from './assets/Project/invoice_ms_cover.png'
import invoice1 from './assets/Project/invoice1.png'
import invoice2 from './assets/Project/invoice2.png'

const contentCard = [
    {
        id: 1,
        title: 'Theranautilis',
        image: `${theranautilis_cover}`,
        images: [theranautilis, theranautilis2, theranautilis3, theranautilis4, theranautilis5, theranautilis6, theranautilis7],
        details: 'Theranautilus, one of the first nanorobotics companies globally, wishes to translate the result of a decade of research and development in nanorobotics from laboratory to clinics. We are a hardware company specializing in instruments for fabricating nanorobots, safe deployment of nanorobots in living systems, and mechanisms to maneuver them to their target inside the body remotely.',
        features: [
            'Map Integrated Contact Us',
            'Blogs',
            'Our Services/Technology',
            'FAQS',
            'Enquiry Registration'
        ],
        tech: [
            'Tailwind CSS', 'React Js', 'Express Js', 'Mongo DB', 'AWS '
        ],
        live_link: 'https://theranautilus.com/'
    },
    {
        id: 2,
        title: 'Things Education',
        image: `${Things_Education_cover}`,
        images: [Things_Education_1, Things_Education_2, Things_Education_3, Things_Education_4, Things_Education_5, Things_Education_6],
        details: 'Things Education provides education strategies for teachers which enables them to teach more effectively in classrooms.',
        features: [
            'Login/ Register',
            'Individual profiles',
            'Multi language',
            'Community feature',
            'Comment on strategies'
        ],
        tech: [
            'Tailwind CSS', 'React Js', 'Express Js', 'Mongo DB', 'AWS '
        ],
        live_link: 'https://teps.school/'
    },
    {
        id: 3,
        title: 'Humm - SMM',
        image: `${humm_cover}`,
        images: [humm1, humm2],
        details: 'Humm provides a variety of services related to families. It provides an informative, guidance and full of support ecosystem centered around family planning and pregnancy which goes from Day 1 till childbirth and even after.It also helps upcoming parents to gain expertise from a board of experts which enables them to plan their future in a better way.',
        features: [
            'Explore Tab',
            'Community Section',
            'Ovulation Tracker',
            'Due Date Calculator',
            'Vaccination Tracker',
            'Board of Experts',
            'Sign Up for Newsletter',
            'Sign In and Registration Section',
        ],
        tech: [
            'Bootstrap CSS', 'React Js', 'Django', 'Postgresql', 'AWS '
        ],
        live_link: 'https://www.hummcare.com/'
    },
    {
        id: 4,
        title: 'Garage Management System',
        image: `${GMS_cover}`,
        images: [Gms1, Gms2],
        details: 'GMS provides to help car owner or driver to get a mechanic or garages near himself. Also garage owner can get book for car service.',
        features: [
            'Login',
            'Register',
            'Search garage using location',
            'Book garage',
            'After Successfully Complete Service, can review',
            'Search jobs',
            'Accept Booking',
            'See Reviews',
        ],
        tech: [
            'Bootstrap', 'Reactstrap', 'React Js', 'Redux', 'Laravel', 'Mysql', 'Vercel '
        ],
        live_link: 'https://garage-management-frontend.vercel.app/'
    },
    {
        id: 5,
        title: 'Invoice Management System',
        image: `${invoice_ms_cover}`,
        images: [invoice1, invoice2],
        details: 'GMS provides to help car owner or driver to get a mechanic or garages near himself. Also garage owner can get book for car service.',
        features: [
            'Make landlord & Proper',
            'Sell From with proper calculation',
            'Report for every month',
            'Make business',
            'Maintain business'
        ],
        tech: [
            'Daisy Ui', 'Tailwind CSS', 'React Js', 'Redux', 'Laravel', 'Mysql', 'Vercel '
        ],
        live_link: 'https://invoice-management-system-ruby.vercel.app/'
    },
    {
        id: 6,
        title: 'Petrol ERP',
        image: `${petrol_erp_cover}`,
        images: [petrol_erp1, petrol_erp2],
        details: 'PetrolERP is totally integrated with Accounts and Inventory, That means every entry entered by user automatically update the Account & Inventory as the case may be and same can be viewed form the Various MIS Report Options.We have done detailed study of the business process of the petrol pumps and have gone into the minute details to take care of all the requirements of a pump with Bangladeshi perspective.We feel that use of such software with help your business function more effectively, smoothly without duplication of work.',
        features: [
            'Meter Reading',
            'Stock Tracking',
            'Credit Sales',
            'Various Report',
            'Generate Statement',
            'Day Book',
            'Day Wise Loss/Gain',
            'Receivable & Payable Loan',
            'Purchase Invoice',
            'Bill Register',
            'Report',
        ],
        tech: [
            'Bootstrap', 'Reactstrap', 'React Js', 'Redux', 'Laravel', 'Mysql', 'Hostinger '
        ],
        live_link: 'https://petrolerp.com/'
    },
    {
        id: 7,
        title: 'Linnta Business Solution',
        image: `${linnta_cover}`,
        images: [linnta1, linnta2],
        details: 'Linnta Business Solution helps you to record all transactions such as Sale, Purchase, Payments, Expenses, Taxes etc.in an extremely simple manner.',
        features: [
            'Sale',
            'Purchase',
            'Expenses',
            'Payment Tracking',
            'Inventory Management',
            'Order Management & Quotation',
            'Taxes and Discounts',
            'Reports',
        ],
        tech: [
            'Material UI', 'Tailwind CSS', 'React Js', 'Redux', 'Laravel', 'Mysql', 'Hostinger '
        ],
        live_link: 'https://linnta.com/'
    },
]

export default contentCard