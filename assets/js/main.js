// Portfolio data
const portfolioData = {

    experiences:[
        {
          company: "Devoteam",
          image:"Devoteam.png", 
          title: "Senior Full Stack Developer / Java - Angular",
          project: "Consult Pro",
          period: "June 2024 – Today",
          description: [
            "Business requirements analysis, technical specifications, and data model design using Domain-Driven Design (DDD).",
            "Development of REST APIs with Spring Boot 3 for CRUD operations (Consultants, Ranks, Value Accelerators).",
            "Implementation of security features using Spring Security for resource access management.",
            "Indexing consultant data for fast searches using Elasticsearch.",
            "Use of Feign Client for microservice communication and data synchronization with Elasticsearch."
          ]
        },
        {
          company: "NUMERYX - Client Generix Group France",
          image:"Generix.png", 
          title: "Senior Full Stack Developer Consultant / Java – Angular",
          project: "All In One",
          period: "January 2024 - June 2024",
          description: [
            "Designed key features related to electronic invoice management.",
            "Developed the authentication and access management module using Spring Security.",
            "Analyzed bugs and provided fixes for the BackOffice application.",
            "Created and optimized SQL and JPQL queries.",
            "Migrated code from JSF to Angular.",
            "Developed and maintained unit tests using JUnit."
          ]
        },
        {
          company: "NUMERYX",
          image:"numeryx.png", 
          title: "Full Stack Developer / Java - Angular",
          project: "Business Suite",
          period: "August 2023 - December 2023",
          description: [
            "Development of an electronic document management (EDM) microservice.",
            "Development of new features and modules in the platform (Business Suite BPMN).",
            "Design of business processes using Camunda Workflows.",
            "Bug fixing during the acceptance testing phase.",
            "Maintenance based on client requests or internal demands.",
            "Refactoring of forms into Reactive Forms."
          ]
        },
        {
          company: "NUMERYX - Client Ooredoo Entreprise",
          image:"ooredoo.png", 
          title: "Full Stack Development Consultant / Java – Angular",
          projects: "POSANET, STORECASH",
          period: "January 2023 - July 2023",
          description: [
            "Development of REST and SOAP web services for pricing simulation tools.",
            "Implemented authentication and access management using Spring Security.",
            "Architectural redesign of the POSANET front-end platform.",
            "Developed modules for managing offers, packs, and subscriptions.",
            "Integrated Chart.js for the Dashboard section.",
            "Integrated i18n for the front-end."
          ]
        },
        {
          company: "TIMSOFT",
          image:"timsoft.png", 
          title: "Développeur ServiceNow",
          project: "Timsoft",
          period: "September 2022 - December 2022",
          description: [
            "Created forms and configured instances for a process management project.",
            "Prepared for ServiceNow Administrator certifications.",
            "Prepared for ServiceNow Developer certifications."
          ]
        },
        {
          company: "NEOPOLIS DÉVELOPPEMENT",
          image:"neopolis.png", 
          title: "Full Stack Developer / Java – Angular - Flutter",
          project: "Geoprod CRM-BPM, Berilish Solution, Bysur, FoundMe, My Holy Bible",
          period: "October 2020 - September 2022",
          description: [
            "Development of new features in GEOPROD CRM-BPM.",
            "Bug fixing during the acceptance testing phase on GEOPROD CRM-BPM.",
            "Integration of online payment modules with Up2pay and Stripe.",
            "Developed front-end for bicycle insurance platform BERILISH using Angular NgRX.",
            "Developed a mobile app for bicycle insurance (BYSUR).",
            "Integrated web services into FOUND ME and MY HOLY BIBLE apps."
          ]
        },
        {
          company: "Altiad Tunisie",
          image:"altiad.png", 
          title: "Full Stack Developer / Java – Angular / Internship (End of Study)",
          project: "Agroubourse 360°",
          period: "January 2020 - May 2020",
          description: [
            "Designed intuitive, responsive user interfaces using Angular.",
            "Implemented secure REST APIs with Spring Boot.",
            "Developed modules for managing crops and agricultural equipment.",
            "Collaborated with agricultural experts to align platform with industry needs.",
            "Participated in sprints and Scrum ceremonies.",
            "Ensured data security using best practices."
          ]
        },
        {
          company: "Formalab",
          image:"formalab.png", 
          title: "Full Stack Developer / Symfony 4 / Summer Internship",
          project: "MedBib",
          period: "May 2019 – October 2019",
          description: [
            "Analyzed requirements and defined use cases.",
            "Developed interactive UIs using HTML, CSS, and JavaScript.",
            "Implemented the backend with Symfony 4, managing patient data.",
            "Integrated appointment scheduling and notifications.",
            "Tested and validated the application based on user feedback."
          ]
        },
        {
          company: "Formalab",
          image:"formalab.png", 
          title: "Full Stack Developer / Symfony 3 / Advanced Internship",
          project: "Formalab",
          period: "January 2019 – March 2019",
          description: [
            "Designed data models and business processes.",
            "Developed UIs using HTML, CSS, JavaScript, and Twig.",
            "Implemented CRUD APIs for students, teachers, and courses using Symfony 3.",
            "Validated and fixed bugs during unit testing with PHPUnit."
          ]
        },
        {
          company: "Tunisie Multitech",
          image:"tunisiemultitech.png", 
          title: "Full Stack Developer / Prestashop / Summer Internship",
          project: "TMT Commerce",
          period: "July 2018 – September 2018",
          description: [
            "Configured and customized Prestashop for client needs.",
            "Integrated catalog management, cart, and order functionalities.",
            "Tested for compatibility and performance.",
            "Provided technical documentation and team training."
          ]
        }
      ],
    skills:{
        technical: [
            { name: "Angular", level: 85 },
            { name: "Java", level: 90 },
            { name: "HTML", level: 90 },
            { name: "CSS", level: 88 },
            { name: "Bootstrap", level: 80 },
            { name: "JavaScript", level: 85 },
            { name: "TypeScript", level: 85 },
            { name: "Spring Boot", level: 88 },
            { name: "Flutter", level: 75 }
        ],
      cloud: [
            { name: "AWS", level: 70 },
            { name: "Google Cloud", level: 75 }
        ],
        ci_cd: [
            { name: "GitLab CI/CD", level: 85 },
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 75 },
            { name: "Jenkins", level: 78 },
            { name: "Sonar", level: 70 }
        ],
        database_and_caching: [
            { name: "Oracle", level: 85 },
            { name: "MySQL", level: 88 },
            { name: "MongoDB", level: 80 },
            { name: "PostgreSQL", level: 83 },
            { name: "Firebase", level: 75 },
            { name: "Redis", level: 78 }
        ],
        messaging_and_streaming: [
            { name: "Apache Kafka", level: 80 },
            { name: "RabbitMQ", level: 78 }
        ],
        project_management: [
            { name: "Jira", level: 90 },
            { name: "ActiveCollab", level: 70 },
            { name: "Confluence", level: 80 },
            { name: "Miro", level: 75 }
        ],
        methodologies: [
            { name: "Agile Scrum", level: 90 },
            { name: "SAFe", level: 80 },
            { name: "Kanban", level: 85 }
        ]
    }
    ,
    projects: [
        
            {
                title: "Consult Pro",
                description: "Development of an internal project for consultant management based on a microservices architecture, integrating Spring Boot, Angular, and Elasticsearch. Contributed to data centralization and process automation, ensuring smooth service communication via REST APIs and Feign Client. Focused on scalability and maintainability of the architecture.",
                technologies: ["Spring Boot", "Angular", "Elasticsearch", "Swagger", "Docker", "GitLab"],
                link: "#"
            },
            {
                title: "AllIonOne",
                description: "Corrective and evolutionary intervention on the All in One platform, optimizing the supply chain through B2B technologies (API, e-Invoicing). Cloud-based, microservices, and big data solution developed using Scrum methodology.",
                technologies: ["Angular 16", "Spring Boot", "Spring Security", "JSF", "Docker", "Flyway", "Jenkins", "Jira"],
                link: "#"
            },
            {
                title: "STORECASH & POSANET",
                description: "Corrective and evolutionary intervention on projects dedicated to complete management of fiber packages, subscriptions, and offers. Contributed to improving existing features, bug fixing, and developing new business-driven solutions.",
                technologies: ["Angular 15", "Spring Boot", "Spring Security", "Swagger", "Docker", "GitLab"],
                link: "#"
            },
            {
                title: "Business Suite",
                description: "Corrective and evolutionary intervention on the BPMN management platform, providing full control over business workflows, dynamic form management, users, and files.",
                technologies: ["Angular 14", "Spring Boot", "Camunda", "Kafka", "MinIO", "FormIO", "Docker", "Jenkins"],
                link: "#"
            },
            {
                title: "Geoprod CRM-BPM",
                description: "Corrective and evolutionary intervention on the cloud CRM-BPM system for managing insurance prospecting.",
                technologies: ["Angular 10", "Spring Boot", "Swagger", "PDF-Api-Generator", "Docker", "Jenkins"],
                link: "#"
            },
            {
                title: "Berilish Solution",
                description: "Development of a bicycle insurance subscription platform, collaborating with an Agile team to ensure quality and continuous delivery.",
                technologies: ["Flutter", "Dart", "Yousign", "Stripe", "GitLab"],
                link: "#"
            },
            {
                title: "Bysur",
                description: "Development of a bicycle insurance subscription application ensuring optimal user experience.",
                technologies: ["Angular", "Flutter", "Dart", "Yousign", "Stripe", "GitLab"],
                link: "#"
            },
            {
                title: "My Holy Bible",
                description: "Development of an interactive application allowing users to explore the Bible through voice commands.",
                technologies: ["Flutter", "Dart", "Flask", "PostgreSQL"],
                link: "#"
            },
            {
                title: "FoundMe",
                description: "Development of an application that helps users find their lost items.",
                technologies: ["Flutter", "Dart", "Flask", "PostgreSQL", "Adobe XD"],
                link: "#"
            },
            {
                title: "Agrobourse 360°",
                description: "Design and development of an innovative digital platform for agricultural services.",
                technologies: ["Angular", "Spring Boot", "Swagger", "Docker", "GitLab"],
                link: "#"
            },
            {
                title: "Medibib",
                description: "Development of a medical office management application for managing patients, appointments, and medical records.",
                technologies: ["Angular 8", "Spring Boot", "Spring Security", "MySQL"],
                link: "#"
            },
            {
                title: "Formalab",
                description: "Development of an application for managing a training school.",
                technologies: ["Symfony 4", "MySQL", "JavaScript"],
                link: "#"
            },
            {
                title: "TMT",
                description: "Creation of an e-commerce website dedicated to the sale and purchase of fire safety equipment.",
                technologies: ["Prestashop", "MySQL", "PHP"],
                link: "#"
            },
            {
                title: "Scraper Cars",
                description: "Development of a scraping application to automatically collect car information from two websites.",
                technologies: ["Symfony", "PHP", "Regex", "MySQL"],
                link: "#"
            },
            {
                title: "DEVTECH",
                description: "Development of a desktop application for managing a training center.",
                technologies: ["JavaFX", "MySQL", "UML"],
                link: "#"
            },
            {
                title: "StepsBib",
                description: "Design and development of a library management application, including book lending and inventory management.",
                technologies: ["Angular", "Node.js", "MongoDB", "JWT"],
                link: "#"
            },
            {
                title: "TwitterChat",
                description: "Development of a chat application inspired by Twitter, providing real-time communication between users.",
                technologies: ["Ionic", "Angular", "Firebase", "Python"],
                link: "#"
            }
        
        
    ],
    education: [
        {
            degree: "National Engineering Degree (Software Engineering)",
            school: "Private Higher School of Technologies and Management of Nabeul",
            period: "September 2020 - June 2023",
            description: "Specialized in Software Engineering and Distributed Systems"
        },
        {
            degree: "Applied Bachelor's in Information Technology ",
            school: "Higher Institute of Technological Studies of Kairouan",
            period: "September 2017 - June 2020",
            description: "Information Systems Development"
        },

        {
            degree: "Baccalaureate in Computer Science",
            school: "Med Arbi Chammeri Wardia High School, Tunis",
            period: "june 2017",
            description: "Computer Science with focus on Programming and Algorithms"
        }
    ]
};

