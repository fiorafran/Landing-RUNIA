// Tipos básicos para el proyecto

// Tipos para testimonios
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  rating: number;
  content: string;
  highlight: string;
  industry: string;
  date: string;
}

// Tipos para soluciones/beneficios
export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Tipos para ventajas competitivas
export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Tipos para integraciones
export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'available' | 'coming-soon';
}

// Tipos para formulario de contacto
export interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  budget?: string;
  timeline?: string;
}

// Tipos para configuración del sitio
export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
}

// Tipos para componentes de botón
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Tipos para componentes de tarjeta
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
}

// Tipos para navegación
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Tipos para secciones
export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary';
} 