import { getImageUrl } from "./utils"

function History() {
    let history = [
        {
            id: 1,
            position: "Backend Developer",
            company: "Greenmoons",
            startDate: "Aug 2023",
            endDate: "Aug 2024",
            imageSrc: getImageUrl("icon/greenmoonsth_logo.jpg"),
            description: "Developed API using Golang (gin framework) the feature includes login, OTP, Send Email, LINE Integration, CRUD to PostgreSQL, Export Data into CSV or Excel, database migration, Unit Test, API Test, Automation Work"
        },
        {
            id: 2,
            position: "Golang Developer",
            company: "Nityo",
            startDate: "Jan 2023",
            endDate: "Jun 2023",
            description: ""
        },
        {
            id: 3,
            position: "Programmer",
            company: "Blishtech (Branch Company of INET)",
            startDate: "2019",
            endDate: "2022",
            description: "Developed API base on PHP language the features include login, CRUD data into MongoDB, image processing, (imagine library), upload file, send email (Gmail), database design, write a document and co-develop a Golang backend responsibly to created features aka login, CRUD data into a MongoDB "
        },
        {
            id: 4,
            position: "Software Engineer",
            company: "INET",
            startDate: "2018",
            endDate: "2019",
            description: "Web Automate/Manual Test, write python script to monitor VM resources (CPU, RAM), responsibly to developed ERP software (ASP.NET, C#), fix defect, change logic, edit frontend"
        }
    ];

    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {history.map(obj => {
                return (
                    <li className="mb-10 ms-4" key={obj.id}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{obj.startDate + " - " + obj.endDate}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{obj.position + ", " + obj.company}</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    </li>
                )
            })}
        </ol>
    )
}

export default History