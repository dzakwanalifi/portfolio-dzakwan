// src/components/CommandPalette
import { useState, useEffect } from 'preact/hooks';
import { Command } from 'cmdk';
import { useStore } from '@nanostores/preact'; // Import hook
import { activeFilter, setFilter } from '../stores/filterStore'; // Import store dan action

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

// Dapatkan daftar unik semua teknologi yang digunakan
const allTech = [
    ...new Set([
        ...projects.flatMap(p => p.techStack),
        ...otherProjects.flatMap(p => p.techStack)
    ])
].sort(); // Urutkan alfabetis

export default function CommandPalette() {
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const currentFilter = useStore(activeFilter);

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
        setSearch('');
    };

    // Gabungkan item navigasi & filter
    const commandItems = [
        ...siteConfig.navigation.map(section => ({
            id: section.id,
            type: 'Section',
            label: section.label,
            keywords: [section.label.toLowerCase(), 'section', 'go to'],
            onSelect: () => scrollToElement(`#${section.id}`)
        })),
        ...projects.map(project => ({
            id: `project-${project.id}`,
            targetId: 'web-projects',
            type: 'Web Project',
            label: project.title,
            keywords: [project.title.toLowerCase(), 'web', 'project', ...project.techStack.map(t => t.toLowerCase())],
            onSelect: () => scrollToElement('#web-projects')
        })),
        ...otherProjects.map(project => ({
            id: `other-${project.id}`,
            targetId: 'other-projects',
            type: project.projectType || 'Project',
            label: project.title,
            keywords: [project.title.toLowerCase(), 'other', 'project', 'tool', 'data', ...project.techStack.map(t => t.toLowerCase())],
            onSelect: () => scrollToElement('#other-projects')
        })),
        ...siteConfig.socialLinks.map(link => ({
            id: `social-${link.name.toLowerCase()}`,
            type: 'Social', 
            label: `Open ${link.name}`,
            keywords: [link.name.toLowerCase(), 'social', 'link', 'contact'],
            onSelect: () => window.open(link.url, '_blank')
        })),
        {
            id: 'filter-show-all',
            type: 'Filter',
            label: 'Show All Projects',
            keywords: ['filter', 'all', 'reset', 'clear'],
            onSelect: () => setFilter(null)
        },
        ...allTech.map(tech => ({
            id: `filter-${tech.toLowerCase().replace(/\s+/g, '-')}`,
            type: 'Filter', 
            label: `Filter by: ${tech}`,
            keywords: ['filter', 'tech', 'skill', tech.toLowerCase()],
            onSelect: () => setFilter(tech)
        }))
    ];

    const filteredCommandItems = search === '' ? commandItems : commandItems.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase()) ||
        item.keywords?.some(keyword => keyword.includes(search.toLowerCase()))
    );

    const inputPlaceholder = currentFilter
        ? `> Filtered by: ${currentFilter} (Type to search or filter...)`
        : "> Enter command or search...";

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center pt-[10vh] md:pt-[15vh]"
        >
            <div className="w-full max-w-lg bg-primary-bg border-2 border-box-border animate-on-scroll in-view">
                <Command
                    value={search}
                    onValueChange={setSearch}
                    shouldFilter={false}
                    className="[&_[cmdk-input]]:h-10 [&_[cmdk-input]]:w-full [&_[cmdk-input]]:border-b-2 [&_[cmdk-input]]:border-box-border [&_[cmdk-input]]:px-3 [&_[cmdk-input]]:text-base [&_[cmdk-input]]:text-text-dark [&_[cmdk-input]]:bg-transparent [&_[cmdk-input]]:outline-none [&_[cmdk-input]]:placeholder:text-box-border/70 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-2 [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:text-sm [&_[cmdk-item]]:text-text-dark [&_[cmdk-item]]:flex [&_[cmdk-item]]:items-center [&_[cmdk-item]]:gap-2 [&_[cmdk-list]]:max-h-[40vh] [&_[cmdk-list]]:overflow-y-auto [&_[cmdk-list]]:overflow-x-hidden [&_[cmdk-list]]:p-0 [&_[cmdk-empty]]:py-4 [&_[cmdk-empty]]:px-3 [&_[cmdk-empty]]:text-center [&_[cmdk-empty]]:text-sm [&_[cmdk-empty]]:text-box-border"
                >
                    <Command.Input
                        placeholder={inputPlaceholder}
                        className="font-sans"
                    />
                    <Command.List>
                        <Command.Empty>_No results.</Command.Empty>
                        {filteredCommandItems.map((item) => (
                            <Command.Item
                                key={item.id}
                                value={item.label + item.type + item.keywords?.join('')}
                                onSelect={() => handleSelect(item.onSelect)}
                                className="font-sans aria-selected:!bg-text-dark aria-selected:!text-text-light"
                            >
                                <span className="text-xs w-24 flex-shrink-0 text-box-border/80 opacity-75">{item.type}</span>
                                <span>{item.label}</span>
                            </Command.Item>
                        ))}
                    </Command.List>
                </Command>
            </div>
        </Command.Dialog>
    );
}