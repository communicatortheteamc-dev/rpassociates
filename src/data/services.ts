export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'environmental-monitoring',
    title: 'Environmental Monitoring',
    shortDescription: 'Comprehensive environmental testing and monitoring services for air, water, and soil quality.',
    icon: 'TestTube',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Our environmental monitoring services provide comprehensive analysis of air, water, and soil quality. We use state-of-the-art equipment and methodologies to ensure accurate results that help you maintain compliance with environmental regulations.',
    features: [
      'Air Quality Monitoring',
      'Water Quality Analysis',
      'Soil Testing and Analysis',
      'Noise Level Measurement',
      'Stack Emission Monitoring',
      '24/7 Emergency Response'
    ],
    benefits: [
      'Regulatory Compliance',
      'Accurate Data Collection',
      'Expert Analysis',
      'Quick Turnaround Time',
      'Certified Methodologies'
    ]
  },
  {
    id: 'laboratory-testing',
    title: 'Laboratory Testing Services',
    shortDescription: 'Advanced laboratory testing with NABL accredited facilities and certified methodologies.',
    icon: 'Microscope',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Our NABL accredited laboratories provide comprehensive testing services across multiple parameters. We ensure accuracy and reliability in every test we conduct.',
    features: [
      'Chemical Analysis',
      'Microbiological Testing',
      'Physical Parameter Testing',
      'Heavy Metal Analysis',
      'Organic Compound Testing',
      'NABL Accredited Reports'
    ],
    benefits: [
      'ISO Certified Processes',
      'Accurate Results',
      'Fast Report Generation',
      'Expert Interpretation',
      'Legal Validity'
    ]
  },
  {
    id: 'eia-studies',
    title: 'EIA & Clearance Services',
    shortDescription: 'Environmental Impact Assessment and statutory clearance services for industrial projects.',
    icon: 'FileText',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'We provide comprehensive Environmental Impact Assessment services to help industries obtain necessary environmental clearances from regulatory authorities.',
    features: [
      'EIA Report Preparation',
      'Public Hearing Support',
      'Environmental Clearance',
      'CRZ Clearance',
      'Forest Clearance',
      'Compliance Monitoring'
    ],
    benefits: [
      'Experienced Consultants',
      'Regulatory Expertise',
      'End-to-End Support',
      'Time-Efficient Process',
      'High Success Rate'
    ]
  },
  {
    id: 'pollution-control',
    title: 'Pollution Control Solutions',
    shortDescription: 'Design and implementation of effective pollution control systems for industries.',
    icon: 'Wind',
    image: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'We design and implement customized pollution control solutions to help industries minimize their environmental footprint and achieve compliance.',
    features: [
      'Effluent Treatment Plants',
      'Air Pollution Control Systems',
      'Solid Waste Management',
      'Hazardous Waste Handling',
      'Process Optimization',
      'Compliance Audits'
    ],
    benefits: [
      'Custom Solutions',
      'Cost-Effective Designs',
      'Proven Technologies',
      'Ongoing Support',
      'Regulatory Compliance'
    ]
  },
  {
    id: 'occupational-health',
    title: 'Occupational Health & Safety',
    shortDescription: 'Workplace safety assessments and occupational health monitoring services.',
    icon: 'Shield',
    image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Our occupational health and safety services ensure a safe working environment for your employees while maintaining regulatory compliance.',
    features: [
      'Industrial Hygiene Surveys',
      'Personal Protective Equipment',
      'Health Risk Assessment',
      'Safety Audits',
      'Training Programs',
      'Emergency Response Plans'
    ],
    benefits: [
      'Employee Safety',
      'Reduced Accidents',
      'Legal Compliance',
      'Improved Productivity',
      'Risk Mitigation'
    ]
  },
  {
    id: 'environmental-audits',
    title: 'Environmental Audits',
    shortDescription: 'Comprehensive environmental compliance audits and sustainability assessments.',
    icon: 'ClipboardCheck',
    image: 'https://images.pexels.com/photos/8761744/pexels-photo-8761744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'We conduct thorough environmental audits to assess compliance with environmental regulations and identify opportunities for improvement.',
    features: [
      'Compliance Audits',
      'Sustainability Assessments',
      'Carbon Footprint Analysis',
      'Waste Management Audits',
      'Energy Efficiency Studies',
      'Gap Analysis Reports'
    ],
    benefits: [
      'Identify Non-Compliance',
      'Cost Savings',
      'Improved Performance',
      'Stakeholder Confidence',
      'Risk Management'
    ]
  }
];
