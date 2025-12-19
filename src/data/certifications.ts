export interface Certification {
  name: string;
  issuedBy: string;
  year: string;
  certificateNumber: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    name: 'NABL Accreditation',
    issuedBy: 'National Accreditation Board for Testing and Calibration Laboratories',
    year: '2023',
    certificateNumber: 'TC-1234',
    description: 'Accreditation for testing and calibration of environmental parameters including water, air, soil, and noise.',
    icon: 'Award'
  },
  {
    name: 'NABET Accreditation',
    issuedBy: 'National Accreditation Board for Education and Training',
    year: '2023',
    certificateNumber: 'NABET/EIA/2345',
    description: 'Accreditation for conducting Environmental Impact Assessment studies for various categories of projects.',
    icon: 'Award'
  },
  {
    name: 'ISO 9001:2015',
    issuedBy: 'International Organization for Standardization',
    year: '2023',
    certificateNumber: 'ISO-9001-3456',
    description: 'Quality Management System certification ensuring consistent delivery of quality services.',
    icon: 'Award'
  },
  {
    name: 'ISO 14001:2015',
    issuedBy: 'International Organization for Standardization',
    year: '2023',
    certificateNumber: 'ISO-14001-4567',
    description: 'Environmental Management System certification demonstrating commitment to environmental responsibility.',
    icon: 'Award'
  },
  {
    name: 'ISO 45001:2018',
    issuedBy: 'International Organization for Standardization',
    year: '2023',
    certificateNumber: 'ISO-45001-5678',
    description: 'Occupational Health and Safety Management System certification ensuring workplace safety.',
    icon: 'Award'
  },
  {
    name: 'MoEF&CC Recognition',
    issuedBy: 'Ministry of Environment, Forest and Climate Change',
    year: '2023',
    certificateNumber: 'MOEF-6789',
    description: 'Recognition as approved consultant for environmental studies and monitoring by Government of India.',
    icon: 'Award'
  }
];
