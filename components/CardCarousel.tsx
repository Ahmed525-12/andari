'use client';
import React, { useState, useEffect, TouchEvent } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Types
export type VideoCard = {
  id: number;
  title?: string;
  description?: string;
  videoUrl: string;
  bgColor?: string;
};

interface CardCarouselProps {
  cards: VideoCard[];
}

// Utility
const isYouTubeUrl = (url: string) =>
  url.includes('youtube.com') || url.includes('youtu.be');

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Carousel logic
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Touch/swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  // 3D effect positions
  const getCardStyle = (index: number): React.CSSProperties => {
    const diff = index - currentIndex;
    const total = cards.length;
    let adjustedDiff = diff;
    if (diff > total / 2) adjustedDiff = diff - total;
    else if (diff < -total / 2) adjustedDiff = diff + total;

    const absIndex = Math.abs(adjustedDiff);
    if (adjustedDiff === 0) {
      return {
        transform: 'translateX(0) translateY(0) scale(1)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
        pointerEvents: 'auto'
      };
    } else if (absIndex === 1) {
      return {
        transform: `translateX(${adjustedDiff > 0 ? '15%' : '-15%'}) translateY(10px) scale(0.85)`,
        zIndex: 20,
        opacity: 0.85,
        filter: 'brightness(0.9)',
        pointerEvents: 'auto'
      };
    } else if (absIndex === 2) {
      return {
        transform: `translateX(${adjustedDiff > 0 ? '25%' : '-25%'}) translateY(20px) scale(0.7)`,
        zIndex: 10,
        opacity: 0.6,
        filter: 'brightness(0.7)',
        pointerEvents: 'auto'
      };
    } else {
      return {
        transform: `translateX(${adjustedDiff > 0 ? '35%' : '-35%'}) translateY(30px) scale(0.5)`,
        zIndex: 0,
        opacity: 0,
        filter: 'brightness(0.4)',
        pointerEvents: 'none'
      };
    }
  };

  return (
    <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
      <div
        className="relative h-72 sm:h-80 md:h-[430px] lg:h-[500px] flex items-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                absolute
                w-60 h-72
                sm:w-72 sm:h-80
                md:w-80 md:h-96
                  lg:w-[570px] lg:h-[420px]
                rounded-xl shadow-2xl
                transition-all duration-500
                hover:shadow-3xl
                bg-gradient-to-br
                ${index === currentIndex ? 'z-20' : ''}
                cursor-pointer
              `}
              style={getCardStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className={`
                w-full h-full rounded-xl
                ${card.bgColor || 'bg-gradient-to-br from-blue-500 to-blue-700'}
                p-2 sm:p-4 md:p-6 flex flex-col
                justify-between text-white relative overflow-hidden
              `}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-xl"></div>
                {/* Title (shows only on sm+) */}
                <div className="relative z-10">
                  {card.title && <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">{card.title}</h3>}
                </div>
                {/* Video */}
                <div className="relative z-10 flex-1 flex items-center justify-center my-2 sm:my-4">
                  {isYouTubeUrl(card.videoUrl) ? (
                    <iframe
                      src={card.videoUrl}
                      title={card.title}
                      className="w-full h-44 sm:h-48 md:h-60 rounded-lg bg-black"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={card.videoUrl}
                      controls
                      className="w-full h-44 sm:h-48 md:h-60 rounded-lg bg-black"
                    />
                  )}
                </div>
                {/* Optional: Description, shown only md+ */}
                {card.description && (
                  <div className="relative z-10 mt-1 hidden md:block">
                    <p className="text-xs md:text-base opacity-90">{card.description}</p>
                  </div>
                )}
                {/* Footer: only show on sm+ */}
                <div className="relative z-10 mt-auto  justify-between items-center hidden sm:flex">
                  <span className="text-xs opacity-75">{index + 1} / {cards.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className={`
            absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-30
            p-2 sm:p-3 bg-white/90 hover:bg-white
            text-gray-800 rounded-full
            shadow-lg
            min-w-min sm:min-w-[40px]
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed group
          `}
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className={`
            absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-30
            p-2 sm:p-3 bg-white/90 hover:bg-white
            text-gray-800 rounded-full
            shadow-lg
            min-w-min sm:min-w-[40px]
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed group
          `}
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
      {/* Dot indicators: always visible, spacing adjusts for screen */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`
              w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300
              ${index === currentIndex
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'}
            `}
          />
        ))}
      </div>
      {/* Mobile instructions */}
      <div className="block sm:hidden text-center mt-2 text-xs text-gray-600">
        Swipe left or right to navigate
      </div>
    </div>
  );
};

export default CardCarousel;
