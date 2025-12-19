import * as Icons from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { industries } from '../data/industries';

export default function Industries() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Specialized environmental solutions across diverse industrial sectors.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {industries.map((industry) => {
              const IconComponent = (Icons as any)[industry.icon];
              return (
                <div key={industry.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        <IconComponent className="text-emerald-600" size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{industry.name}</h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Our Services for this Industry:</h4>
                    <ul className="space-y-3">
                      {industry.services.map((service, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            We have experience working with many other industries. Contact us to discuss your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
