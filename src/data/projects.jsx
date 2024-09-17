const fun_with_food = new URL('../assets/fun_with_food.png', import.meta.url).href
const employee_tracker = new URL('../assets/employee_tracker.png', import.meta.url).href
const freelance_platform = new URL('../assets/freelance_platform.png', import.meta.url).href

export const projects = [
    {
        id: 1,
        title: "Fun With Food",
        description:
            <>
                A web application for users to be able to create their own dish list based on selected
                options and save it. A page containning a list of all dishes is also provided to the user.
                <br></br>
                <br></br>
                Once the user is signed in, they are redirected to the homepage, where they can select search \\
                parameters for dishes they might want to make. After clicking the "generate" button, a random
                dish with those parameters will appear on the right panel. The user can either click "save"
                to save that dish to their account, or they can check new search queries and generate a new dish.
                <br></br>
                <br></br>
                To see a list of all saved dishes, the user can click on the center navigation icon. They will
                be redirected to a new page outlining each dish, with a dish name, dish description, dish image,
                and which allergens the dish contains. The user can click on the title of each dish to be redirected
                to the recipe.
                <br></br>
                <ul>
                    <li>Sequelize</li>
                    <li>Connect Session Store</li>
                    <li>bcrypt</li>
                    <li>dotenv</li>
                    <li>Express JS</li>
                    <li>Express Handlebars</li>
                    <li>Express Session</li>
                    <li>MySQL2</li>
                </ul>
            </>,
        img: fun_with_food,
        link: "https://github.com/zaingova/Fun-with-food"
    },
    {
        id: 2,
        title: "SQL Employee Tracker",
        description: <>
            A web application for users to be able to create their own dish list based on selected
            options and save it. A page containning a list of all dishes is also provided to the user.
            Below are a list of the NPM packages used:
            <br></br>
            <br></br>
            You can start the application by running the schema SQL file using mySQL,
            then running the index.js file with the 'node index.js' command in the command line.
            Then, follow the prompts in the terminal to add/review data for employees, departments,
            and roles. Below is a list of the NPM packages used:
            <br></br>
            <ul>
                <li>Console-table-printer</li>
                <li>Inquirer</li>
                <li>MySQL2</li>
            </ul>
        </>,
        img: employee_tracker,
        link: "https://github.com/zaingova/zaingova-sql-employee-tracker?tab=readme-ov-file"
    },
    {
        id: 3,
        title: "Freelance Platform",
        description: 
        <>
            The freelance platform is a web application that connects freelancers with clients looking 
            for their services. It provides a platform where freelancers can showcase their skills and 
            expertise, and clients can post projects they need assistance with.
            <br></br>
            <br></br>
            You need to be create an account and be logged in to use the app (links are on the navbar). 
            On the profile page, you (as a freelancer) can enter information you wish employers to see, 
            including a list of skills you wish to market. You can also perform a search for projects 
            that match your skills. On the projects page, you can create projects to find help with, 
            and enter skills/services that you are seeking. Similarly, you can also search for 
            freelancers with the skills you need. When viewing someone else's profile or project, 
            you can choose to send them a message (in app). On the messages page, you can view 
            all messages you have sent and received, and reply to the latter. Below is a list of NPM 
            packages/technologies used:
            <br></br>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Apollo Server</li>
                <li>GraphQL</li>
                <li>bcrypt</li>
                <li>Tailwind CSS</li>
            </ul>
        </>,
        img: freelance_platform,
        link: "https://github.com/s2robertson/freelance-platform"
    }
]