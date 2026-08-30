import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const PAYLOAD = {"s":"wkrVCtTd7Rfu0sVh1ra6hQ==","iv":"s+LdjQFutdna2LD5","d":"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"};

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
  const cacheKey = "q_v_" + PAYLOAD.iv;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [story, setStory] = useState(() => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      window.sessionStorage.removeItem("q_content");
      window.sessionStorage.removeItem("qurra_auth");

      const cached = window.sessionStorage.getItem(cacheKey);
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

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError("");

    try {
      const decrypted = await decryptStory(password);
      setStory(decrypted);
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.setItem(cacheKey, JSON.stringify(decrypted));
      }
    } catch {
      setError("Kata laluan tidak tepat. Sila cuba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleLock = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setStory(null);
    setPassword("");
    setError("");
    if (typeof window !== "undefined" && window.sessionStorage) {
      window.sessionStorage.removeItem(cacheKey);
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

                {/* Audio player */}
                <div className="qurra-audio-player">
                  <button
                    type="button"
                    className={`qurra-audio-btn ${isPlaying ? "is-playing" : ""}`}
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Jeda Audio" : "Mainkan Audio Iringan"}
                  >
                    <span className="qurra-audio-icon">
                      {isPlaying ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      )}
                    </span>
                    <span className="qurra-audio-label">
                      {isPlaying ? "Sedang Dimainkan..." : "Putar Audio Iringan"}
                    </span>
                    {isPlaying && (
                      <span className="qurra-audio-bars" aria-hidden="true">
                        <span className="bar b1" />
                        <span className="bar b2" />
                        <span className="bar b3" />
                        <span className="bar b4" />
                      </span>
                    )}
                  </button>
                  <audio
                    ref={audioRef}
                    src="/bg-audio.mp3"
                    loop
                    preload="metadata"
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              </header>

              <div className="qurra-story-body">
                <div className="qurra-float-image desktop-only">
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
                      <div key={idx} className="qurra-divider-group">
                        {idx < 20 && (
                          <div className="qurra-mid-image mobile-only">
                            <img src="/bg-ambient.png" alt="Catatan Rasuk Ke Jiwa" loading="lazy" />
                          </div>
                        )}
                        <div className="qurra-section-divider">
                          <span>❧</span>
                        </div>
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
