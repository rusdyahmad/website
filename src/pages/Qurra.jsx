import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const PAYLOAD = {"s":"1jTQXh/FGhbdAy5EqXGEyA==","iv":"9JtNmh/3Wvgxnu4e","d":"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"};

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
