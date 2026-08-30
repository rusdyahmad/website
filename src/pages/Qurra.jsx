import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const PAYLOAD = {"s":"Kt23kxhJHi3/d/oJnG56uw==","iv":"XZhF62eR06+codom","d":"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"};

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
                        {idx < 15 && (
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
