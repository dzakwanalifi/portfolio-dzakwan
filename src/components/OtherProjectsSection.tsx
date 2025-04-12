---
// src/components/OtherProjectsSection.astro
import { otherProjects } from '../data/otherProjects.js';
import { Github, ExternalLink, Download, Image } from 'lucide-astro';

const itemClasses = `
  p-6 md:p-8 w-full border border-box-border bg-box-bg-outline text-text-dark
  transition-all duration-150 ease-in-out hover:border-black hover:bg-gray-hover-light
`;

const tagClasses = `
  inline-block text-xs border border-box-border/50 px-2 py-0.5 text-box-border/80
  transition-colors duration-150 ease-in-out group-hover:border-black/70 group-hover:text-black
`;

const linkClasses = `
  inline-flex items-center gap-1.5 px-3 py-1 border border-box-border text-text-dark text-sm font-medium
  hover:bg-text-dark hover:text-text-light transition-colors duration-150 ease-in-out
`;

// Persiapan untuk judul reveal per kata
const sectionTitle = "TOOLS & DATA SCIENCE PROJECTS";
const titleWords = sectionTitle.split(' ');
---

<section id="other-projects" class="w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
  {/* Modifikasi H2 */}
  <h2 class="text-2xl md:text-3xl font-bold text-text-dark mb-10 md:mb-12 flex items-baseline gap-x-2 md:gap-x-3">
    <span class="text-2xl md:text-3xl font-bold text-box-border/80 animate-on-scroll" style="transition-delay: 0s;">></span>
    {titleWords.map((word, index) => (
      <span class="block animate-on-scroll" style={`transition-delay: ${(index + 1) * 0.08}s`}>{word}</span>
    ))}
  </h2>
   <div class="space-y-6 md:space-y-8">
     {otherProjects.map(item => (
       <article class={`${itemClasses} animate-on-scroll group`}>
         <div class="flex justify-between items-start mb-1">
           <h3 class="text-xl font-bold leading-tight flex items-center gap-2">
             {item.icon && <item.icon class="w-5 h-5 text-box-border/80 group-hover:text-black transition-colors" strokeWidth={1.75}/>}
             {item.title}
           </h3>
           {item.projectType && <span class="text-sm font-medium text-box-border/80 ml-4 flex-shrink-0">{item.projectType}</span>}
         </div>
         <p class="text-base text-box-border mb-4 leading-relaxed">{item.description}</p>

         {item.techStack && item.techStack.length > 0 && (
           <div class="mb-5 flex flex-wrap gap-2">
             {item.techStack.map(tech => (
               <span class={tagClasses}>{tech}</span>
             ))}
           </div>
         )}

         <div class="flex flex-wrap gap-3 pt-2">
           {item.liveUrl && item.liveUrl !== "#" && (
             <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" class={linkClasses}>
               View Demo <ExternalLink class="w-3.5 h-3.5" strokeWidth={2}/>
             </a>
           )}
           {item.infographicUrl && item.infographicUrl !== "#" && (
             <a href={item.infographicUrl} target="_blank" rel="noopener noreferrer" class={linkClasses}>
               View Infographic <Image class="w-3.5 h-3.5" strokeWidth={2}/>
             </a>
           )}
           {item.repoUrl && item.repoUrl !== "#" && (
             <a href={item.repoUrl} target="_blank" rel="noopener noreferrer" class={linkClasses}>
               GitHub Repo <Github class="w-3.5 h-3.5" strokeWidth={2}/>
             </a>
           )}
           {item.downloadUrl && item.downloadUrl !== "#" && (
             <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer" class={linkClasses}>
               Download <Download class="w-3.5 h-3.5" strokeWidth={2}/>
             </a>
           )}
         </div>
       </article>
     ))}
   </div>
</section>
