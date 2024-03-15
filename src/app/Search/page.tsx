"use client";


import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

import React, { useState } from 'react';

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('Title');
  const [geoLocation, setGeoLocation] = useState('');
  const [medium, setMedium] = useState('');
  const [highlighted, setHighlighted] = useState(false);
  const [currentlyOnView, setCurrentlyOnView] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement the search logic or form submission here
    console.log({
      searchQuery,
      searchBy,
      geoLocation,
      medium,
      highlighted,
      currentlyOnView,
    });
  };

  return (
    <div className="relative bg-black">
    {/* Navigation section */}
    <FloatingNavDemo />

    <div className="flex justify-center items-center h-screen">
<form 
  onSubmit={handleSubmit} 
  className="space-y-6 max-w-3xl w-full p-10 shadow-lg rounded-lg" 
  style={{ 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // More transparent background
    backdropFilter: 'blur(8px)', // Slightly reduced blur effect
    border: '1px solid rgba(255, 255, 255, 0.1)' // More transparent border
  }}>
        <div>
        <label htmlFor="searchQuery" style={{ color: '#9CA3AF' }}>Search Query</label>

          <input
            id="searchQuery"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter search term"
            className="mt-1 block w-full p-2 text-lg border-2 text-neutral-800 rounded"
          />
        </div>

        <div>
        <label htmlFor="searchQuery" style={{ color: '#9CA3AF' }}>Search By</label>
          <select
            id="searchBy"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="mt-1 block w-full p-2 text-lg border-2 text-neutral-800 rounded"
          >
            <option>Title</option>
            <option>Geo Location</option>
          </select>
        </div>

        {searchBy === 'Geo Location' && (
          <div>
            <label htmlFor="geoLocation" className="h-4 w-4" style={{ color: '#9CA3AF' }}>Geo Location</label>
            <input
              id="geoLocation"
              type="text"
              value={geoLocation}
              onChange={(e) => setGeoLocation(e.target.value)}
              placeholder="Enter location"
              className="mt-1 block w-full p-2 text-lg border-2 text-neutral-800rounded"
            />
          </div>
        )}

        <div>
          <label htmlFor="medium" className="block text-lg "style={{ color: '#9CA3AF' }}>Medium</label>
          <input
            id="medium"
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            placeholder="Enter medium"
            className="mt-1 block w-full p-2 text-lg border-2 text-neutral-800 rounded"
          />
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <label className="flex items-center text-lg " style={{ color: '#9CA3AF' }}>
              <input
                type="checkbox"
                checked={highlighted}
                onChange={(e) => setHighlighted(e.target.checked)}
                className="mr-2"
              />
              Highlighted
            </label>
          </div>
          
          <div>
            <label className="flex items-center text-lg" style={{ color: '#9CA3AF' }}>
              <input
                type="checkbox"
                checked={currentlyOnView}
                onChange={(e) => setCurrentlyOnView(e.target.checked)}
                className="mr-2"
              />
              Currently on View
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Submit
            </div>
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SearchForm;
