// Tambahkan tipe baru untuk portofolio
export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}



// Tambahkan tipe baru untuk industri
export interface Industry {
  id: number;
  name: string;
  description: string;
  image: string;
}


// Tambahkan tipe baru untuk layanan


export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Tambahkan tipe baru untuk langkah proses
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

// Tipe yang sudah ada sebelumnya
export interface NavLink {
  label: string;
  path: string;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface StatItem {
  value: string;
  label: string;
}


// Tambahkan tipe baru untuk testimoni
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  rating: number;
  avatar: string;
}

// Tambahkan tipe baru untuk FAQ
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}
// Tambahkan tipe untuk layanan pada formulir kontak
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}
