import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Briefcase, TrendingUp, Leaf } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div>
      <section className="relative h-[600px] bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/src/assets/pexels-asphotography-1002703.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.50
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Environmental Excellence Through Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              NABL & NABET accredited environmental consultants providing comprehensive testing, monitoring, and compliance solutions for industries across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition border-2 border-white shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <Users className="mx-auto text-emerald-600 mb-4" size={48} />
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6">
              <Briefcase className="mx-auto text-emerald-600 mb-4" size={48} />
              <div className="text-4xl font-bold text-gray-800 mb-2">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <Award className="mx-auto text-emerald-600 mb-4" size={48} />
              <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6">
              <TrendingUp className="mx-auto text-emerald-600 mb-4" size={48} />
              <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-emerald-300 via-white to-lime-00">

        {/* Animated eco grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.15)_1px,transparent_0)] bg-[size:32px_32px] animate-[gridMove_30s_linear_infinite]" />
<div
  className="absolute inset-0 -z-25 bg-center bg-cover bg-no-repeat opacity-40"
  style={{
    backgroundImage: `url('/src/assets/eco-bg.jpg')`,
  }}
/>
        {/* Floating soft shapes */}
        <div className="absolute top-24 left-16 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-200/30 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 text-emerald-700 font-semibold tracking-wide uppercase">
              Why RP Enviro Associates
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Environmental Compliance,<br /> Simplified & Strategic
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              We don’t just prepare reports — we guide industries through complex
              environmental regulations with clarity, foresight, and regulatory confidence.
            </p>

            <ul className="space-y-5">
              {[
                "End-to-end environmental clearance support",
                "Strong regulatory and compliance understanding",
                "Practical, field-driven environmental solutions",
                "Trusted by industries across multiple sectors"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle size={18} className="text-emerald-600" />
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Story */}
          <div className="relative">

            {/* Vertical timeline card */}
            <div className="bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-3xl p-10 shadow-xl">

              <div className="space-y-8">

                {[
                  { title: "Assessment", desc: "Site studies, baseline data & feasibility analysis" },
                  { title: "Planning", desc: "EIA, EMP, risk assessment & regulatory strategy" },
                  { title: "Approvals", desc: "MoEF, SEIAA, PCB coordination & clearances" },
                  { title: "Compliance", desc: "Monitoring, audits & statutory reporting" }
                ].map((step, i) => (
                  <div key={i} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-4 h-4 bg-emerald-500 rounded-full" />
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* Floating stats */}
            {/* <div className="absolute -top-10 -right-10 bg-white rounded-2xl shadow-lg px-6 py-4 animate-[float_12s_ease-in-out_infinite]">
        <p className="text-3xl font-bold text-emerald-600">15+ yrs</p>
        <p className="text-sm text-gray-600">Regulatory Experience</p>
      </div>

      <div className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-lg px-6 py-4 animate-[float_16s_ease-in-out_infinite]">
        <p className="text-3xl font-bold text-emerald-600">100+</p>
        <p className="text-sm text-gray-600">Projects Guided</p>
      </div> */}

          </div>
        </div>
      </section>



      <section className="relative py-2 overflow-hidden">
        {/* 1. The Smooth Background Gradient (Sky to Grass) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] via-[#f0fdf4] to-[#dcfce7] -z-10" />
       
        {/* 2. Soft Decorative Elements (Mimicking the image style) */}
        <div className="absolute top-10 right-[-5%] w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-[-5%] w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />

        {/* Optional: Floating Leaf Decoration */}
        <div className="absolute top-20 left-10 opacity-20 animate-bounce transition-all duration-1000">
          <Leaf className="text-emerald-600 transform rotate-45" size={40} />
        </div>
<div>
   <div
          className="absolute inset-0 -z-25 bg-center bg-cover bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/src/assets/eco-bg1.jpg')`,
          }}
        />
</div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
              Our <span className="text-emerald-600">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Protecting our planet through innovative environmental engineering and
              sustainable industrial practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.slice(0, 6).map((service) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group relative"
                >
                  {/* 3. Glassmorphism Card Style */}
                  <div className="h-full bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 hover:-translate-y-3">

                    {/* Icon Container with Soft Glow */}
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200 group-hover:rotate-6 transition-transform">
                      <IconComponent className="text-white" size={30} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-8">
                      {service.shortDescription}
                    </p>

                    <div className="flex items-center text-emerald-600 font-bold uppercase text-xs tracking-widest">
                      Explore Solution
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* 4. The "Smooth" Call to Action */}
          <div className="text-center mt-20">
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-4 bg-emerald-600 text-white rounded-full font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all active:scale-95"
            >
              Explore All Services
            </Link>
          </div>
        </div>

        {/* 5. Cityscape/Leaf Background Watermark (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 pointer-events-none">
          {/* You can place your uploaded image as a background-image here */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('/path-to-your-image.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom'
            }}
          />
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped industries achieve environmental excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-emerald-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-700 transition line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                  <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700">
                    View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Environmental Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Contact us today to discuss how we can help your organization achieve environmental compliance and sustainability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg"
          >
            <span>Contact Us Today</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
