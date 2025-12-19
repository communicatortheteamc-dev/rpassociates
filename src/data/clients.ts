export interface Client {
  name: string;
  logo?: string;
  industry: string;
}

export const clients: Client[] = [
  { name: 'Tata Steel', industry: 'Steel & Mining' },
  { name: 'Reliance Industries', industry: 'Petrochemicals' },
  { name: 'NTPC Limited', industry: 'Power Generation' },
  { name: 'Sun Pharma', industry: 'Pharmaceuticals' },
  { name: 'UltraTech Cement', industry: 'Cement' },
  { name: 'Aditya Birla Group', industry: 'Diversified' },
  { name: 'JSW Steel', industry: 'Steel' },
  { name: 'Vedanta Limited', industry: 'Mining & Metals' },
  { name: 'Ambuja Cement', industry: 'Cement' },
  { name: 'Hindalco Industries', industry: 'Aluminum' },
  { name: 'IOCL', industry: 'Oil & Gas' },
  { name: 'BPCL', industry: 'Oil & Gas' },
  { name: 'Dr. Reddy\'s Labs', industry: 'Pharmaceuticals' },
  { name: 'Cipla', industry: 'Pharmaceuticals' },
  { name: 'Grasim Industries', industry: 'Textiles & Chemicals' },
  { name: 'ACC Limited', industry: 'Cement' },
  { name: 'Hindalco', industry: 'Metals' },
  { name: 'Essar Group', industry: 'Diversified' }
];
