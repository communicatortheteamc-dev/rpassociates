import { useParams, Link, Navigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = (Icons as any)[service.icon];

  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <IconComponent size={32} />
            </div>
            <h1 className="text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-3xl">{service.shortDescription}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
              />

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Started Today</h3>
                <p className="text-gray-600 mb-6">
                  Ready to implement this service for your organization? Contact us for a detailed consultation.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-emerald-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition mb-4"
                >
                  Request a Quote
                </Link>
                <div className="border-t border-emerald-200 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Related Services</h4>
                  <div className="space-y-3">
                    {services
                      .filter(s => s.id !== service.id)
                      .slice(0, 3)
                      .map(relatedService => (
                        <Link
                          key={relatedService.id}
                          to={`/services/${relatedService.id}`}
                          className="block text-emerald-700 hover:text-emerald-800 font-medium"
                        >
                          {relatedService.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
