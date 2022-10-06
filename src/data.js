export const skillsData = [
    {
        skillType: "Languages",
        list: [
        {
            name: "JavaScript",
            progress: 90,
        },
        {
            name: "Python",
            progress: 90,
           
        },
        {
            name: "C++",
            progress: 90,
            
        },
        {
            name: "Java",
            progress: 80,
            
        },
        {
            name: "HTML",
            progress: 90,
            
        },
        {
            name: "CSS",
            progress: 90,
            
        },
    ]
    },
    {
        skillType: "Frameworks",
        list: [
        {
            name: "React.js",
            progress: 85,
           
        },
        {
            name: "Bootstrap",
            progress: 90,
            
        },
        {
            name: "Express.js",
            progress: 85,
           
        }
        ,
        {
            name: "Node.js",
            progress: 60,
           
        },
        {
            name: "Django",
            progress: 70,
            
        },
        {
            name: "Django Rest Framework",
            progress: 80,
            
        },
        {
            name: "JavaFX",
            progress: 80,
            
        },
    ]
    },
    {
        skillType: "Databases",
        list: [
        {
            name: "MongoDB",
            progress: 90,
           
        },
        {
            name: "PostgreSQL",
            progress: 90,
          
        },
        {
            // PL/SQL
            name: "Oracle",
            progress: 85,
            
        },
    ]},
    {
        skillType: "Tools",
        list: [
        {
            name: "Git",
            progress: 90,
            
        },
        {
            name: "GitHub",
            progress: 90,
            
        },
        {
            name: "Bash",
            progress: 60,
            
        },
    ]},
    {
        skillType: "Others",
        list: [
        {
            name: "Data Structures and Algorithms",
            progress: 90,
           
        },
        {
            name: "Problem Solving",
            progress: 90,
            
        },
        {
            name: "Object Oriented Programming",
            progress: 90,
           
        },
        {
            name: "Competitive Programming",
            progress: 90,
           
        },
    ]},
        
];

export const lastUpdated = "October 6, 2022";

export const problemSolvingData = [
    {
        oj: "CodeForces",
        username: "F__",
        profileLink: "https://codeforces.com/profile/F__",
        solveCount : 883,
    },
    {
        oj: "CodeChef",
        username: "dreamy_tourist",
        profileLink: "https://www.codechef.com/users/dreamy_tourist",
        solveCount : 22,
    },
    {
        oj: "AtCoder",
        username: "mahbubulhaque",
        profileLink: "https://atcoder.jp/users/mahbubulhaque",
        solveCount : 21,
    },
    {
        oj: "TopCoder",
        username: "bool_bool",
        profileLink: "https://www.topcoder.com/members/bool_bool/",
        solveCount : 20,
    }
    ,
    {
        oj: "LightOJ",
        username: "mahbubulhaque",
        profileLink: "https://lightoj.com/user/mahbubulhaque",
        solveCount : 88,
    
    },
    {
        oj: "SPOJ",
        username: "dreamy_tourist",
        profileLink: "https://www.spoj.com/users/dreamy_tourist/",
        solveCount : 29,
    },
    {
        oj: "UVA",
        username: "bool_bool",
        profileLink: "https://uhunt.onlinejudge.org/id/911156",
        solveCount : 54,
    },
    {
        oj: "Vjudge",
        username: "Md_Mahbubul_Haq",
        profileLink: "https://vjudge.net/user/Md_Mahbubul_Haq",
        solveCount : 307,
    },
    {
        oj: "Timus",
        username: "Mahbubul Haque",
        profileLink: "https://acm.timus.ru/author.aspx?id=259361",
        solveCount : 16,
    },
    {
        oj: "HackerEarth",
        username: "Mahbubul Haque",
        profileLink: "https://www.hackerearth.com/@mdmahbubulhaq201711",
        solveCount : 22,
    },
    {
        oj: "LeetCode",
        username: "mahbubulhaque",
        profileLink: "https://leetcode.com/mahbubulhaque/",
        solveCount : 45,
    },
    {
        oj: "Toph",
        username: "bool_bool",
        profileLink: "https://toph.co/u/bool_bool",
        solveCount : 5,
    },
    {
        oj: "CS Academy",
        username: "mahbubulhaque",
        profileLink: "https://csacademy.com/user/mahbubulhaque/",
        solveCount : 8,
    },
    {
        oj: "POJ",
        username: "bool_bool",
        profileLink: "http://poj.org/userstatus?user_id=bool_bool",
        solveCount : 4,
    },
    {
        oj: "HackerRank",
        username: "Mahbubul Haque",
        profileLink: "https://www.hackerrank.com/mdmahbubulhaq201",
        solveCount : 2,
    },


];