// jQuery document ready
$(document).ready(function() {
    // Initialize components
    renderExperiences();
    renderSkills();
    renderProjects();
    renderEducation();
    initializeEventListeners();
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
 
});

// Component rendering functions
function renderExperiences() {
    const experienceHTML = portfolioData.experiences.map(exp => `
        <div class="experience-card"><img src=./assets/images/${exp.image} width=100px>
            <h3> <i class="fa fa-hashtag"></i> ${exp.title}</h3>
            <p class="company"><i class="fa fa-building"></i> ${exp.company}</p> 
            <p class="period"><i class="fa fa-calendar"></i> ${exp.period}</p>
            <ul>
                ${exp.description.map(item => `<i class="fa fa-check" style='color:green'></i> ${item}<br>`).join('')}
            </ul>
        </div>
    `).join('');
    
    $('.experience-list').html(experienceHTML);
}

function renderSkills() {
    // Technical skills
    const technicalHTML = `
        <h3>Technical Skills</h3>
        ${portfolioData.skills.technical.map(skill => `
            <div class="skill-bar">
                <div class="skill-header">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('')}
    `;
    
    // Soft CLOUD
    const softHTML = `
        <h3>Soft Skills</h3>
        <div class="soft-skills-list">
            ${portfolioData.skills.cloud.map(skill => `

                <div class="skill-bar">
                <div class="skill-header">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
                </div>
            </div>
          
            `).join('')}
        </div>
    `;

      // Soft skills
      const messaging_and_streaming = `
      <h3>Ci-CD Skills</h3>
      <div class="soft-skills-list">
          ${portfolioData.skills.messaging_and_streaming.map(skill => `

              <div class="skill-bar">
              <div class="skill-header">
                  <span>${skill.name}</span>
                  <span>${skill.level}%</span>
              </div>
              <div class="skill-progress">
                  <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
              </div>
          </div>
        
              
          `).join('')}
      </div>
  `;
    

   // Soft skills
   const database_and_caching = `
   <h3>Ci-CD Skills</h3>
   <div class="soft-skills-list">
       ${portfolioData.skills.database_and_caching.map(skill => `

           <div class="skill-bar">
           <div class="skill-header">
               <span>${skill.name}</span>
               <span>${skill.level}%</span>
           </div>
           <div class="skill-progress">
               <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
           </div>
       </div>
     
           
       `).join('')}
   </div>
