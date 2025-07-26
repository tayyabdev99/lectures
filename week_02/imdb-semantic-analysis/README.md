
# IMDB Semantic Analysis

This repository provides a complete workflow for sentiment analysis on IMDB movie reviews using Python. It demonstrates data loading, preprocessing (with NLTK and spaCy), feature extraction (TF-IDF), model training (Logistic Regression), and evaluation (accuracy, classification report, confusion matrix visualization).

## Features
- Loads and inspects IMDB review dataset
- Cleans and preprocesses text (removes HTML, lowercases, tokenizes, removes stopwords, lemmatizes)
- Uses TF-IDF for feature extraction
- Trains a logistic regression model for sentiment classification
- Evaluates model performance with accuracy, classification report, and confusion matrix
- Includes sample code for predicting sentiment of new reviews

## Installation Guide

### 1. Clone the repository
```bash
git clone <repo-url>
cd imdb-semantic-analysis
```

### 2. Create and activate a Python virtual environment
#### macOS/Linux
```bash
python3 -m venv .venv
source .venv/bin/activate
```
#### Windows
```bash
python -m venv .venv
.\.venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Download NLTK resources
Open a Python shell or run the first cell in the notebook:
```python
import nltk
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('punkt_tab')
```

### 5. No need to manually download the spaCy English model
The code automatically downloads and loads `en_core_web_sm` if not present:
```python
import spacy
spacy.cli.download("en_core_web_sm")
nlp = spacy.load("en_core_web_sm")
```

## Usage
- Place your IMDB dataset CSV file as `dataset.csv` in the project root.
- Open `main.ipynb` or `sample.ipynb` in Jupyter or VS Code.
- Run all cells to execute the full workflow.
- You can modify the sample size or model parameters as needed.

## Project Structure
- `main.ipynb`: Full workflow for sentiment analysis
- `sample.ipynb`: A smaller sample for quick runs
- `requirements.txt`: List of required Python packages
- `dataset.csv`: IMDB dataset (add your own)
- `.venv/`: Python virtual environment (created locally)