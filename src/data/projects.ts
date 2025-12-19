export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  shortDescription: string;
  image: string;
  fullDescription: string;
  scope: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: 'thermal-power-eia',
    title: 'Environmental Impact Assessment - Thermal Power Plant',
    client: 'Major Power Corporation',
    location: 'Maharashtra, India',
    year: '2023',
    category: 'EIA Studies',
    shortDescription: 'Comprehensive EIA study for 1200 MW thermal power plant project including environmental clearance support.',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Conducted a comprehensive Environmental Impact Assessment for a proposed 1200 MW coal-based thermal power plant. The project involved baseline data collection, impact prediction, and mitigation measures design.',
    scope: [
      'Baseline Environmental Data Collection',
      'Air Quality Modeling',
      'Water Resource Assessment',
      'Socio-Economic Studies',
      'Public Consultation Process',
      'EMP Development',
      'Environmental Clearance Application'
    ],
    outcomes: [
      'Successfully obtained Environmental Clearance',
      'Identified key mitigation measures',
      'Developed comprehensive monitoring plan',
      'Smooth public hearing process',
      'Project approved by regulatory authorities'
    ]
  },
  {
    id: 'pharmaceutical-etp',
    title: 'Effluent Treatment Plant Design - Pharmaceutical Unit',
    client: 'Leading Pharmaceutical Company',
    location: 'Gujarat, India',
    year: '2023',
    category: 'Pollution Control',
    shortDescription: 'Design and commissioning of advanced ETP for pharmaceutical wastewater treatment.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Designed and commissioned a state-of-the-art Effluent Treatment Plant capable of treating complex pharmaceutical wastewater to meet stringent discharge standards.',
    scope: [
      'Wastewater Characterization',
      'Process Design',
      'Equipment Selection',
      'Installation Supervision',
      'Commissioning and Trial Run',
      'Operator Training',
      'Performance Guarantee Testing'
    ],
    outcomes: [
      'Achieved 95% COD reduction',
      'Met all discharge standards',
      'Reduced water consumption by 40%',
      'Zero Liquid Discharge achieved',
      'Client satisfaction and ongoing support contract'
    ]
  },
  {
    id: 'cement-plant-monitoring',
    title: 'Continuous Emission Monitoring - Cement Plant',
    client: 'Cement Manufacturing Group',
    location: 'Rajasthan, India',
    year: '2024',
    category: 'Environmental Monitoring',
    shortDescription: 'Installation and monitoring of CEMS for stack emissions compliance.',
    image: 'https://images.pexels.com/photos/573803/pexels-photo-573803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Implemented a comprehensive Continuous Emission Monitoring System for a cement manufacturing facility to ensure real-time compliance with air quality standards.',
    scope: [
      'CEMS Installation',
      'Calibration and Validation',
      'Online Data Transmission',
      'Monthly Compliance Reporting',
      'Stack Monitoring',
      'Ambient Air Quality Monitoring'
    ],
    outcomes: [
      'Real-time emission monitoring',
      'Regulatory compliance achieved',
      'Reduced non-compliance penalties',
      'Data-driven process optimization',
      'Extended contract for three years'
    ]
  },
  {
    id: 'textile-zld',
    title: 'Zero Liquid Discharge System - Textile Industry',
    client: 'Textile Processing Unit',
    location: 'Tamil Nadu, India',
    year: '2023',
    category: 'Pollution Control',
    shortDescription: 'Complete ZLD system implementation for textile dyeing and processing unit.',
    image: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Designed and implemented a Zero Liquid Discharge system for a textile processing facility, enabling complete water recycling and zero wastewater discharge.',
    scope: [
      'Wastewater Audit',
      'Process Modification',
      'RO System Installation',
      'MEE/ATFD Installation',
      'Water Recovery System',
      'Salt Recovery Unit',
      'Training and Handholding'
    ],
    outcomes: [
      '100% wastewater recycling',
      'Zero discharge achieved',
      'Water cost savings of 60%',
      'Reduced environmental impact',
      'Industry recognition award'
    ]
  },
  {
    id: 'chemical-safety-audit',
    title: 'Safety and Environmental Audit - Chemical Complex',
    client: 'Petrochemical Corporation',
    location: 'Gujarat, India',
    year: '2024',
    category: 'Environmental Audits',
    shortDescription: 'Comprehensive safety and environmental compliance audit for petrochemical facility.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Conducted a detailed safety and environmental audit of a large petrochemical complex, identifying gaps and providing actionable recommendations.',
    scope: [
      'Facility Inspection',
      'Document Review',
      'Compliance Assessment',
      'Risk Assessment',
      'Gap Analysis',
      'Corrective Action Plan',
      'Follow-up Audit'
    ],
    outcomes: [
      'Identified 45 improvement areas',
      'Developed prioritized action plan',
      'Improved compliance rating',
      'Enhanced safety culture',
      'Reduced incident rate by 70%'
    ]
  },
  {
    id: 'steel-plant-clearance',
    title: 'Environmental Clearance - Steel Manufacturing Plant',
    client: 'Steel Industries Ltd.',
    location: 'Odisha, India',
    year: '2023',
    category: 'EIA Studies',
    shortDescription: 'EC and CTE obtainment for greenfield steel plant with 2 MTPA capacity.',
    image: 'https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    fullDescription: 'Managed the complete environmental clearance process for a greenfield steel plant, including EIA, public hearing, and regulatory submissions.',
    scope: [
      'Rapid EIA Study',
      'Baseline Data Collection',
      'Impact Assessment',
      'Public Hearing Coordination',
      'EC Application and Follow-up',
      'CTE Application',
      'State and Central Clearances'
    ],
    outcomes: [
      'EC obtained in record time',
      'Successful public hearing',
      'CTE granted without objections',
      'Forest clearance facilitated',
      'Project on track for development'
    ]
  }
];
