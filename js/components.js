// Component rendering functions
const components = {
    renderExperiences() {
        const experienceList = document.querySelector('.experience-list');
        experienceList.innerHTML = portfolioData.experiences.map(exp => `
            <div class="experience-card">
                <h3>${exp.title}</h3>
                <p class="company">${exp.company}</p>
                <p class="period">${exp.period}</p>
                <ul>
                    ${exp.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    },

    renderSkills() {
        const technicalSkills = document.querySelector('.technical-skills');
        const softSkills = document.querySelector('.soft-skills');

        // Render technical skills
        technicalSkills.innerHTML = `
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

        // Render soft skills
        softSkills.innerHTML = `
            <h3>Soft Skills</h3>
            <div class="soft-skills-list">
                ${portfolioData.skills.soft.map(skill => `
                    <span class="soft-skill-tag">${skill}</span>
                `).join('')}
            </div>
        `;
    },

    renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" class="btn btn-primary">View Project</a>
            </div>
        `).join('');
    },

    renderEducation() {
        const educationList = document.querySelector('.education-list');
        educationList.innerHTML = portfolioData.education.map(edu => `
            <div class="education-card">
                <h3>${edu.degree}</h3>
                <p class="school">${edu.school}</p>
                <p class="period">${edu.period}</p>
                <p>${edu.description}</p>
            </div>
        `).join('');
    }
};