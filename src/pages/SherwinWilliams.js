// src/pages/SherwinWilliams.js
import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import "./ExperiencePage.css";

const SherwinWilliams = () => {
  // ----- Project Title -----
  const title = "Sherwin-Williams — R&D Data Science Intern / Co-op";

  // ----- One-line -----
  const oneLiner =
    "Built an end-to-end NLP + LLM pipeline to analyze 22K+ customer complaints, cutting manual review ~60%, improving model efficiency ~45%, and speeding decisions ~2.3×.";

  // ----- Context & Problem -----
  const context =
    "Large volumes of unstructured complaint text made it slow to spot patterns, assign consistent categories, and brief stakeholders. The team needed scalable themes, reliable labels, and concise summaries to act faster.";

  // ----- What I Built -----
  const built = [
    "Preprocessing: spaCy/Gensim/TextBlob pipeline (tokenize, normalize, stopwords, lemmatize, spell-fix) to stabilize inputs and reduce noise.",
    "Topic Modeling: LDA, BERTopic (BERT → UMAP → HDBSCAN), and Top2Vec to surface recurring issues across 22K+ records.",
    "Classification: NMF / Word2Vec / Naive Bayes with prompt-checked LLM guardrails to enforce a strict label set and boost accuracy.",
    "Summarization: LLM-generated, ticket-level summaries (e.g., by REX ID) for rapid triage and reporting.",
    "Delivery: Packaged the workflow in Dataiku and exposed insights via Tableau for business users.",
  ];

  // ----- Impact -----
  const impact = [
    "≈60% less manual review during triage",
    "≈45% improvement in model efficiency after robust cleaning",
    "≈35% better detection of recurring issues via topic modeling",
    "≈30% lift in classification accuracy; ≈70% reduction in manual tagging",
    "≈2.3× faster time from data to decision via dashboards and automated flows",
  ];

  // ----- Approach (Pipeline) -----
  const approach =
    "Ingest → Clean (spaCy/Gensim/TextBlob) → Vectorize (BoW / TF-IDF / embeddings) → Topics (LDA, BERTopic, Top2Vec) → Classify (NMF / Word2Vec / Naive Bayes + LLM guardrails) → Summarize (LLM) → Publish (Dataiku + Tableau).";

  // ----- Tech -----
  const tech =
    "Python, spaCy, Gensim, TextBlob, scikit-learn, BERTopic, UMAP, HDBSCAN, Word2Vec, NMF, Naive Bayes, LLM prompting, Dataiku (GenAI), Tableau, Git";

  return (
    <>
      <Navbar />

      <div className="experienceSplitPage">
        {/* ---------- LEFT COLUMN ONLY (no image/right column) ---------- */}
        <div className="experienceLeft">
          <h1>{title}</h1>
          <u><h2>Project Title: AI-Powered Complaint Analytics Pipeline (NLP + LLM)</h2></u>

          <h2>One-line</h2>
          <p className="experienceIntro">{oneLiner}</p>

          <h2>Context &amp; Problem</h2>
          <p className="experienceIntro">{context}</p>

          <h2>What I Built</h2>
          <ul className="experienceList">
            {built.map((item, idx) => (
              <li key={`built-${idx}`}>{item}</li>
            ))}
          </ul>

          <h2>Impact</h2>
          <ul className="experienceList">
            {impact.map((item, idx) => (
              <li key={`impact-${idx}`}>{item}</li>
            ))}
          </ul>

          <h2>Approach (Pipeline)</h2>
          <p className="experienceIntro">
            <strong>{approach}</strong>
          </p>

          <h2>Tech</h2>
          <p className="experienceIntro">{tech}</p>

          <a href="/" className="backBtn" style={{ marginTop: "1rem" }}>
            ← Back to Home
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SherwinWilliams;
