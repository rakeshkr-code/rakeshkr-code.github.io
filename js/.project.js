let projectData = [
    {
        image: 'images/movie_recommender.png',
        name: 'Movie Recommender Application',
        detail: 'This is a Machine Learning Application for Movie Recommendation. Cosine Distance Similarity concept is used here. Data Scrapped from TMDB Movie website. Application Deployed on AWS EC2',
        github: 'https://github.com/rakeshkr-code/movie_recommendation_system',
        live: 'http://ec2-3-111-188-53.ap-south-1.compute.amazonaws.com:8501/',
        tags: '#python, #ai/ml, #web dev, #web scrapping, #backend, #nlp'
    },
    {
        image: 'images/proj_ml.png',
        name: 'Machine Learning Project - Personalized Offer',
        detail: "Developed a Binary Classificartion ML Model On a survey data to understand the driver's behavior regarding their preference for discount/offer for dining/takeaway in different scenarios to various users.",
        github: '#',
        live: '#',
        tags: '#python, #ai/ml, #MachineLearning, #BinaryClassClassification, #SVC, #AdaBoost, #GradientBoosting, #ScikitLearn'
    },
    {
        image: 'images/proj_qtfself.png',
        name: 'Quantified Self Web Application',
        detail: 'This is a Tracker Application. Users can track and maintain their Habits. Used Celery and Redis for Caching, triggered and scheduled backend jobs like Daily Reminder Mail, Monthly Report, Export Tracker, etc.',
        github: 'https://github.com/rakeshkr-code/QuantifiedSelfApp_V2',
        live: 'https://qtfself.herokuapp.com',
        tags: '#frontend, #backend, #web dev, #python, #HTML, #CSS, #Bootstrap, #VueJS, #Redis, #Celery, #Caching'
    },
    {
        image: 'images/proj_bdm.png',
        name: 'Business Data Management Capstone Project',
        detail: 'In this Project I have done Sales and Stock Analysis of a Local Medicine Store. At first raw data is collected. Then cleaned it. Made some visualization charts and simple data analysis. Gave some recommendations to the store owner.',
        github: 'https://docs.google.com/presentation/d/1BNLEi14LguCaqt3s_JfvfUusEKxAgaG8koXfvjfwFjM/edit?usp=sharing',
        live: '#',
        tags: '#data viz, #data analysis, #Excel, #Data Collection, #Data Cleaning'
    },
    {
        image: 'images/project-1.png',
        name: 'A Dummy Startup Page',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: 'https://github.com/rakeshkr-code/dummy-startup-page-using-bootstrap',
        live: '#',
        tags: '#frontend, #web dev, #HTML, #CSS, #Bootstrap'
    },
]

// creating project cards in frontend
const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container')
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="${data.tags}">
        <div class="project-wrapper">
            <div class="project-thumbnail">
                <i class="bi bi-x-lg close-btn"></i>
                <img src="${data.image}" alt="" class="project-img">
                <span class="tags">${data.tags}</span>
            </div>
            <div class="project-body">
                <h1 class="project-name">${data.name}</h1>
                <p class="project-detail">${data.detail}</p>
                <a href="${data.github}" class="btn project-active-btn" target="_blank">GitHub</a>
                <a href="${data.live}" class="btn project-active-btn" target="_blank">Live Demo</a>
            </div>
        </div>
    </div>
    `;
}

projectData.forEach(data => createProjectCards(data));