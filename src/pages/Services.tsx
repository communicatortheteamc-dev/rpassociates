import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Comprehensive environmental solutions tailored to meet your industry's unique requirements.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-emerald-500 hover:shadow-xl transition group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition">
                      <IconComponent className="text-emerald-600 group-hover:text-white transition" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-700 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.shortDescription}</p>
                    <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700">
                      Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every industry has unique challenges. Our team can design customized environmental solutions to meet your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            <span>Contact Our Experts</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
