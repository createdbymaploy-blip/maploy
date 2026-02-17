import React from 'react';

// This is the link to your public GitHub repository's "Raw" file server.
// It allows us to load images directly from your repo code.
export const GITHUB_BASE_URL = "https://raw.githubusercontent.com/createdbymaploy-blip/maploy/main/";

// Helper to get full URL
export const getAsset = (filename: string) => `${GITHUB_BASE_URL}${filename}`;

export const NAV_LINKS = [
  { name: 'home', href: '#home' },
  { name: 'about', href: '#about' },
  { name: 'projects', href: '#projects' },
  { name: 'faq', href: '#faq' },
];

export const CONTACT_LINK = "https://t.me/maploy";
export const COMMUNITY_LINK = "https://t.me/createdbymaploy";
export const TWITTER_LINK = "https://x.com/maploy_yo";
