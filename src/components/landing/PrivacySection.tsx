import { Shield, Lock, Eye, Server } from "lucide-react";

export function PrivacySection() {
  return (
    <section className="py-20 md:py-32 relative border-t border-border" id="privacy">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="section-label">[ PRIVACY POLICY ]</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Your Data Stays on <span className="text-primary">Your Mac</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Lectern AI is built with privacy as a core principle. We collect
            zero data.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="cyber-card p-6">
              <Lock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">No Data Collection</h3>
              <p className="text-sm text-muted-foreground">
                Lectern AI does not collect, store, or transmit any personal
                data. There are no analytics, no tracking cookies, no telemetry,
                and no user accounts.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Server className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">No Servers</h3>
              <p className="text-sm text-muted-foreground">
                We operate zero servers. Your presentation content is sent
                directly from your Mac to the AI provider you choose (e.g.,
                MiniMax, Google Gemini). We never see your data.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">BYOK — Bring Your Own Key</h3>
              <p className="text-sm text-muted-foreground">
                You provide your own API keys from third-party AI providers.
                Keys are stored locally in the macOS Keychain on your device.
                They are never sent to us.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Eye className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Fully Sandboxed</h3>
              <p className="text-sm text-muted-foreground">
                Lectern AI runs in the macOS App Sandbox with minimal
                entitlements: network access (for AI API calls), user-selected
                file access, and print. No other system access.
              </p>
            </div>
          </div>

          <div className="cyber-card p-8 text-sm text-muted-foreground space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              Privacy Policy — Lectern AI
            </h3>
            <p>
              <strong>Effective Date:</strong> April 7, 2026
              <br />
              <strong>Developer:</strong> Remnant Security Group LLC
              <br />
              <strong>Contact:</strong> support@remnantsecurity.com
            </p>
            <p>
              <strong>Information We Collect:</strong> None. Lectern AI does not
              collect any personal information, usage data, crash reports,
              analytics, or diagnostic information.
            </p>
            <p>
              <strong>Third-Party Services:</strong> When you use the app to
              generate talk tracks, your slide content (text extracted from your
              presentation) is sent directly from your device to the third-party
              AI service provider you selected and configured with your own API
              key. We are not a party to that transaction. Please review the
              privacy policy of the AI provider you choose.
            </p>
            <p>
              <strong>API Key Storage:</strong> API keys you enter are stored
              locally on your Mac using the macOS Keychain and UserDefaults.
              They are never transmitted to Remnant Security Group LLC or any
              other party.
            </p>
            <p>
              <strong>Children's Privacy:</strong> Lectern AI does not knowingly
              collect data from children under 13.
            </p>
            <p>
              <strong>Changes:</strong> We may update this policy from time to
              time. The latest version will always be available at this URL.
            </p>
            <p>
              <strong>Terms of Use:</strong>{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Apple Standard EULA
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
