
"use client";
import ReactMarkdown from "react-markdown";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("http://localhost:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_prompt: input }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setResponse("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className={styles.page} style={{ background: '#fff', color: '#000', minHeight: '100vh' }}>
      <main className={styles.main} style={{ color: '#000' }}>
        <h1 style={{ color: '#000' }}>Gemini Blog Generator</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your blog topic or prompt..."
            style={{ width: 350, padding: 8, fontSize: 16 }}
            required
          />
          <button type="submit" style={{ marginLeft: 12, padding: 8, fontSize: 16 }} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
        {response && (
          <div style={{ width: "100%", maxWidth: 700, background: "#fff", color: '#000', padding: 24, borderRadius: 8, boxShadow: "0 2px 8px #0001" }}>
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        )}
      </main>
    </div>
  );
}
