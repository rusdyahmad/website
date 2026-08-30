import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const PAYLOAD = {"s":"5YHsonjnbj4ZEYmPqXQ4zQ==","iv":"5Q5V+Zun3ir8Cg0C","d":"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"};

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
