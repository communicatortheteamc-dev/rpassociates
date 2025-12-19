import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, CheckCircle, Target } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
          <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {project.category}
          </div>
          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-emerald-100">
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
              />

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Target className="text-emerald-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Scope of Work</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.scope.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Key Outcomes</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.outcomes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-8 sticky top-24 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-semibold text-gray-800">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-semibold text-gray-800">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Year</div>
                    <div className="font-semibold text-gray-800">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-semibold text-gray-800">{project.category}</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Interested in Similar Projects?</h4>
                  <Link
                    to="/contact"
                    className="block w-full bg-emerald-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(relatedProject => (
                <Link
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-emerald-600 font-medium mb-2">{relatedProject.category}</div>
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-emerald-700 transition">
                      {relatedProject.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
