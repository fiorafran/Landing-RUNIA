// Browser support detection utility
export const browserSupport = {
  // Check if browser supports modern features
  supportsIntersectionObserver: () => 'IntersectionObserver' in window,
  supportsServiceWorker: () => 'serviceWorker' in navigator,
  supportsWebP: () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  },
  supportsWebGL: () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  },
  supportsCSSGrid: () => {
    return CSS.supports('display', 'grid');
  },
  supportsFlexbox: () => {
    return CSS.supports('display', 'flex');
  },
  supportsCustomProperties: () => {
    return CSS.supports('--custom-property', 'value');
  },
  supportsSmoothScroll: () => {
    return 'scrollBehavior' in document.documentElement.style;
  },
  supportsTouch: () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },
  supportsReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  supportsDarkMode: () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
  supportsHighDPI: () => {
    return window.devicePixelRatio > 1;
  },
  supportsOffline: () => {
    return 'ononline' in window;
  },
  supportsNotifications: () => {
    return 'Notification' in window;
  },
  supportsGeolocation: () => {
    return 'geolocation' in navigator;
  },
  supportsLocalStorage: () => {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  },
  supportsSessionStorage: () => {
    try {
      const test = 'test';
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  },
  supportsIndexedDB: () => {
    return 'indexedDB' in window;
  },
  supportsFetch: () => {
    return 'fetch' in window;
  },
  supportsPromise: () => {
    return 'Promise' in window;
  },
  supportsAsyncAwait: () => {
    try {
      new Function('async () => {}');
      return true;
    } catch (e) {
      return false;
    }
  },
  supportsModules: () => {
    return 'noModule' in HTMLScriptElement.prototype;
  },
  supportsDynamicImport: () => {
    try {
      new Function('import("")');
      return true;
    } catch (e) {
      return false;
    }
  },
  supportsWebWorkers: () => {
    return 'Worker' in window;
  },
  supportsSharedWorkers: () => {
    return 'SharedWorker' in window;
  },
  supportsWebAssembly: () => {
    return typeof WebAssembly === 'object';
  },
  supportsWebAudio: () => {
    return 'AudioContext' in window || 'webkitAudioContext' in window;
  },
  supportsWebRTC: () => {
    return 'RTCPeerConnection' in window;
  },
  supportsWebSocket: () => {
    return 'WebSocket' in window;
  },
  supportsServerSentEvents: () => {
    return 'EventSource' in window;
  },
  supportsPushAPI: () => {
    return 'PushManager' in window;
  },
  supportsBackgroundSync: () => {
    return 'sync' in window.ServiceWorkerRegistration.prototype;
  },
  supportsCacheAPI: () => {
    return 'caches' in window;
  },
  supportsRequestIdleCallback: () => {
    return 'requestIdleCallback' in window;
  },
  supportsRequestAnimationFrame: () => {
    return 'requestAnimationFrame' in window;
  },
  supportsPerformanceAPI: () => {
    return 'performance' in window;
  },
  supportsUserTiming: () => {
    return 'performance' in window && 'mark' in window.performance;
  },
  supportsResourceTiming: () => {
    return 'performance' in window && 'getEntriesByType' in window.performance;
  },
  supportsNavigationTiming: () => {
    return 'performance' in window && 'navigation' in window.performance;
  },
  supportsBeacon: () => {
    return 'navigator' in window && 'sendBeacon' in window.navigator;
  },
  supportsReporting: () => {
    return 'ReportingObserver' in window;
  },
  supportsIntersectionObserverV2: () => {
    return 'IntersectionObserver' in window && 
           'trackVisibility' in IntersectionObserverInit.prototype;
  },
  supportsResizeObserver: () => {
    return 'ResizeObserver' in window;
  },
  supportsMutationObserver: () => {
    return 'MutationObserver' in window;
  },
  supportsPerformanceObserver: () => {
    return 'PerformanceObserver' in window;
  },
  supportsAbortController: () => {
    return 'AbortController' in window;
  },
  supportsAbortSignal: () => {
    return 'AbortSignal' in window;
  },
  supportsWeakRef: () => {
    return 'WeakRef' in window;
  },
  supportsFinalizationRegistry: () => {
    return 'FinalizationRegistry' in window;
  },
  supportsBigInt: () => {
    return typeof BigInt !== 'undefined';
  },
  supportsBigUint64Array: () => {
    return 'BigUint64Array' in window;
  },
  supportsBigInt64Array: () => {
    return 'BigInt64Array' in window;
  },
  supportsAtomics: () => {
    return 'Atomics' in window;
  },
  supportsSharedArrayBuffer: () => {
    return 'SharedArrayBuffer' in window;
  },
  supportsAtomicsWait: () => {
    return 'Atomics' in window && 'wait' in Atomics;
  },
  supportsAtomicsWake: () => {
    return 'Atomics' in window && 'wake' in Atomics;
  },
  supportsAtomicsAdd: () => {
    return 'Atomics' in window && 'add' in Atomics;
  },
  supportsAtomicsSub: () => {
    return 'Atomics' in window && 'sub' in Atomics;
  },
  supportsAtomicsAnd: () => {
    return 'Atomics' in window && 'and' in Atomics;
  },
  supportsAtomicsOr: () => {
    return 'Atomics' in window && 'or' in Atomics;
  },
  supportsAtomicsXor: () => {
    return 'Atomics' in window && 'xor' in Atomics;
  },
  supportsAtomicsExchange: () => {
    return 'Atomics' in window && 'exchange' in Atomics;
  },
  supportsAtomicsCompareExchange: () => {
    return 'Atomics' in window && 'compareExchange' in Atomics;
  },
  supportsAtomicsLoad: () => {
    return 'Atomics' in window && 'load' in Atomics;
  },
  supportsAtomicsStore: () => {
    return 'Atomics' in window && 'store' in Atomics;
  },
  supportsAtomicsIsLockFree: () => {
    return 'Atomics' in window && 'isLockFree' in Atomics;
  }
};

