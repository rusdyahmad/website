import Seo from "../../components/Seo.tsx";

export default function BarakatMakkiyyahPrivacy() {
  const title = "Barakat Makkiyyah - Privacy Policy";
  const description =
    "Privacy policy for Barakat Makkiyyah covering offline storage, preferences, and user choices.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/barakat-makkiyyah/privacy"
        type="article"
      />
      <section class="legal reveal">
        <div class="container legal-content">
          <a class="btn btn-ghost back-link" href="/barakat-makkiyyah">
            <span class="back-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Back to Barakat Makkiyyah
          </a>
          <p class="eyebrow">Policy</p>
          <h1>Privacy Policy</h1>
          <p class="lead">Last updated: January 14, 2026</p>

          <p>
            Barakat Makkiyyah (&quot;the App&quot;) is developed by Rusdy Ahmad.
            This privacy policy explains how the App handles information. The
            App is designed to work fully offline and prioritizes your privacy.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>1.1 Personal Data</h3>
          <p>
            <strong>We do not collect any personal data.</strong>{" "}
            The App does not collect, store, or transmit any personally
            identifiable information such as:
          </p>
          <ul>
            <li>Names, email addresses, or phone numbers</li>
            <li>Location data</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Contacts, photos, or files</li>
            <li>Financial or payment information</li>
            <li>Health or biometric data</li>
          </ul>

          <h3>1.2 Locally Stored Preferences</h3>
          <p>
            The App stores the following preferences locally on your device to
            enhance your experience:
          </p>
          <ul>
            <li>
              <strong>Language preference:</strong>{" "}
              Your selected display language (Malay, English, Arabic, Farsi, or
              Urdu)
            </li>
            <li>
              <strong>Theme setting:</strong>{" "}
              Your chosen appearance (light, dark, or system default)
            </li>
            <li>
              <strong>Font size:</strong> Your preferred text size for reading
            </li>
          </ul>
          <p>
            These preferences are stored using AsyncStorage on your device only.
            They are never transmitted to any server or third party.
          </p>

          <h2>2. How We Use Information</h2>
          <p>The locally stored preferences are used solely to:</p>
          <ul>
            <li>Display the App in your preferred language</li>
            <li>Apply your chosen visual theme</li>
            <li>Render text at your selected font size</li>
            <li>Maintain consistent settings between app sessions</li>
          </ul>

          <h2>3. Data Storage and Security</h2>
          <ul>
            <li>
              All data is stored locally on your device using encrypted device
              storage
            </li>
            <li>The App does not use cloud storage or remote databases</li>
            <li>No data is transmitted over the internet</li>
            <li>Audio content is embedded within the App and played locally</li>
          </ul>

          <h2>4. App Permissions</h2>
          <p>The App requests the following permissions for functionality:</p>
          <table>
            <thead>
              <tr>
                <th>Permission</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internet</td>
                <td>
                  Required only for opening external links (email, website) when
                  you tap on them. The App itself does not transmit any data.
                </td>
              </tr>
              <tr>
                <td>Audio Settings</td>
                <td>To control audio playback volume and settings</td>
              </tr>
              <tr>
                <td>Foreground Service</td>
                <td>
                  To continue audio playback when the App is in the background
                </td>
              </tr>
              <tr>
                <td>Wake Lock</td>
                <td>
                  To prevent the device from sleeping during audio playback
                </td>
              </tr>
              <tr>
                <td>Vibrate</td>
                <td>To provide haptic feedback for user interactions</td>
              </tr>
            </tbody>
          </table>

          <h2>5. Third-Party Services</h2>
          <p>
            <strong>The App does not integrate any third-party services</strong>
            {" "}
            for analytics, advertising, crash reporting, or tracking.
            Specifically:
          </p>
          <ul>
            <li>No Google Analytics or Firebase Analytics</li>
            <li>No advertising networks or ad SDKs</li>
            <li>No crash reporting services</li>
            <li>No social media SDKs</li>
            <li>No user behavior tracking</li>
          </ul>

          <h2>6. Data Sharing</h2>
          <p>
            <strong>We do not share any data with third parties</strong>{" "}
            because we do not collect any data. Your preferences remain on your
            device and are never transmitted elsewhere.
          </p>

          <h2>7. Data Retention and Deletion</h2>
          <ul>
            <li>
              Preferences remain on your device until you clear app data or
              uninstall the App
            </li>
            <li>
              To delete all stored preferences, go to your device Settings &gt;
              Apps &gt; Barakat Makkiyyah &gt; Storage &gt; Clear Data
            </li>
            <li>Uninstalling the App removes all locally stored data</li>
          </ul>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            The App contains religious educational content suitable for all
            ages. Since the App does not collect any personal data, it complies
            with the Children&apos;s Online Privacy Protection Act (COPPA) and
            similar regulations.
          </p>

          <h2>9. External Links</h2>
          <p>
            The App may contain links to external websites (such as the
            developer&apos;s website or email). These links open in your
            device&apos;s browser or email app. We are not responsible for the
            privacy practices of external websites.
          </p>

          <h2>10. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Use the App without providing any personal information</li>
            <li>Delete all locally stored preferences at any time</li>
            <li>Uninstall the App to remove all associated data</li>
          </ul>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be reflected in the &quot;Last updated&quot; date at the top of
            this page. Continued use of the App after changes constitutes
            acceptance of the updated policy.
          </p>

          <h2>12. Google Play Data Safety</h2>
          <p>In accordance with Google Play&apos;s Data Safety requirements:</p>
          <ul>
            <li>
              <strong>Data collected:</strong> None
            </li>
            <li>
              <strong>Data shared:</strong> None
            </li>
            <li>
              <strong>Security practices:</strong>{" "}
              Data is encrypted in transit (not applicable as no data is
              transmitted); Data cannot be deleted by user request (preferences
              can be cleared via device settings)
            </li>
          </ul>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions or concerns about this privacy policy or the
            App&apos;s privacy practices, please contact:
          </p>
          <p>
            <strong>Rusdy Ahmad</strong>
            <br />
            Email:{" "}
            <a href="mailto:rusdyahmad@gmail.com">rusdyahmad@gmail.com</a>
            <br />
            Website:{" "}
            <a
              href="https://rusdy.com/barakat-makkiyyah"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rusdy.com/barakat-makkiyyah
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
