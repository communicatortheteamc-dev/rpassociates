import { Building2, Users } from 'lucide-react';
import { clients } from '../data/clients';

export default function Clients() {
  const industries = Array.from(new Set(clients.map(c => c.industry)));

  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Clients</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Trusted by leading organizations across India for environmental excellence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="mx-auto text-emerald-600 mb-4" size={48} />
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600 text-lg">Satisfied Clients</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Building2 className="mx-auto text-emerald-600 mb-4" size={48} />
              <div className="text-4xl font-bold text-gray-800 mb-2">{industries.length}+</div>
              <div className="text-gray-600 text-lg">Industry Sectors</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Building2 className="mx-auto text-emerald-600 mb-4" size={48} />
              <div className="text-4xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600 text-lg">States Covered</div>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to partner with some of India's most respected organizations across various sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-emerald-500 hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-emerald-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg">{client.name}</h3>
                    <p className="text-sm text-gray-600">{client.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-700 to-teal-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Growing List of Clients</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
              Experience the difference of working with certified environmental experts committed to your success.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                RP Enviro Associates helped us achieve environmental clearance for our expansion project in record time. Their expertise and professionalism are commendable.
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">Mr. Rajesh Kumar</div>
                <div className="text-sm text-gray-600">Environmental Manager, Steel Industry</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The laboratory services are outstanding. NABL accreditation ensures we get accurate and reliable results that meet all regulatory requirements.
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">Dr. Priya Sharma</div>
                <div className="text-sm text-gray-600">Quality Head, Pharmaceutical Company</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-emerald-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Their team designed an efficient ETP system that not only meets compliance but also reduced our operational costs significantly.
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">Mr. Anil Patel</div>
                <div className="text-sm text-gray-600">Plant Manager, Textile Industry</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
