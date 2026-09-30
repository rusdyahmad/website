import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <SEO
        title="404 — Route Not Found // RA/SYS"
        description="The requested route does not exist on this system."
        path="/404"
      />

      <div className="back-strip">
        <Link to="/" className="back-link">
          ← cd / // return_to_root
        </Link>
        <span className="dim">~/error/404</span>
      </div>

      <section className="error-page px">
        <div className="error-card rv in">
          <div className="term-h" style={{ marginBottom: "16px" }}>
            <span>SYS_DIAGNOSTIC // ERROR</span>
            <span style={{ color: "var(--warn)" }}>HTTP_STATUS: 404</span>
          </div>

          <span className="tag xs up">[ERR] // route_execution_failure</span>
          <h1 className="error-title">404.</h1>
          <p className="lead" style={{ color: "var(--fg-2)", marginBottom: "20px" }}>
            zsh: no such file or directory: <code>{location.pathname || "/unknown"}</code>
          </p>

          <table className="sys" style={{ marginBottom: "28px" }}>
            <tbody>
              <tr>
                <td>FAULT CODE</td>
                <td style={{ color: "var(--warn)" }}>ERR_ROUTE_NOT_FOUND</td>
              </tr>
              <tr>
                <td>SUGGESTION</td>
                <td>Run <code>cd /</code> or select an active project branch</td>
              </tr>
              <tr>
                <td>STATUS</td>
                <td>System ready for input</td>
              </tr>
            </tbody>
          </table>

          <div className="btns">
            <Link className="btn p" to="/">
              ./cd_home
            </Link>
            <a className="btn" href="/#work">
              ./list_builds
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
