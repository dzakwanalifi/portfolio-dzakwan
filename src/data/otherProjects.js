// src/data/otherProjects.js
import { Github, ExternalLink, Download, Chrome, Monitor, Smartphone, LayoutDashboard, FileText, Image } from 'lucide-astro'; // Tambah FileText, Image

export const otherProjects = [
    {
      id: "uncovering-bias-sentiment", // ID baru
      title: "Uncovering Bias: X Sentiment Analysis", // Judul lebih ringkas
      projectType: "Data Science Project (Team Lead)", // Tipe proyek, sebutkan peranmu
      description: "Analyzed US netizen sentiment & bias on the Palestine-Israel conflict on Platform X using NLP (VADER, TextBlob, NRCLex, LDA).", // Ringkas deskripsi & sebutkan tools
      techStack: ["Python", "ntscraper", "VADER", "TextBlob", "NRCLex", "LDA", "Sentiment Analysis", "Emotion Analysis", "Topic Modeling", "Data Collection"], // Tech stack utama
      repoUrl: "https://github.com/dzakwanalifi/palestine-israel-x-sentiment", // Link repo
      // Link langsung ke file gambar RAW di GitHub
      infographicUrl: "https://raw.githubusercontent.com/dzakwanalifi/palestine-israel-x-sentiment/main/assets/Palestine%20Israel%20Sentiment%20Analysis%20Infographics.png",
      icon: FileText, // Ikon untuk analisis/laporan
    },
    {
    id: "craids", // ID baru
    title: "CRAIDS Dashboard",
    projectType: "Data Science Project (Team - Competition)", // Tipe proyek
    description: "An AI-powered dashboard analyzing customer retention and predicting churn using CatBoost and KMeans. Developed for Data Science Weekend 2023.", // Ringkas deskripsi
    techStack: ["Python", "Streamlit", "CatBoost", "KMeans", "Tableau (Embedded)", "Churn Analysis", "Predictive Modeling"], // Tech stack
    repoUrl: "https://github.com/dzakwanalifi/churn-dashboard-ai", // Link repo
    // liveUrl: "#", // Tambahkan jika ada demo live
    icon: LayoutDashboard, 
    },
    {
      id: "snaplingo", // ID baru
      title: "Snaplingo",
      projectType: "Mobile App (Android - Team)", // Tipe proyek, sebutkan tim
      description: "AI-powered, gamified mobile app for learning English via object translation, flashcards, quests, and maps. Developed collaboratively.", // Ringkas deskripsi
      techStack: ["Android (Kotlin/Java)", "AI (Object Detection, NLP)", "Gamification", "Maps API", "Hugging Face"], // Tech stack (perkiraan)
      repoUrl: "https://github.com/harissabil/Snaplingo", // Link repo (mungkin perlu klarifikasi peranmu jika bukan repo utamamu)
      downloadUrl: "https://github.com/harissabil/Snaplingo/releases/download/v1.0.0-alpha.2/app-release.apk", // Link download APK
      icon: Smartphone, // Ikon baru
    },
    {
      id: "autoepbm-desktop",
      title: "AutoEPBM (Desktop App)",
      projectType: "Desktop Utility App",
      description: "Automates filling EPBM forms on IPB StudentPortal using Selenium and PyQt5, saving significant time for students.",
      techStack: ["Python", "Selenium", "PyQt5", "GUI Development", "Automation"],
      repoUrl: "https://github.com/dzakwanalifi/AutoEPBM-App",
      downloadUrl: "https://github.com/dzakwanalifi/AutoEPBM-App/releases/latest",
      icon: Monitor,
    },
    {
      id: "autoepbm-extension",
      title: "AutoEPBM (Browser Extension)",
      projectType: "Browser Extension",
      description: "A Chrome extension alternative for quickly filling EPBM ratings and feedback directly within the StudentPortal page.",
      techStack: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
      repoUrl: "https://github.com/dzakwanalifi/AutoEPBM-StudentPortal",
      downloadUrl: "https://github.com/dzakwanalifi/AutoEPBM-StudentPortal/releases/latest",
      icon: Chrome,
    },
    {
      id: "pelampung-ai",
      title: "Pelampung.AI",
      projectType: "Data Science Project (Team)",
      description: "Predicts and analyzes flood events in Indonesia using historical data and machine learning techniques, presented via a Streamlit dashboard.",
      techStack: ["Python", "Machine Learning", "Streamlit", "Data Analysis", "Flood Prediction"],
      repoUrl: "https://github.com/dzakwanalifi/pelampung-ai",
    },
     {
      id: "auditwatch",
      title: "AuditWatch",
      projectType: "Data Science Project (Team - Proposal)",
      description: "Identifies potential money laundering activities in banking transactions using Benford's Law and ensemble learning models. Developed for TrackAML Hackathon 2023.",
      techStack: ["Python", "Streamlit", "Benford's Law", "Ensemble Learning", "Fraud Detection", "PPATK"],
      repoUrl: "https://github.com/dzakwanalifi/AuditWatch",
    },
  ];