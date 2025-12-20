import * as Icons from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Certifications</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Recognized and accredited by leading national and international regulatory bodies.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quality You Can Trust</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications and accreditations demonstrate our commitment to maintaining the highest standards of quality, accuracy, and reliability in all our services.
            </p>
          </div>
<img src="src/assets/certificate.jpeg" alt="Certifications" className="w-full  object-cover rounded-xl mb-12 shadow-lg border border-gray-200" />
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = (Icons as any)[cert.icon];
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-emerald-500 hover:shadow-xl transition">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-emerald-600" size={36} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                      <p className="text-emerald-600 font-medium mb-3">{cert.issuedBy}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="bg-gray-100 px-3 py-1 rounded">Year: {cert.year}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded">Cert. No: {cert.certificateNumber}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Certifications Matter</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our certifications are not just badges of honor, they represent our unwavering commitment to excellence and our capability to deliver services that meet international standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Regulatory Compliance</h3>
                    <p className="text-gray-600">Our certifications ensure all our services meet statutory requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quality Assurance</h3>
                    <p className="text-gray-600">Certified processes guarantee accuracy and reliability in results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">International Recognition</h3>
                    <p className="text-gray-600">Our certifications are recognized globally, adding credibility to your projects.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Continuous Improvement</h3>
                    <p className="text-gray-600">Regular audits ensure we maintain and improve our standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Certifications"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Partner with Certified Experts</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
              Work with a team that holds the credentials to back their expertise.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
