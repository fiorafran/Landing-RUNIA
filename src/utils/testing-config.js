// Configuración para testing final del proyecto
export const testingConfig = {
  // URLs de testing
  urls: {
    local: 'http://localhost:4321',
    staging: 'https://staging.chatbotsia.com',
    production: 'https://chatbotsia.com'
  },

  // Navegadores para testing
  browsers: {
    desktop: [
      'Chrome',
      'Firefox', 
      'Safari',
      'Edge'
    ],
    mobile: [
      'Chrome Mobile',
      'Safari Mobile',
      'Firefox Mobile'
    ]
  },

  // Dispositivos para testing responsive
  devices: {
    mobile: {
      width: 375,
      height: 667,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    },
    tablet: {
      width: 768,
      height: 1024,
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    },
    desktop: {
      width: 1920,
      height: 1080,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  },

  // Funcionalidades a testear
  features: {
    // Navegación
    navigation: [
      'Header visible en todas las páginas',
      'Menú responsive funciona',
      'Logo enlaza a home',
      'Enlaces de navegación funcionan',
      'Smooth scroll funciona'
    ],

    // Formularios
    forms: [
      'Formulario de contacto visible',
      'Validación de campos funciona',
      'Mensajes de error se muestran',
      'Envío de formulario funciona',
      'Mensaje de éxito se muestra'
    ],

    // Performance
    performance: [
      'Página carga en menos de 3 segundos',
      'Imágenes se cargan correctamente',
      'CSS y JS se cargan sin errores',
      'No hay errores en consola',
      'Lighthouse score > 90'
    ],

    // SEO
    seo: [
      'Meta tags están presentes',
      'Structured data es válido',
      'Sitemap es accesible',
      'Robots.txt es accesible',
      'Canonical URLs están configuradas'
    ],

    // Accesibilidad
    accessibility: [
      'Contraste de colores es adecuado',
      'Navegación por teclado funciona',
      'Alt text en imágenes',
      'ARIA labels están presentes',
      'Focus visible funciona'
    ],

    // Responsive
    responsive: [
      'Diseño se adapta a móvil',
      'Diseño se adapta a tablet',
      'Diseño se adapta a desktop',
      'No hay scroll horizontal',
      'Elementos no se superponen'
    ]
  },

  // Métricas de performance
  performanceMetrics: {
    // Core Web Vitals
    coreWebVitals: {
      lcp: 2500, // Largest Contentful Paint (ms)
      fid: 100,  // First Input Delay (ms)
      cls: 0.1   // Cumulative Layout Shift
    },

    // Lighthouse
    lighthouse: {
      performance: 90,
      accessibility: 90,
      bestPractices: 90,
      seo: 90
    },

    // Tiempos de carga
    loadTimes: {
      firstContentfulPaint: 1500,
      largestContentfulPaint: 2500,
      timeToInteractive: 3500,
      totalBlockingTime: 300
    }
  },

  // Checklist de testing
  checklist: {
    preDeploy: [
      '✅ Build sin errores',
      '✅ Todas las imágenes optimizadas',
      '✅ Meta tags configurados',
      '✅ Structured data válido',
      '✅ Formularios funcionan',
      '✅ Navegación responsive',
      '✅ Performance optimizado',
      '✅ SEO implementado',
      '✅ Analytics configurado'
    ],

    postDeploy: [
      '✅ Sitio accesible públicamente',
      '✅ SSL certificado activo',
      '✅ Redirecciones funcionan',
      '✅ Analytics recopilando datos',
      '✅ Formularios enviando emails',
      '✅ Performance en producción',
      '✅ SEO indexado por Google',
      '✅ Backup configurado',
      '✅ Monitoreo activo'
    ]
  },

  // Comandos de testing
  commands: {
    build: 'npm run build',
    dev: 'npm run dev',
    preview: 'npm run preview',
    test: 'npm run test',
    lint: 'npm run lint',
    format: 'npm run format',
    analyze: 'npm run analyze',
    performance: 'npm run performance'
  },

  // Herramientas de testing recomendadas
  tools: {
    performance: [
      'Lighthouse',
      'PageSpeed Insights',
      'WebPageTest',
      'GTmetrix'
    ],
    accessibility: [
      'axe DevTools',
      'WAVE',
      'Lighthouse Accessibility',
      'NVDA Screen Reader'
    ],
    crossBrowser: [
      'BrowserStack',
      'Sauce Labs',
      'LambdaTest',
      'CrossBrowserTesting'
    ],
    seo: [
      'Google Search Console',
      'Google PageSpeed Insights',
      'Screaming Frog',
      'SEMrush'
    ]
  }
};

// Función para validar configuración
export const validateConfig = () => {
  const errors = [];
  
  // Validar URLs
  if (!testingConfig.urls.local || !testingConfig.urls.production) {
    errors.push('URLs de testing no configuradas');
  }
  
  // Validar métricas
  if (testingConfig.performanceMetrics.coreWebVitals.lcp > 4000) {
    errors.push('LCP target muy alto');
  }
  
  // Validar checklist
  if (testingConfig.checklist.preDeploy.length === 0) {
    errors.push('Checklist pre-deploy vacío');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Función para generar reporte de testing
export const generateTestReport = (results) => {
  return {
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    results: {
      performance: results.performance || {},
      accessibility: results.accessibility || {},
      seo: results.seo || {},
      functionality: results.functionality || {}
    },
    summary: {
      totalTests: Object.keys(results).length,
      passed: Object.values(results).filter(r => r.passed).length,
      failed: Object.values(results).filter(r => !r.passed).length,
      score: Math.round((Object.values(results).filter(r => r.passed).length / Object.keys(results).length) * 100)
    }
  };
}; 