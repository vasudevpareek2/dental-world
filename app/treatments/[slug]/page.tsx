import Image from "next/image";
import Link from "next/link";
import { TREATMENTS } from "../../constants";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import AppointmentButton from "../../components/AppointmentButton";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export default async function TreatmentCaseStudiesPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="treatments" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/treatments"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Treatments
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={treatment.coverImage}
                  alt={`${treatment.name} - Dental World Jaipur | Best Dental Solutions in Jaipur`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {treatment.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {treatment.name} - Best Dental Solutions in Jaipur | Dental World Jaipur
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {treatment.description} At Dental World Jaipur, we provide the best dental solutions in Jaipur with expert care and advanced technology.
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{treatment.caseStudies.length} Case Studies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real patient cases and treatment outcomes
            </p>
          </div>

          <div className="space-y-12">
            {treatment.caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600">
                        Patient Age: {caseStudy.patientAge} years
                      </p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
                      Case {index + 1}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Problem
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {caseStudy.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Treatment Plan
                      </h4>
                      <p className="text-gray-700 font-semibold mb-2">
                        {caseStudy.treatment}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Procedure Steps
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {caseStudy.procedure.map((step, stepIndex) => (
                        <li key={stepIndex} className="pl-2">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Results
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudy.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in This Treatment at Dental World Jaipur?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation at our dental clinic in Jaipur to discuss your specific case and get the best dental solutions in Jaipur
          </p>
          <AppointmentButton className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-md text-lg hover:bg-blue-50 transition duration-300">
            Book Appointment
          </AppointmentButton>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">Dental World Jaipur</h3>
              <p className="text-gray-400">
                Your trusted partner for the best dental solutions in Jaipur. Comprehensive dental care and beautiful smiles at our dental clinic in Jaipur.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="text-gray-400 hover:text-white">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="text-gray-400 hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-gray-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400 space-y-2">
                <p>Sushilpura, Ajmer Rd, near community centre,</p>
                <p>Sodala, Jaipur, Rajasthan 302006</p>
                <p>Phone: 097842 60590</p>
                <p>Email: Sattysingh3285@gmail.com</p>
              </address>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold mb-4 text-white">Find Us</h4>
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.234567890123!2d75.762811!3d26.9000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db463bdfd4f73%3A0xf07e86b30000000!2sDental%20World%20%E2%80%93%20Multispeciality%20Dental%20Clinic%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1704896000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental World Jaipur Location Map - Best Dental Solutions in Jaipur"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4">
              <Link
                href="https://www.google.com/maps/dir/26.9254209,75.7329493/Dental+World+%E2%80%93+Multispeciality+Dental+Clinic,+Jaipur,+Sushilpura,+Ajmer+Rd,+near+community+centre,+Sodala,+Jaipur,+Rajasthan+302006/@26.9101162,75.7252934,13.66z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x396db463bdfd4f73:0xf07e86b30000000!2m2!1d75.764811!2d26.9000035?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Get Directions
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dental World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

