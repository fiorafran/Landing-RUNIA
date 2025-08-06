# 🤖 Chatbots IA - Landing Page

Landing page moderna y optimizada para servicios de chatbots con inteligencia artificial, desarrollada con **Astro**, **React**, **TypeScript** y **Tailwind CSS**.

## 🚀 Características

- ✅ **Diseño Moderno**: UI/UX profesional y atractivo
- ✅ **Fully Responsive**: Optimizado para todos los dispositivos
- ✅ **Performance Optimizado**: Core Web Vitals y Lighthouse score > 90
- ✅ **SEO Completo**: Meta tags, structured data, sitemap
- ✅ **Formulario Interactivo**: Validación en tiempo real con React
- ✅ **Analytics Integrado**: Google Analytics y tracking personalizado
- ✅ **Accesibilidad**: WCAG 2.1 AA compliant
- ✅ **Cross-browser**: Compatible con todos los navegadores modernos

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) - Rendering híbrido
- **UI Library**: [React](https://reactjs.org/) - Componentes interactivos
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast development
- **Deployment**: Vercel/Netlify ready

## 📁 Estructura del Proyecto

```
strong-shepherd/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Page sections
│   │   ├── ui/             # Reusable UI components
│   │   ├── react/          # React components
│   │   └── analytics/      # Analytics components
│   ├── pages/              # Astro pages
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript types
├── public/                 # Static assets
├── docs/                   # Documentation
└── dist/                   # Build output
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/strong-shepherd.git
cd strong-shepherd

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run start        # Alias para dev

# Build y Deploy
npm run build        # Build de producción
npm run build:optimized  # Build optimizado
npm run preview      # Preview del build

# Testing y Quality
npm run test:build   # Test del build
npm run lint         # Linting
npm run lint:fix     # Auto-fix linting
npm run format       # Formateo de código
npm run format:check # Check de formato

# Performance
npm run analyze      # Análisis de bundle
npm run performance  # Test de performance
npm run clean        # Limpiar build
```

## 🎨 Componentes Principales

### Layout Components
- `BaseLayout.astro` - Layout principal con SEO y analytics
- `Header.astro` - Navegación principal
- `Footer.astro` - Footer con información de contacto

### Page Sections
- `Hero.astro` - Sección principal con CTA
- `Solutions.astro` - Servicios ofrecidos
- `WhyChooseUs.astro` - Ventajas competitivas
- `Integrations.astro` - Plataformas integradas
- `CTA.astro` - Call-to-action final
- `Contact.astro` - Formulario de contacto

### React Components
- `ContactForm.tsx` - Formulario interactivo con validación
- `TestimonialCarousel.tsx` - Carrusel de testimonios

### UI Components
- `Button.astro` - Botones reutilizables
- `Card.astro` - Tarjetas de contenido
- `Navigation.astro` - Navegación responsive
- `OptimizedImage.astro` - Imágenes optimizadas

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env`:

```env
# Analytics
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact Form
PUBLIC_CONTACT_EMAIL=contacto@chatbotsia.com

# Site Configuration
PUBLIC_SITE_URL=https://chatbotsia.com
```

### Configuración de Analytics

1. Crear cuenta en [Google Analytics](https://analytics.google.com/)
2. Obtener Measurement ID
3. Actualizar en `BaseLayout.astro`:

```astro
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Configuración de Formulario

El formulario de contacto está configurado para enviar emails. Configurar en tu proveedor de hosting:

- **Vercel**: Usar Vercel Functions
- **Netlify**: Usar Netlify Forms
- **Otros**: Configurar endpoint personalizado

## 📊 Performance

### Métricas Objetivo

- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1
- **Lighthouse Score**: > 90

### Optimizaciones Implementadas

- ✅ Lazy loading de imágenes
- ✅ Code splitting automático
- ✅ CSS y JS minificados
- ✅ Preload de recursos críticos
- ✅ Service Worker preparado
- ✅ Font optimization
- ✅ Image optimization

## 🔍 SEO

### Implementaciones

- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Structured data (Schema.org)
- ✅ Sitemap.xml automático
- ✅ Robots.txt optimizado
- ✅ Canonical URLs
- ✅ Semantic HTML

### Herramientas de Testing

- Google Search Console
- Google PageSpeed Insights
- Lighthouse
- Screaming Frog

## 🧪 Testing

### Checklist de Testing

#### Pre-Deploy
- [ ] Build sin errores
- [ ] Todas las imágenes optimizadas
- [ ] Meta tags configurados
- [ ] Structured data válido
- [ ] Formularios funcionan
- [ ] Navegación responsive
- [ ] Performance optimizado
- [ ] SEO implementado
- [ ] Analytics configurado

#### Post-Deploy
- [ ] Sitio accesible públicamente
- [ ] SSL certificado activo
- [ ] Redirecciones funcionan
- [ ] Analytics recopilando datos
- [ ] Formularios enviando emails
- [ ] Performance en producción
- [ ] SEO indexado por Google
- [ ] Backup configurado
- [ ] Monitoreo activo

### Herramientas de Testing

```bash
# Performance
npm run performance

# Cross-browser testing
# Usar BrowserStack, Sauce Labs, o LambdaTest

# Accessibility
# Usar axe DevTools, WAVE, o Lighthouse Accessibility
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# Deploy manual o con Git integration
```

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte sitios estáticos.

## 📈 Analytics y Tracking

### Eventos Trackeados

- Page views
- Form submissions
- Button clicks
- Scroll depth
- Time on page
- External link clicks

### Configuración

Los eventos se envían automáticamente a Google Analytics si está configurado. También se guardan en localStorage para análisis posterior.

## 🔧 Personalización

### Colores

Editar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#2563eb', // Color principal
  },
  secondary: {
    500: '#10b981', // Color secundario
  }
}
```

### Contenido

- Textos: Editar en los componentes `.astro`
- Imágenes: Reemplazar en `public/images/`
- Configuración: Modificar en `src/pages/index.astro`

### Estilos

- Globales: `src/styles/global.css`
- Componentes: Tailwind classes en los componentes
- Custom CSS: Agregar en `global.css`

## 🐛 Troubleshooting

### Problemas Comunes

#### Build Fails
```bash
# Limpiar cache
npm run clean
rm -rf node_modules
npm install
```

#### Images Not Loading
- Verificar rutas en `public/images/`
- Usar componente `OptimizedImage.astro`

#### Form Not Working
- Verificar configuración de email
- Revisar console para errores
- Verificar endpoint de envío

#### Performance Issues
```bash
# Analizar bundle
npm run analyze

# Test performance
npm run performance
```

## 📚 Recursos

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

- **Email**: contacto@chatbotsia.com
- **Website**: https://chatbotsia.com
- **LinkedIn**: [Chatbots IA](https://linkedin.com/company/chatbotsia)

---

**Desarrollado con ❤️ por el equipo de Chatbots IA**
