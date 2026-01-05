# Baseball Analytics Hub

A web-based dashboard and analytics platform for Major League Baseball (MLB) insights, featuring real-time game tracking, player performance analysis, and predictive modeling.

## ⚾ Project Overview

This project is a comprehensive analytics framework designed to provide fans, analysts, and teams with deep insights into the game of baseball. It combines a user-friendly web interface with advanced machine learning models to predict outcomes and analyze player performance.

## 🚀 Key Features

### Web Interface
The web dashboard (`MLB Insight GEN.html`) includes several sections:
- **Game Level Insights**: Visualizes win probability, pitch analysis, and hit quality.
- **Live Game Tracker**: Displays live scores, inning details, and current pitcher/batter stats (prototype interface).
- **League Standings**: Current team standings and statistics.
- **Player Style Analysis**: Categorizes players into archetypes like "Power Hitter", "Precision Pitcher", etc.
- **Advanced Player Insights**: Tracks rookie performance, defensive metrics, and clutch performance.
- **Fan Insights & News**: Embeds highlight videos and news updates to keep fans engaged.
- **Advanced Game Intelligence**: Showcases predictive win probabilities and adaptive performance metrics.

### Data Science & Machine Learning
The project includes a Jupyter Notebook (`hackathon.ipynb`) demonstrating data analysis and model training:
- **Homerun Prediction Model**: Uses XGBoost to predict hit distance based on exit velocity and launch angle.
- **Fan Recommendation System**: A prototype recommendation system using SVD (Singular Value Decomposition) to suggest teams to fans.
- **Game Outcome Prediction**: A TensorFlow-based neural network model to classify play outcomes.

## 🛠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Visualization**: Chart.js for dynamic charts
- **Styling**: Bootstrap 4 for responsive design
- **Data Science**: Python, Pandas, XGBoost, Scikit-learn, TensorFlow, Surprise (for recommendations)
- **Cloud/Data**: Google Cloud BigQuery (referenced in analysis code)

## 📖 Usage Instructions

### Web Dashboard
To view the analytics dashboard:
1. Clone or download the repository.
2. Open `MLB Insight GEN.html` in any modern web browser.

### Data Analysis
To explore the machine learning models:
1. Ensure you have Jupyter Notebook installed or use a platform like Google Colab.
2. Open `hackathon.ipynb` to view the code for data processing and model training.
3. Note: The notebook references Google Cloud BigQuery datasets which may require specific credentials and access rights to run fully.

## 📂 File Structure

- `MLB Insight GEN.html`: Main entry point for the web dashboard.
- `MLB I GEN.js`: JavaScript file containing Chart.js configurations.
- `Style.css`: Custom styles for the website.
- `hackathon.ipynb`: Jupyter notebook with data science experiments and model training code.
- `README.md`: Project documentation.
