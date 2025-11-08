// Projects Data
const projectsData = [
    {
        id: 1,
        title: 'Movie Recommender Application',
        description: 'A sophisticated Machine Learning application that provides personalized movie recommendations using Cosine Distance Similarity. The system analyzes user preferences and movie features to suggest relevant content.',
        fullDescription: 'This is a comprehensive Machine Learning Application for Movie Recommendation. The system utilizes Cosine Distance Similarity concept to provide accurate recommendations. Data was scraped from TMDB Movie website using custom Python scripts. The application features a user-friendly interface built with Streamlit and is deployed on AWS EC2 for high availability. Key features include real-time recommendations, movie details display, and similarity score visualization.',
        image: 'images/movie_recommender.png',
        technologies: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NumPy', 'BeautifulSoup', 'AWS EC2', 'NLP'],
        github: 'https://github.com/rakeshkr-code/movie_recommendation_system',
        live: 'http://ec2-3-111-188-53.ap-south-1.compute.amazonaws.com:8501/',
        category: ['ai-ml', 'nlp', 'web-dev']
    },
    {
        id: 2,
        title: 'ML Project - Personalized Offer',
        description: 'Binary Classification ML Model to understand driver behavior regarding their preference for discounts/offers for dining/takeaway in different scenarios.',
        fullDescription: 'Developed a Binary Classification ML Model on survey data to understand driver\'s behavior regarding their preference for discount/offer for dining/takeaway in different scenarios to various users. The project involved extensive data preprocessing, feature engineering, and model comparison. Implemented multiple algorithms including SVC, AdaBoost, and Gradient Boosting. Achieved high accuracy through hyperparameter tuning and cross-validation techniques.',
        image: 'images/proj_ml.png',
        technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SVC', 'AdaBoost', 'Gradient Boosting'],
        github: '#',
        live: '#',
        category: ['ai-ml', 'data-analysis']
    },
    {
        id: 3,
        title: 'Quantified Self Web Application',
        description: 'A comprehensive Tracker Application where users can track and maintain their daily habits with automated reminders and monthly reports.',
        fullDescription: 'This is a full-stack Tracker Application that allows users to track and maintain their Habits. The application features a Vue.js frontend and Flask backend. Implemented Celery and Redis for efficient caching and background job processing. Key features include daily reminder emails, monthly progress reports, habit analytics, data export functionality, and user authentication. The application follows RESTful API design principles and includes comprehensive error handling.',
        image: 'images/proj_qtfself.png',
        technologies: ['Python', 'Flask', 'Vue.js', 'HTML', 'CSS', 'Bootstrap', 'Redis', 'Celery', 'SQLite', 'REST API'],
        github: 'https://github.com/rakeshkr-code/QuantifiedSelfApp_V2',
        live: 'https://qtfself.herokuapp.com',
        category: ['web-dev']
    },
    {
        id: 4,
        title: 'Business Data Management - Sales Analysis',
        description: 'Comprehensive sales and stock analysis of a local medicine store with data visualization and actionable recommendations.',
        fullDescription: 'In this capstone project, I performed Sales and Stock Analysis of a Local Medicine Store. The project began with raw data collection from various sources, followed by extensive data cleaning and transformation. Created insightful visualization charts using Excel and performed detailed statistical analysis. Provided actionable recommendations to the store owner for inventory management, sales optimization, and customer retention strategies. The analysis revealed key patterns in seasonal demand and product performance.',
        image: 'images/proj_bdm.png',
        technologies: ['Excel', 'Data Analysis', 'Data Visualization', 'Statistics', 'Business Intelligence'],
        github: 'https://docs.google.com/presentation/d/1BNLEi14LguCaqt3s_JfvfUusEKxAgaG8koXfvjfwFjM/edit?usp=sharing',
        live: '#',
        category: ['data-analysis']
    },
    {
        id: 5,
        title: 'Startup Landing Page',
        description: 'A modern, responsive landing page for a startup built with HTML, CSS, and Bootstrap framework.',
        fullDescription: 'Created a professional landing page for a dummy startup using modern web development practices. The page features a responsive design that works seamlessly across all devices, smooth animations, and interactive elements. Implemented Bootstrap framework for rapid development and consistent styling. Includes sections for hero banner, features, testimonials, and contact form. The design emphasizes clean aesthetics and user experience.',
        image: 'images/project-1.png',
        technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Responsive Design'],
        github: 'https://github.com/rakeshkr-code/dummy-startup-page-using-bootstrap',
        live: '#',
        category: ['web-dev']
    }
];
