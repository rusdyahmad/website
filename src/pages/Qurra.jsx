import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const PAYLOAD = {"s":"5y3ho+g9wsIC95nMs9QEsw==","iv":"URbnSJ/+U2d0sliM","d":"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"};

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
