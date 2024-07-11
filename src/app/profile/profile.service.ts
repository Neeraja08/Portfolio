import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title: 'Assistpay',
      desc: [
        'Assistpay is a Payroll management System to generate payslip & reports of employees who are outsourcing.',
        `Implemented modules to manages salaries,branches, employees, designations.
        . Worked on multi-organization switching.
        . Developed features to calculate each staff monthly payroll and take home.`,
      ],
      githurl: '',
      link: 'https://assistpay.msrcosmos.com/accounting/auth/login',
      imgUrl: 'assets/images/favicon-acc.png',
      tech: [
        { title: 'Angular', icon: 'assets/images/Angular.png' },
        { title: 'Node js', icon: 'assets/images/node.svg' },
        { title: 'Azure', icon: 'assets/images/azure.png' },
      ],
      createdAt: 'MAY 2022 - PRESENT',
    },
    {
      id: 2,
      title: 'Launchpad',
      desc: [
        'Launchpad often refers to a starting point or a centralized interface where users can initiate and access various applications, tools, or services within an organization or a platform. It serves as a gateway that aggregates different functionalities and provides users with a unified experience.',
        `Component-Based UI Development: Expertise in building responsive and reusable UI components using Angular’s component architecture for dynamic dashboard interfaces.
        . Data Integration and Management: Proficient in integrating Angular applications with backend APIs to fetch and manage data, ensuring seamless data flow and synchronization.
        . Routing, State Management, and Testing: Experienced in implementing routing, managing application state using Angular services, and conducting comprehensive testing to ensure robust functionality and user experience.`,
      ],
      githurl: '',
      link: 'https://launchpad.msrcosmos.com/#/login',
      imgUrl: 'assets/images/Launchpad-icon.svg',
      tech: [
        { title: 'Angular', icon: 'assets/images/Angular.png' },
        { title: 'Spring Boot', icon: 'assets/images/springboot.png' },
        { title: 'Azure', icon: 'assets/images/azure.png' },
      ],
      createdAt: 'JUN 2023 - PRESENT',
    },
    {
      id: 3,
      title: 'Mail Tracker',
      desc: [
        'The mail tracker assists in documenting and tracking all inbound mail to the organization. Inbound mail tracking provides the current status of letters, parcels and other mail items received.',
        `Implemented the email composition module,
        allowing users to draft and send emails directly
        from the application.`,
      ],
      githurl: '',
      link: 'https://mailtracker.msrcosmos.com/#/login',
      imgUrl: 'assets/images/mailtracker-favicon.png',
      tech: [
        { title: 'Angular', icon: 'assets/images/Angular.png' },
        { title: 'Spring Boot', icon: 'assets/images/springboot.png' },
        { title: 'Azure', icon: 'assets/images/azure.png' },
      ],
      createdAt: 'DEC 2022 - PRESENT',
    },
    {
      id: 4,
      title: 'Ticketing',
      desc: [
        'Providing support in developing a comprehensive ticketing tool using Angular, enabling efficient management of customer support requests. It provide features for creating, assigning, and tracking support tickets with multi-role authorization and multiorganization switching with multi variety of authentications including AAD and SSO.',
        `Data Integration and Management: Skilled in integrating Angular applications with backend APIs to manage ticketing data efficiently, ensuring seamless operations and user interactions.`,
      ],
      githurl: '',
      link: 'https://ticketing.msrcosmos.com/#/login',
      imgUrl: 'assets/images/ticketing.png',
      tech: [
        { title: 'Angular', icon: 'assets/images/Angular.png' },
        { title: 'Spring Boot', icon: 'assets/images/springboot.png' },
        { title: 'Azure', icon: 'assets/images/azure.png' },
      ],
      createdAt: 'NOV 2023 - FEB 2024',
    },
  ];
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Express, Jquery, Bootstrap, MongoDB, and MYSQL`;

  about =
    'Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';
  resumeurl = 'assets/images/Resume.pdf';

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 2+',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'NODE JS',
      progress: '50%',
    },
    {
      id: '3',
      skill: 'JAVASCRIPT',
      progress: '80%',
    },
    {
      id: '4',
      skill: 'MySQL',
      progress: '75%',
    },
    {
      id: '5',
      skill: 'MONGO DB',
      progress: '75%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2016 - 2020',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Engineering',
      info: `
         Completed B.E in Computer Engineering with 7.0 CGPA.`,
      institution:
        'MALLAREDDY ENGINEERING COLLEGE AND MANAGEMENT SCIENCES,HYDERABAD',
    },
    {
      id: '2',
      from_to_year: '2014 - 2016',
      education: 'Higher Secondary',
      stream: 'Science and Mathematics',
      institution: 'NARAYANA JUNIOR COLLEGE,HYDERABAD',
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 87%.`,
    },
    {
      id: '3',
      from_to_year: '2013 - 2014',
      education: 'Secondary  School',
      stream: 'Science and Mathematics',
      institution: 'RAVINDRA HIGH SCHOOL, SIDDIPET',
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 77%.`,
    },
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'MSRcosmos Group',
      location: 'Hyderabad',
      timeline: 'Nov 2021 to Present',
      role: 'Software Developer',
      work: `Developed and maintained multiple Angular applications, ensuring high performance and responsiveness.
    . Collaborated with UX/UI designers to implement user-friendly and visually appealing interfaces.
     . Integrated RESTful APIs to enable dynamic data fetching and manipulation.
     . Utilized RxJS for efficient state management and asynchronous data handling.
     . Conducted code reviews and provided constructive feedback to improve code quality and maintainability.
     . Implemented unit and end-to-end tests to ensure application stability and reliability.`,
    },

    {
      id: 1,
      company: 'Genex Corp',
      location: 'Hyderabad',
      timeline: 'Feb 2021 – May 2021',
      role: 'Summer Intern',
      work: `Creating visually stunning and user-friendly portfolios.
      . Technologies : Html , Css, Bootstrap.`,
    },
  ];

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): any {
    // return this.http.get(this.baseUrl + 'exprience');
    return [];
  }
}
