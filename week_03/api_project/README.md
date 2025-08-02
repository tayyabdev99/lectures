# API Project

This folder contains a FastAPI backend that exposes endpoints for generating technical blog posts using the Gemini LLM.

## How to Run
1. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
2. Set your Gemini API key in a `.env` file:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
3. Start the server:
   ```sh
   python main.py
   ```

## Endpoints
- `GET /` — Health check
- `POST /generate` — Takes a JSON `{ "user_prompt": "your topic" }` and returns a generated blog post in Markdown.
