import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const PAYLOAD = {"s":"P7O3m6eC1i3y6Cyi0hk50g==","iv":"GC/OnCnWPuS9FXR0","d":"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"};

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
