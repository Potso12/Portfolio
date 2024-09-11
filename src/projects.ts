import { Project } from "./types/types"

const projects: Project[] = [
    {
        name: "Pallaksen pöllöt",
        tech: "React + Node + MySQL web page, Flask + Flutter + SQLlite3 mobile",
        info: "After practicing git and various languages I went in to a course were we used agile methods in practice. Wedeveloped mobile app and web page. I developped feture to change language, cypress tests to web page and contributed bit to mobile part as well. Frameworks used were React + Node on web and falsk bacend, Flutter front end on mobile",
        logoUrl: "/projectImages/pallaksenPollot.png",
        repoURl: null 
    },
    {
        name: "Dishcovery",
        tech: "React + Node and mongoDB as database",
        info: "Helsinki universitys Full Stack Open course is worth half a year of studying if completed fully which we did. To complete Project one was required to contribute at least 175 hours to it. We formed group of three and decided to do Food recipe page where one could create, like, dislike recipes, follow other users, see theirlikes and recipes. I worked on thing s like login and on mostly backend features.",
        logoUrl: "/projectImages/Discovery.png",
        repoURl: "https://github.com/tuiskuk/FullStackProject" 
    },
    {
        name: "Order sandwich page",
        tech: "React + Node + Mysql + Docker",
        info: "In one course we were asked to create page that has frontend and two servers. Those two servers were dockerized. When order is made server-a sends it to server-b which waits for a bit ands sends it bac to server-a. I worked mainly on backend in this project",
        logoUrl: "/projectImages/webdev2.png",
        repoURl: "https://course-gitlab.tuni.fi/compcs510-spring2024/full-stack-pros" 
    },
    {
        name: "Portfolio",
        tech: "React + TypeScript",
        info: "I had worked mostly on bakcend and had barely used TypeScript Before. TypeScript seems to be industry standard and my frontend skills were in need of practicing. Main goal of this page was to practice all of those things and I ended up making made web page that could be used when aplying to jobs",
        logoUrl: "/projectImages/Portfolio.png",
        repoURl: "https://github.com/Potso12" 
    }
]

export default projects