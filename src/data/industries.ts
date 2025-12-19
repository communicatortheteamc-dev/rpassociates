export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  services: string[];
  image: string;
}

export const industries: Industry[] = [
  {
    id: 'power-energy',
    name: 'Power & Energy',
    icon: 'Zap',
    description: 'Comprehensive environmental solutions for thermal, hydro, and renewable energy projects.',
    services: [
      'EIA for Power Plants',
      'Emission Monitoring',
      'Ash Management',
      'Water Quality Monitoring',
      'Environmental Clearances'
    ],
    image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    icon: 'Pill',
    description: 'Specialized services for pharmaceutical manufacturing and R&D facilities.',
    services: [
      'Effluent Treatment',
      'Air Quality Monitoring',
      'Hazardous Waste Management',
      'Compliance Audits',
      'Clean Room Monitoring'
    ],
    image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'steel-metals',
    name: 'Steel & Metals',
    icon: 'Factory',
    description: 'Environmental management solutions for metal processing and manufacturing industries.',
    services: [
      'Stack Emission Monitoring',
      'Dust Control Solutions',
      'Wastewater Treatment',
      'Environmental Audits',
      'Clearance Support'
    ],
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'chemicals',
    name: 'Chemical & Petrochemical',
    icon: 'Beaker',
    description: 'Specialized environmental services for chemical and petrochemical industries.',
    services: [
      'Hazardous Waste Management',
      'VOC Monitoring',
      'Safety Audits',
      'Emergency Response Planning',
      'Process Safety Management'
    ],
    image: 'https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'cement',
    name: 'Cement',
    icon: 'Building2',
    description: 'Environmental compliance solutions for cement manufacturing facilities.',
    services: [
      'CEMS Installation',
      'Particulate Monitoring',
      'Ambient Air Quality',
      'Fuel Analysis',
      'Environmental Clearances'
    ],
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'textile',
    name: 'Textile',
    icon: 'Shirt',
    description: 'Sustainable solutions for textile processing and dyeing industries.',
    services: [
      'ZLD Systems',
      'Color Removal',
      'Water Recycling',
      'Chemical Testing',
      'Compliance Monitoring'
    ],
    image: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'mining',
    name: 'Mining & Minerals',
    icon: 'Mountain',
    description: 'Environmental impact management for mining and mineral processing operations.',
    services: [
      'Mine Closure Plans',
      'Dust Suppression',
      'Water Management',
      'Biodiversity Assessment',
      'Reclamation Services'
    ],
    image: 'https://images.pexels.com/photos/416437/pexels-photo-416437.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    icon: 'Coffee',
    description: 'Environmental and hygiene services for food processing industries.',
    services: [
      'Wastewater Treatment',
      'Microbiological Testing',
      'Hygiene Audits',
      'Odor Control',
      'Waste to Energy'
    ],
    image: 'https://images.pexels.com/photos/4116721/pexels-photo-4116721.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
