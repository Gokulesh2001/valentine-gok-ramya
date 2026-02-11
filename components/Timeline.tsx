import React from 'react';
import { STORY_DATA } from '../types';
import { Heart, MessageCircle, Search, Gift, Coffee, Home, Landmark } from 'lucide-react';

const IconMap = {
  heart: Heart,
  message: MessageCircle,
  search: Search,
  ring: Gift,
  coffee: Coffee,
  home: Home,
  temple: Landmark,
};

export const Timeline: React.FC = () => {
  return (
    <div className="py-10 px-4 max-w-4xl mx-auto relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {STORY_DATA.map((event, index) => {
          const isLeft = index % 2 === 0;
          const Icon = IconMap[event.icon];

          return (
            <div key={event.id} className={`relative flex items-center md:justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Spacer for Desktop Alignment */}
              <div className="hidden md:block w-5/12"></div>

              {/* Icon Marker */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-rose-500 text-white shadow-lg z-10 border-4 border-rose-50">
                <Icon size={18} />
              </div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 w-full md:w-5/12">
                <div className="bg-white p-6 rounded-xl shadow-md border border-rose-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-100 rounded-full">
                    {event.date}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  {event.image && (
                    <div className="w-full h-48 overflow-hidden rounded-lg shadow-inner bg-gray-100">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};