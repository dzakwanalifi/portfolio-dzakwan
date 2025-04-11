// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // --- START KONFIGURASI UTAMA ---
    extend: {
      // Setel Font Kustom di sini jika diperlukan (tapi kita set default di bawah)
    },
    // Override atau setel tema dasar di sini
    fontFamily: {
      // Jadikan Space Grotesk sebagai font 'sans' default
      sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      // Kamu bisa tambahkan font lain jika perlu (misal 'serif')
      // serif: [...defaultTheme.fontFamily.serif],
      // mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      // --- PALET WARNA GRAYSCALE MURNI ---
      // Warna dasar
      transparent: 'transparent', // Jangan dihapus
      current: 'currentColor',   // Jangan dihapus
      'black': '#000000',
      'white': '#FFFFFF',

      // Shades Abu-abu Kustom
      'primary-bg': '#FFFFFF',      // Background utama halaman (Putih)
      'text-dark': '#000000',       // Teks utama di background terang (Hitam)
      'text-light': '#FFFFFF',      // Teks utama di background gelap (Putih)
      'box-bg-solid': '#CCCCCC',    // Latar belakang box solid (Abu Medium)
      'box-bg-outline': '#FFFFFF',  // Latar belakang box outline (Sama dengan primary-bg)
      'box-border': '#333333',      // Warna border box atau garis (Abu Gelap)
      'footer-bg': '#000000',       // Latar belakang footer (Hitam)
      'gray-hover-light': '#F0F0F0',// Warna hover terang (Abu Terang)
      'gray-hover-dark': '#555555', // Warna hover gelap (Abu Sedikit Lebih Gelap)

      'grid-line': '#EAEAEA',
    },
    borderRadius: {
      // --- NOL-kan SEMUA BORDER RADIUS ---
      'none': '0',
      'sm': '0',
      '': '0', // Default
      'md': '0',
      'lg': '0',
      'xl': '0',
      '2xl': '0',
      '3xl': '0',
      'full': '0',
    },
    // --- END KONFIGURASI UTAMA ---
  },
  plugins: [],
}