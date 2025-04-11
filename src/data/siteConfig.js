// src/data/siteConfig.js
import { Github, Linkedin, Instagram, Twitter } from 'lucide-astro';

export const siteConfig = {
  name: "Muhammad Dzakwan Alifi",
  title: "Statistics & Data Science Student | Web Developer | ML & AI Enthusiast",
  tagline: "Building meaningful digital experiences through data and code.",
  email: "dzakwanalifi@apps.ipb.ac.id",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/dzakwanalifi", IconComponent: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dzakwanalifi/", IconComponent: Linkedin },
    { name: "Instagram", url: "https://www.instagram.com/dzakwanalifi/", IconComponent: Instagram },
    { name: "Twitter", url: "https://twitter.com/dzakwanalifi", IconComponent: Twitter },
  ],
  navigation: [
    { id: 'intro', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'web-projects', label: 'Web Projects' },
    { id: 'other-projects', label: 'Other Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]
};