// src/components/ProjectGrid.tsx
import { useStore } from '@nanostores/preact';
import { activeFilter } from '../stores/filterStore';
import ProjectCard from './ProjectCard.astro'; // Masih bisa impor .astro

// Definisikan tipe data proyek (bisa impor dari data/projects.js jika diekspor)
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumbnail: string;
  styleType: 'solid' | 'outline';
  gridSpan: string;
}

interface Props {
  projects: Project[]; // Terima semua proyek sebagai props
}

export default function ProjectGrid({ projects }: Props) {
  const currentFilter = useStore(activeFilter);

  // Filter proyek berdasarkan filter aktif
  const filteredProjects = currentFilter
    ? projects.filter(p => p.techStack.some(tech => tech === currentFilter))
    : projects; // Jika filter null, tampilkan semua

  const sectionTitle = "SELECTED WORKS";
  const titleWords = sectionTitle.split(' ');

  return (
    <section id="web-projects" className="w-full max-w-4xl mx-auto px-6 pb-16 md:pb-24">
      <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-10 md:mb-12 flex items-baseline gap-x-2 md:gap-x-3">
        <span className="text-2xl md:text-3xl font-bold text-box-border/80 animate-on-scroll" style={{ transitionDelay: "0s" }}>&gt;</span>
        {titleWords.map((word, index) => (
          <span key={index} className="block animate-on-scroll" style={{ transitionDelay: `${(index + 1) * 0.08}s` }}>{word}</span>
        ))}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={project.id} className={`${project.gridSpan} animate-on-scroll`} style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}>
               <div className={`p-6 w-full h-60 flex flex-col border border-box-border ${project.styleType === 'solid' ? 'bg-box-bg-solid' : 'bg-box-bg-outline'}`}>
                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                 <p className="text-sm text-box-border">{currentFilter ? `(Filtered: ${currentFilter})` : '(All)'}</p>
                 {/* Placeholder untuk kartu */}
               </div>
            </div>
          ))
        ) : (
          <p className="text-box-border md:col-span-3 text-center py-8 animate-on-scroll">No projects found matching the filter "{currentFilter}".</p>
        )}
      </div>
    </section>
  );
}