import project1 from './assets/Project/project-11.jpg'
import project2 from './assets/Project/project-10.jpg'
import project3 from './assets/Project/project-9.jpg'
import project1d from './assets/Project/projects/web.app.jpg'
import project1d2 from './assets/Project/projects/web.app2.jpg'
import project1d3 from './assets/Project/projects/web.app3.jpg'


const contentCard = [
    {
        id: 1,
        title: 'Drone Peak',
        body: 'System That Can Monitor Larger Airspace to Identify a Single Drone or a Swarm of Drones. ',
        image: `${project1}`,
        link: '/detailo',
        projectImg: `${project1d}`,
        projectImg2: `${project1d2}`,
        projectImg3: `${project1d3}`,
        detail: "Users Can Sign up and Log in. Users can buy Drones, manage their orders, delete their orders, add reviews. Admin can add Product, delete Product, see all orders, manage orders, and can make an admin"
    },
    {
        id: 2,
        title: 'Dare to Dream',
        body: "Let's start your journey with us, your dream will come true.",
        image: `${project2}`,
        link: '/details',
        projectImg: `${project1d}`,
        projectImg2: `${project1d2}`,
        projectImg3: `${project1d3}`,
        detail: "All users can visit the home page.An User can Booked her/his interested Tourist Spot. User can see destination details, book destination, add a destination, see their orders, see all orders, and can add a destination."
    },
    {
        id: 3,
        title: 'Life Check',
        body: "Accidents happen, injuries occur and illnesses crop up, but you or your loved one won’t face them alone.",
        image: `${project3}`,
        link: '/detailt',
        projectImg: `${project1d}`,
        projectImg2: `${project1d2}`,
        projectImg3: `${project1d3}`,
        detail: "Authenticated users can book ambulances and beds for patients.User can purchase any service.Authenticated users can get information about services."
    }
]

export default contentCard