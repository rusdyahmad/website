import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const PAYLOAD = {"s":"7I3GvieHFlzxunLrkpNC3w==","iv":"4pERWUqkngPqYobv","d":"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"};

async function decryptStory(password) {
  if (!password || typeof window === "undefined") throw new Error("Empty password");
  const enc = new window.TextEncoder();
  const dec = new window.TextDecoder();

  const salt = Uint8Array.from(window.atob(PAYLOAD.s), (c) => c.charCodeAt(0));
  const iv = Uint8Array.from(window.atob(PAYLOAD.iv), (c) => c.charCodeAt(0));
  const data = Uint8Array.from(window.atob(PAYLOAD.d), (c) => c.charCodeAt(0));

  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(password.trim().toLowerCase()),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );

  const decrypted = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );

  return JSON.parse(dec.decode(decrypted));
}

export default function Qurra() {
  const [password, setPassword] = useState("");
  const [story, setStory] = useState(() => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const cached = window.sessionStorage.getItem("q_content");
      if (cached) {
        try {
          return JSON.parse(cached);
        } catch {
          return null;
        }
      }
    }
    return null;
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError("");

    try {
      const decrypted = await decryptStory(password);
      setStory(decrypted);
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.setItem("q_content", JSON.stringify(decrypted));
      }
    } catch {
      setError("Kata laluan tidak tepat. Sila cuba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleLock = () => {
    setStory(null);
    setPassword("");
    setError("");
    if (typeof window !== "undefined" && window.sessionStorage) {
      window.sessionStorage.removeItem("q_content");
    }
  };

  return (
    <div className="qurra-page">
      <SEO
        title="Catatan — Rasuk Ke Jiwa"
        description="Catatan khas"
        path="/qurra"
        noIndex={true}
      />

      <div className="qurra-bg-wrapper" aria-hidden="true">
        <div className="qurra-bg-image" />
        <div className="qurra-bg-overlay" />
        <div className="qurra-bg-glow" />
      </div>

      <div className="container qurra-container">
        {!story ? (
          <div className="qurra-auth-wrapper reveal visible">
            <div className="qurra-auth-card">
              <div className="qurra-auth-header">
                <div className="qurra-lock-badge">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h1 className="qurra-auth-title">Halaman Berkunci</h1>
                <p className="qurra-auth-desc">
                  Masukkan kata laluan untuk membaca catatan ini.
                </p>
              </div>

              <form onSubmit={handleUnlock} className="qurra-auth-form">
                <div className="qurra-input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Masukkan kata laluan"
                    className={`qurra-input ${error ? "input-error" : ""}`}
                    autoFocus
                    autoComplete="current-password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="qurra-toggle-pwd"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Sembunyi kata laluan" : "Papar kata laluan"}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>

                {error && <p className="qurra-error-text">{error}</p>}

                <button type="submit" className="btn qurra-submit-btn" disabled={loading}>
                  {loading ? "Membuka..." : "Buka Catatan"}
                </button>
              </form>

              <div className="qurra-auth-footer">
                <Link to="/" className="qurra-back-link">
                  ← Kembali ke Laman Utama
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <article className="qurra-story-wrapper reveal visible">
            <div className="qurra-top-bar">
              <Link to="/" className="qurra-back-btn">
                ← Laman Utama
              </Link>
              <button onClick={handleLock} className="qurra-lock-btn" title="Kunci semula">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Kunci Semula</span>
              </button>
            </div>

            <div className="qurra-story-card">
              <header className="qurra-story-header">
                <p className="qurra-story-eyebrow">{story.eyebrow}</p>
                <h1 className="qurra-story-title">{story.title}</h1>
                <div className="qurra-ornament">✦ ❦ ✦</div>
              </header>

              <div className="qurra-story-body">
                <div className="qurra-float-image">
                  <img src="/bg-ambient.png" alt="Catatan Rasuk Ke Jiwa" loading="eager" />
                </div>
                {story.sections.map((section, idx) => {
                  if (section.type === "p") {
                    return (
                      <p key={idx} className="qurra-p">
                        {section.content}
                      </p>
                    );
                  }
                  if (section.type === "stanza") {
                    return (
                      <p key={idx} className="qurra-p stanza">
                        {section.lines.map((line, lIdx) => (
                          <span key={lIdx}>
                            {line}
                            {lIdx < section.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    );
                  }
                  if (section.type === "stanza_bold") {
                    return (
                      <p key={idx} className="qurra-p stanza">
                        {section.lines.map((line, lIdx) => (
                          <span key={lIdx}>
                            {line}
                            <br />
                          </span>
                        ))}
                        <strong>{section.bold}</strong>
                      </p>
                    );
                  }
                  if (section.type === "highlight") {
                    return (
                      <p key={idx} className="qurra-p highlight-line">
                        {section.content}
                      </p>
                    );
                  }
                  if (section.type === "tag") {
                    return (
                      <p key={idx} className="qurra-p tag-word">
                        <em>{section.content}</em>
                      </p>
                    );
                  }
                  if (section.type === "focal") {
                    return (
                      <p key={idx} className="qurra-p focal-word">
                        {section.content}
                      </p>
                    );
                  }
                  if (section.type === "divider") {
                    return (
                      <div key={idx} className="qurra-section-divider">
                        <span>❧</span>
                      </div>
                    );
                  }
                  if (section.type === "quote") {
                    return (
                      <blockquote key={idx} className="qurra-quote">
                        {section.content}
                      </blockquote>
                    );
                  }
                  if (section.type === "closing") {
                    return (
                      <div key={idx} className="qurra-closing-box">
                        <p className="qurra-p closing-line">{section.line1}</p>
                        <p className="qurra-p closing-final">
                          {section.line2}
                          <br />
                          {section.line3}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              <footer className="qurra-story-footer">
                <div className="qurra-ornament">✦ ❦ ✦</div>
                <div className="qurra-footer-actions">
                  <Link to="/" className="btn btn-ghost qurra-btn-footer">
                    Kembali ke Laman Utama
                  </Link>
                  <button onClick={handleLock} className="btn qurra-btn-footer">
                    Kunci Semula
                  </button>
                </div>
              </footer>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
