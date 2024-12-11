import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Header />
      
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Barware (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of our website, products, and services (collectively referred to as &ldquo;Services&rdquo;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Eligibility</h2>
            <p className="text-gray-700">
              By using our Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement. If you are using our Services on behalf of a company or organization, you represent that you have the authority to bind such entity to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Products and Services</h2>
            <p className="text-gray-700">
              We strive to ensure that our MacOS applications are accurately described on our website. However, we do not guarantee that product descriptions, features, or other content are error-free. All applications are subject to updates and availability, and we reserve the right to modify or discontinue any application at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Pricing and Payment</h2>
            <p className="text-gray-700">
              Our MacOS applications are available for purchase exclusively through the Apple App Store. Pricing is determined by the App Store and may vary based on location and currency. Payments are processed securely by Apple, and all applicable App Store terms and conditions apply. We reserve the right to introduce pricing or subscription models in the future, which will be communicated in advance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Shipping and Delivery</h2>
            <p className="text-gray-700">
              As our MacOS applications are delivered digitally, no shipping is required. Upon successful download, the user assumes all responsibility for the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Returns and Refunds</h2>
            <p className="text-gray-700">
              As our MacOS applications are provided free of charge, there are no returns or refunds. If you encounter any issues, please contact us at support@barware.io for support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
            <p className="text-gray-700">
              All content, trademarks, logos, and designs on our website are the property of Barware or our licensors and are protected by intellectual property laws. You may not use our intellectual property without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, we are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of our Services. Our total liability for any claims relating to our Services is limited to the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold us harmless from any claims, damages, or expenses (including legal fees) arising from your use of our Services or breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Privacy</h2>
            <p className="text-gray-700">
              Your use of our Services is subject to our Privacy Policy, which can be found at https://barware.io/privacy-policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of Azerbaijan. Any disputes arising under these Terms shall be resolved exclusively in the courts of Azerbaijan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. Any changes will be posted on our website with the updated date. Continued use of our Services constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">13. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
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