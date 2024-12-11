import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              At Barware (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our MacOS applications, website, and related services (collectively, the &ldquo;Services&rdquo;). By using our Services, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-gray-700">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>
                <strong>Personal Information:</strong> Information that identifies you, such as your name, email address, and Apple ID, which is provided when you interact with us or purchase our applications through the App Store.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our applications, including device type, operating system, and unique device identifiers.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about your interactions with our applications, such as app features used, crash logs, and performance data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-700">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>To provide, maintain, and improve our applications and Services.</li>
              <li>To communicate with you, including responding to your inquiries and sending updates about our applications.</li>
              <li>To analyze usage trends and improve user experience.</li>
              <li>To comply with legal obligations and enforce our terms and conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Sharing Your Information</h2>
            <p className="text-gray-700">
              We do not sell your personal information. We may share your information in the following cases:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>With Service Providers:</strong> Third-party vendors who assist us in providing our Services, such as analytics providers.</li>
              <li><strong>As Required by Law:</strong> To comply with legal obligations or respond to lawful requests from authorities.</li>
              <li><strong>In Business Transactions:</strong> In connection with a merger, sale, or other transfer of assets, your information may be transferred as part of that process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
            <p className="text-gray-700">
              We implement reasonable administrative, technical, and physical security measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-gray-700">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Access and review the information we hold about you.</li>
              <li>Request corrections to inaccurate or incomplete information.</li>
              <li>Request the deletion of your information, subject to legal obligations.</li>
              <li>Withdraw consent for data processing where applicable.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              To exercise these rights, contact us at support@barware.io.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Third-Party Services</h2>
            <p className="text-gray-700">
              Our applications may include links to third-party services, such as the Apple App Store. We are not responsible for the privacy practices of these third parties and encourage you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our applications are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, contact us at support@barware.io, and we will take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated date. Your continued use of our Services after such changes indicates your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <address className="mt-2 not-italic text-gray-700">
              Barware<br />
              Azerbaijan, Baku<br />
              support@barware.io
            </address>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: 11.12.2024
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 