export const projectsInfo = [
  {
    projectType: "Web Projects",
    id: "web",
    projects: [
      {
        title: "Personal Portfolio Website",
        titleLink: {
          link: "https://mahbubul-haq.github.io/",
          text: "Mahbubul Haque",
        },
        role: "Everything",
        technology: "React, Bootstrap, CSS",
        description: `This is my personal portfolio website. This website contains my professional as well as academic
                experience. 
                `,
        features: [
          "Responsive Design, Dark Mode",
          "Resume, Projects, Experience, Skills",
          "CI/CD using git & GitHub pages",
        ],
        demonstration: {
          showVideo: false,
          embedLink: "",
          imgLink: "",
        },
      },
    ],
  },
  {
    projectType: "Academic Projects",
    id: "academic",
    projects: [
      {
        title: "Travel Bug - Travel & Tourism Website",
        role: "Frontend, Backend, Host(everything), Messaging, Schema, ERD, Class Diagram",
        technology:
          " Nodejs, Express, React, MongoDB, Bootstrap, CSS, JWT, Stripe",
        description: `Travel Bug is a travel and tourism website. It is a platform for hosting
                experiences, booking experiences, and providing transport guidelines. This project was 
                made for Software Developmment Sessional course along with two other team members.
                `,
        features: [
          "Hosting Experiences, booking experiences",
          "Providing Transport Guidelines",
          "Payment Gateway through Stripe",
          "Messaging System, Authentication",
        ],
        githubLink: "https://github.com/mahbubul-haq/Travel-Bug-Airbnb",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/g-shwX9y4aI",
          imgLink: "",
        },
      },
      {
        title: "UBER - Ride Sharing & Car Rental Website",
        role: "Everything",
        technology:
          "Django, Oracle PL/SQL, Bootstrap, Python, JavaScript, CSS, Leaflet",
        description: `UBER is a ride sharing and car rental website. This website provides amazing
                ride sharing experience and car rental service. This project was made for Database Sessional
                course.
                `,
        features: [
          "Ride Sharing, Car Rental",
          "Map Integration using Leaflet and GeoLocation",
        ],
        githubLink: "https://github.com/mahbubul-haq/UBER-Ride-Sharing-Service",
        demonstration: {
          showVideo: false,
          embedLink: "",
          imgLink: "",
        },
      },
      {
        title: "Smart Room Simulation",
        role: "Everything",
        technology: `C, Atmega32, LCD, Keypad, Buzzer, Motor, PIR Sensor, Gas Sensor,
                Flame Sensor, Temperature Sensor, GSM Module, LDR Sensor`,
        description: `Smart Room Simulation is a simulation of a smart room in Proteus Software.
                This simulation provides a smart room experience. This project was
                made for Microcontroller Sessional course.
                `,
        features: [
          "Manual, Automatic, Remote Control",
          "Detects Fire, Gas Leak, Temperature, Light, Human Entrance",
          "Sends SMS through GSM Module",
        ],
        githubLink: "https://github.com/mahbubul-haq/Smart-Room-Simulation",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/iGjB0XKjxSU",
          imgLink: "",
        },
      },
      {
        title: "Network Car Racing Game",
        role: "Everything",
        technology: `Java, JavaFX, Socket Programming, Multithreading, OOP`,
        description: `Network Car Racing Game is a multiplayer car racing game. This game is
                played between two players on the same network. This project was made for
                Object Oriented Programming Language Sessional course.
                `,
        features: [
          "Registration and login",
          "Multiplayer connection through Socket Programming",
        ],
        githubLink: "https://github.com/mahbubul-haq/Network-Car-Racing-Game",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/8uobXJ6C7NY",
          imgLink: "",
        },
      },
      {
        title: "DX BALL Game",
        role: "Creating different levels, Game logic, Design, Implementation",
        technology: `C, iGraphics.h`,
        description: `DX BALL Game is a single player multi level game. It has different levels and different types of
                bricks. This project was made for Structured Programming Language Sessional course.
                `,
        features: ["Different Levels, different types of bricks", "Smooth gameplay"],
        githubLink: "https://github.com/mahbubul-haq/DX-BALL-Game",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/MobiPt_rQKo",
          imgLink: "",
        },
      },
    ],
  },
];