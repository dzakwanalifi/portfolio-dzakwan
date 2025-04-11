// src/components/CommandPalette
import { useState, useEffect } from 'react';
import { Command } from 'cmdk';

// Impor data kita (sesuaikan path jika perlu)
import { siteConfig } from '../data/siteConfig.js';
import { projects } from '../data/projects.js';
import { otherProjects } from '../data/otherProjects.js';

// Gabungkan semua item yang bisa dinavigasi
const allItems = [
  // Sections
  ...siteConfig.navigation.map(section => ({
    id: section.id,
    type: 'Section',
    label: section.label,
    keywords: [section.label.toLowerCase(), 'section', 'go to'],
    onSelect: () => scrollToElement(`#${section.id}`)
  })),
  // Web Projects
  ...projects.map(project => ({
    id: `project-${project.id}`, // Buat ID unik jika perlu scroll ke kartu
    targetId: 'web-projects', // Target scroll tetap section utama
    type: 'Web Project',
    label: project.title,
    keywords: [project.title.toLowerCase(), 'web', 'project', ...project.techStack.map(t => t.toLowerCase())],
    onSelect: () => scrollToElement('#web-projects') // Scroll ke section gridnya
    // Jika ingin scroll ke kartu spesifik, perlu ID di kartu & logic scroll berbeda
  })),
  // Other Projects
  ...otherProjects.map(project => ({
    id: `other-${project.id}`,
    targetId: 'other-projects',
    type: project.projectType || 'Project',
    label: project.title,
    keywords: [project.title.toLowerCase(), 'other', 'project', 'tool', 'data', ...project.techStack.map(t => t.toLowerCase())],
    onSelect: () => scrollToElement('#other-projects')
  })),
  // Bisa tambahkan link sosmed juga jika mau
  ...siteConfig.socialLinks.map(link => ({
    id: `social-${link.name.toLowerCase()}`,
    type: 'Social',
    label: `Open ${link.name}`,
    keywords: [link.name.toLowerCase(), 'social', 'link', 'contact'],
    onSelect: () => window.open(link.url, '_blank') // Buka di tab baru
  }))
];

// Fungsi helper untuk scroll
const scrollToElement = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function CommandPalette() {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  // Toggle palette on Ctrl+K or Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Callback saat item dipilih
  const handleSelect = (callback: () => void) => {
    callback();
    setOpen(false);
    setSearch(''); // Reset search
  };

  // Filter items based on search query (simple keyword check)
   const filteredItems = search === '' ? allItems : allItems.filter(item =>
       item.label.toLowerCase().includes(search.toLowerCase()) ||
       item.type.toLowerCase().includes(search.toLowerCase()) ||
       item.keywords?.some(keyword => keyword.includes(search.toLowerCase()))
   );


  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      // Styling untuk Dialog Overlay (sesuaikan warna & opacity)
      // Penting: cmdk menambahkan inline style, kita perlu override/atur via CSS global jika perlu
      // atau style container-nya di sini
      className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-[15vh]" // Backdrop gelap
    >
      {/* Styling untuk Palette Box */}
      <div className="w-full max-w-xl bg-primary-bg border border-box-border shadow-lg animate-on-scroll in-view"> {/* Pastikan boxy & warna sesuai */}
        <Command
          value={search}
          onValueChange={setSearch}
          shouldFilter={false} // Kita handle filtering sendiri
          className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-box-border [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-input]]:w-full [&_[cmdk-input]]:border-b [&_[cmdk-input]]:border-box-border/50 [&_[cmdk-input]]:pl-4 [&_[cmdk-input]]:pr-4 [&_[cmdk-input]]:text-base [&_[cmdk-input]]:text-text-dark [&_[cmdk-input]]:bg-transparent [&_[cmdk-input]]:outline-none [&_[cmdk-input]]:placeholder:text-box-border/80 [&_[cmdk-item]]:px-4 [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:text-base [&_[cmdk-item]]:text-text-dark [&_[cmdk-item]]:flex [&_[cmdk-item]]:items-center [&_[cmdk-item]]:gap-3 [&_[cmdk-list]]:max-h-[400px] [&_[cmdk-list]]:overflow-y-auto [&_[cmdk-list]]:overflow-x-hidden [&_[cmdk-list]]:p-0 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-0 [&_[cmdk-empty]]:py-6 [&_[cmdk-empty]]:text-center [&_[cmdk-empty]]:text-base [&_[cmdk-empty]]:text-box-border"
        >
          <Command.Input
            placeholder="Type a command or search..."
            className="font-sans" // Pastikan font Space Grotesk
          />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            {/* Render filtered items */}
            {filteredItems.map((item) => (
              <Command.Item
                key={item.id}
                value={item.label + item.type + item.keywords?.join('')} // Value unik untuk filtering internal cmdk jika `shouldFilter=true`
                onSelect={() => handleSelect(item.onSelect)}
                // Styling untuk Item (Hover/Selected state)
                className="font-sans aria-selected:bg-gray-hover-light aria-selected:text-text-dark" // Ganti warna hover/selected
              >
                 {/* Opsional: Tambahkan ikon tipe */}
                <span className="text-xs w-20 flex-shrink-0 text-box-border/80">{item.type}</span>
                <span>{item.label}</span>
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </div>
    </Command.Dialog>
  );
}