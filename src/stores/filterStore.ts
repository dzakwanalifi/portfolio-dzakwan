// src/stores/filterStore.ts
import { atom } from 'nanostores';

// Atom untuk menyimpan filter aktif (nama teknologi atau null untuk 'All')
export const activeFilter = atom<string | null>(null);

// Aksi untuk mengubah filter
export function setFilter(tech: string | null) {
  activeFilter.set(tech);
  console.log("Filter set to:", tech); // Untuk debugging
  // Scroll ke section proyek pertama setelah filter diubah
  const projectSection = document.getElementById('web-projects') || document.getElementById('other-projects');
  if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}