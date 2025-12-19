import { CheckCircle, Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About RP Enviro Associates</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Leading the way in environmental consulting and laboratory services since 2008.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                RP Enviro Associates Labs and Consultants is a premier environmental consulting firm and NABL accredited testing laboratory based in India. With over 15 years of experience, we have established ourselves as trusted partners for industries seeking comprehensive environmental solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team comprises highly qualified environmental scientists, engineers, and technical experts who bring deep domain knowledge and practical experience to every project. We serve a diverse range of industries including power, pharmaceuticals, chemicals, cement, steel, textiles, and mining.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a NABL accredited laboratory and NABET accredited consultant, we maintain the highest standards of quality and accuracy in all our services. Our commitment to excellence has earned us the trust of over 500 clients across India.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Laboratory"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-emerald-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-emerald-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide accurate, reliable, and timely environmental testing and consulting services that enable industries to achieve sustainable operations while maintaining full regulatory compliance. We strive to be the most trusted partner in environmental management.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-emerald-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be recognized as India's leading environmental consulting and testing organization, known for technical excellence, innovation, and unwavering commitment to environmental protection and sustainable development for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards in all our operations and interactions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering superior quality in every service we provide.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously adopt new technologies and methodologies for better results.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We promote environmental stewardship and sustainable business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Accreditations</h2>
            <p className="text-xl text-emerald-100">
              Recognized and certified by leading national and international bodies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-center">
              <Award className="mx-auto mb-4 text-emerald-200" size={48} />
              <h3 className="text-2xl font-bold mb-2">NABL Accredited</h3>
              <p className="text-emerald-100">
                National Accreditation Board for Testing and Calibration Laboratories
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-center">
              <Award className="mx-auto mb-4 text-emerald-200" size={48} />
              <h3 className="text-2xl font-bold mb-2">NABET Accredited</h3>
              <p className="text-emerald-100">
                Quality Council of India for Environmental Impact Assessment
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-center">
              <Award className="mx-auto mb-4 text-emerald-200" size={48} />
              <h3 className="text-2xl font-bold mb-2">ISO Certified</h3>
              <p className="text-emerald-100">
                ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