// Get browser information
export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  const browserInfo = {
    userAgent,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    platform: navigator.platform,
    vendor: navigator.vendor,
    maxTouchPoints: navigator.maxTouchPoints,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory,
    connection: navigator.connection ? {
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt,
      saveData: navigator.connection.saveData
    } : null,
    screen: {
      width: screen.width,
      height: screen.height,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth,
      orientation: screen.orientation ? {
        type: screen.orientation.type,
        angle: screen.orientation.angle
      } : null
    },
    window: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
      devicePixelRatio: window.devicePixelRatio
    }
  };

  // Detect browser
  if (userAgent.includes('Chrome')) {
    browserInfo.browser = 'Chrome';
  } else if (userAgent.includes('Firefox')) {
    browserInfo.browser = 'Firefox';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browserInfo.browser = 'Safari';
  } else if (userAgent.includes('Edge')) {
    browserInfo.browser = 'Edge';
  } else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
    browserInfo.browser = 'Internet Explorer';
  } else {
    browserInfo.browser = 'Unknown';
  }

  return browserInfo;
};

// Check if browser supports all required features
export const checkBrowserCompatibility = () => {
  const requiredFeatures = [
    'supportsIntersectionObserver',
    'supportsFetch',
    'supportsPromise',
    'supportsLocalStorage',
    'supportsFlexbox',
    'supportsCustomProperties'
  ];

  const missingFeatures = requiredFeatures.filter(feature => !browserSupport[feature]());

  return {
    compatible: missingFeatures.length === 0,
    missingFeatures,
    browserInfo: getBrowserInfo(),
    support: browserSupport
  };
};

// Apply fallbacks for unsupported features
export const applyFallbacks = () => {
  const compatibility = checkBrowserCompatibility();
  
  if (!compatibility.compatible) {
    console.warn('Some features are not supported:', compatibility.missingFeatures);
    
    // Apply fallbacks
    if (!browserSupport.supportsIntersectionObserver()) {
      // Fallback for IntersectionObserver
      console.log('Applying IntersectionObserver fallback');
    }
    
    if (!browserSupport.supportsSmoothScroll()) {
      // Fallback for smooth scroll
      console.log('Applying smooth scroll fallback');
    }
    
    if (!browserSupport.supportsWebP()) {
      // Fallback for WebP images
      console.log('Applying WebP fallback');
    }
  }
  
  return compatibility;
};

// Initialize browser support detection
export const initBrowserSupport = () => {
  if (typeof window !== 'undefined') {
    const compatibility = applyFallbacks();
    
    // Store compatibility info
    window.__browserCompatibility = compatibility;
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('browserCompatibility', {
      detail: compatibility
    }));
    
    return compatibility;
  }
  
  return null;
}; 