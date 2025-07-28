import React, { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '../../types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showDots = true,
  className = ""
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Función para generar estrellas
  const generateStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => 
      i < rating ? '⭐' : '☆'
    ).join('');
  };

  // Función para obtener iniciales del nombre
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Navegar al siguiente testimonio
  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  // Navegar al testimonio anterior
  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  // Ir a un testimonio específico
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Pausar/reanudar autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, nextTestimonial]);

  // Pausar autoplay al hacer hover
  const handleMouseEnter = () => {
    if (autoPlay) setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) setIsAutoPlaying(true);
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-neutral-600">No hay testimonios disponibles</p>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Testimonial Card */}
      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
        {/* Rating */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex text-yellow-400 text-lg">
            {generateStars(currentTestimonial.rating)}
          </div>
          <span className="ml-3 text-lg text-neutral-500 font-medium">
            {currentTestimonial.rating}/5
          </span>
        </div>

        {/* Testimonial Content */}
        <blockquote className="text-xl text-neutral-700 leading-relaxed mb-8 italic text-center">
          "{currentTestimonial.content}"
        </blockquote>

        {/* Highlight */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500 p-6 mb-8 rounded-r-lg">
          <div className="text-sm font-medium text-primary-700 mb-2">
            💡 Resultado destacado:
          </div>
          <div className="text-lg text-primary-600 font-semibold">
            {currentTestimonial.highlight}
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
            {getInitials(currentTestimonial.name)}
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-neutral-900">
              {currentTestimonial.name}
            </div>
            <div className="text-lg text-neutral-600">
              {currentTestimonial.position}
            </div>
            <div className="text-lg text-primary-600 font-semibold">
              {currentTestimonial.company}
            </div>
            <div className="text-sm text-neutral-400 mt-1">
              {new Date(currentTestimonial.date).toLocaleDateString('es-AR', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
          </div>
        </div>

        {/* Industry Badge */}
        <div className="text-center mt-6">
          <span className="inline-block bg-neutral-100 text-neutral-700 text-sm font-medium px-4 py-2 rounded-full">
            {currentTestimonial.industry}
          </span>
        </div>
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group"
            aria-label="Testimonio anterior"
          >
            <svg 
              className="w-6 h-6 text-neutral-600 group-hover:text-primary-600 transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={toggleAutoPlay}
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-primary-500 text-white hover:bg-primary-600' 
                : 'bg-white text-neutral-600 hover:text-primary-600'
            }`}
            aria-label={isAutoPlaying ? 'Pausar autoplay' : 'Reanudar autoplay'}
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group"
            aria-label="Siguiente testimonio"
          >
            <svg 
              className="w-6 h-6 text-neutral-600 group-hover:text-primary-600 transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Dots Navigation */}
      {showDots && (
        <div className="flex items-center justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-500 scale-125' 
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="mt-6">
          <div className="w-full bg-neutral-200 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-1 rounded-full transition-all duration-300 ease-linear"
              style={{ 
                width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
              }}
            />
          </div>
        </div>
      )}

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-neutral-500">
        {currentIndex + 1} de {testimonials.length}
      </div>
    </div>
  );
} 