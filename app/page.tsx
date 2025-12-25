import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_IMAGES, SERVICES } from './constants';
import Navigation from './components/Navigation';
import AppointmentButton from './components/AppointmentButton';
import ServicesSlider from './components/ServicesSlider';

export default function Home() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Patient',
      content: 'The best dental care I\'ve ever received. The staff is incredibly professional and caring.',
      image: 'P'
    },
    {
      id: 2,
      name: 'Amit Kumar',
      role: 'Patient',
      content: 'Painless procedures and a welcoming environment. Highly recommended!',
      image: 'A'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      role: 'Patient',
      content: 'Outstanding service and attention to detail. My smile has never looked better!',
      image: 'A'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Dental Solutions in Jaipur - Dental World Jaipur</h1>
          <p className="text-xl md:text-2xl mb-8">Your trusted dental clinic in Jaipur offering comprehensive dental care for all ages with gentle, expert professionals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AppointmentButton className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Book Appointment
            </AppointmentButton>
            <Link href="#about" className="bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 border-2 border-white rounded-md text-lg transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Our Clinic Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl p-12 md:p-16 shadow-2xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Clinic</h2>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Dental World Jaipur provides personalized dental care using the latest techniques in a comfortable environment. 
                Led by Dr. Satyendra Singh, our team is committed to delivering the best dental solutions in Jaipur 
                with state-of-the-art technology and a patient-centered approach.
              </p>
              <Link 
                href="/about"
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl text-lg transition duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Best Dental Services in Jaipur</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Dental World Jaipur offers comprehensive dental care for the whole family. We provide the best dental solutions in Jaipur 
              with a wide range of services to meet all your oral health needs using advanced technology and expert care.
            </p>
          </div>
          
          {/* Services Slider */}
          <div className="mb-12">
            <ServicesSlider />
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <Link 
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Patients Say About Dental World Jaipur</h2>
            <p className="mt-4 text-xl text-gray-600">Hear from our satisfied patients in Jaipur</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <Image
                  src="/dental logo.png"
                  alt="Dental World Jaipur"
                  width={200}
                  height={50}
                  className="h-12 w-auto object-contain mr-3"
                />
              </div>
              <p className="text-gray-400">Your trusted partner for the best dental solutions in Jaipur. Comprehensive dental care and beautiful smiles at our dental clinic in Jaipur.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/treatments" className="text-gray-400 hover:text-white">Treatments</Link></li>
                <li><Link href="/blogs" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="#gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><Link href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
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
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
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