`;



 // Soft skills
 const softCICD = `
 <h3>Ci-CD Skills</h3>
 <div class="soft-skills-list">
     ${portfolioData.skills.ci_cd.map(skill => `

         <div class="skill-bar">
         <div class="skill-header">
             <span>${skill.name}</span>
             <span>${skill.level}%</span>
         </div>
         <div class="skill-progress">
             <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
         </div>
     </div>
   
         
     `).join('')}
 </div>
`;

 // Soft skills
 const methodologies = `
 <h3>Ci-CD Skills</h3>
 <div class="soft-skills-list">
     ${portfolioData.skills.methodologies.map(skill => `

         <div class="skill-bar">
         <div class="skill-header">
             <span>${skill.name}</span>
             <span>${skill.level}%</span>
         </div>
         <div class="skill-progress">
             <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
         </div>
     </div>
   
         
     `).join('')}
 </div>
`;
    $('.technical-skills').html(technicalHTML);
    $('.soft-skills').html(softHTML);
    $('.cicd-skills').html(softCICD)
}

function renderProjects() {
    const projectsHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <h3><i class="fa-solid fa-diagram-project"></i> ${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
            <h4 style="margin-top:10px"> <i class="fa-solid fa-microchip"></i> Technical Environment: </h6>
                ${project.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>, 
                `).join('')}
            </div>
           
        </div>
    `).join('');
    
    $('.projects-grid').html(projectsHTML);
}

function renderEducation() {
    const educationHTML = portfolioData.education.map(edu => `
        <div class="education-card">
            <h3> <i class="fa-solid fa-graduation-cap"></i> ${edu.degree}</h3>
            <p class="school"> <i class="fa-solid fa-school"></i> ${edu.school}</p>
            <p class="period"><i class="fa-solid fa-calendar"></i> ${edu.period}</p>
            <p>${edu.description}</p>
        </div>
    `).join('');
    
    $('.education-list').html(educationHTML);
}

function initializeEventListeners() {
    // Mobile menu toggle
    $('.mobile-menu-btn').click(function() {
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
    });

    // Smooth scrolling for navigation
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Contact form submission
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        const formData = $(this).serializeArray();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Skill bars animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).css('width', $(entry.target).data('width'));
            }
        });
    }, { threshold: 0.5 });

    $('.skill-progress-bar').each(function() {
        const width = $(this).css('width');
        $(this).css('width', '0');
        $(this).data('width', width);
        observer.observe(this);
    });


  
}