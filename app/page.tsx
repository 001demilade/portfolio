"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Code2, Palette, Globe, ChevronRight, 
  Menu, X, Smartphone, Terminal
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  const navLinks = ['Home', 'Projects', 'Skills', 'Contact'];

  const socialLinks = [
    { name: "Github", href: "https://github.com/001demilade", icon: <Github size={20} /> },
    { name: "Linkedin", href: "https://www.linkedin.com/in/demilade-dare-27058238b", icon: <Linkedin size={20} /> },
    { name: "Email", href: "mailto:daredemilade01@gmail.com", icon: <Mail size={20} /> },
  ];

  const projects = [
    {
      title: "Task-Management",
      desc: "A high-performance analytics suite with real-time data streaming.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      liveLink: "https://suree.netlify.app/",
      githubLink: "https://github.com/001demilade/task",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Art Portfolio",
      desc: "Visual storytelling through digital strokes and immersive UI.",
      tech: ["Next.js", "Typescript", "Tailwind"],
      liveLink: "https://musedev.vercel.app/",
      githubLink: "https://github.com/001demilade/portfolio",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
    }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light', savedTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("reveal-active");
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const timer = setTimeout(() => setIsLoading(false), 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleEmailCopy = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 
      ${theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#0F0A1F] text-slate-200'}
      font-sans selection:bg-purple-500/30 scroll-smooth`}>
      
      {/* --- LOADING SCREEN --- */}
      <div className={`fixed inset-0 z-[999] bg-[#0F0A1F] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative">
          <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full scale-[2] animate-ping" />
          <div className="text-4xl font-black tracking-tighter text-white z-10 relative">
            MUSE<span className="text-purple-500">.</span>DEV
          </div>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-[150] transition-all duration-500 ${isScrolled ? (theme === 'light' ? "bg-white/90 border-b border-purple-200" : "bg-[#0F0A1F]/90 border-b border-purple-500/20") + " backdrop-blur-xl py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? "text-purple-600" : (theme === 'light' ? "text-slate-900" : "text-white")}`}>
            MUSE<span className="text-purple-500">.</span>DEV
          </a>
          
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.3em]">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors">{item}</a>
            ))}
          </div>

          {/* Action Buttons Group */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 border-2 
                ${theme === 'light' 
                  ? 'bg-white border-purple-600 text-purple-600 shadow-md' 
                  : 'bg-white/5 border-white/10 text-purple-400 hover:border-purple-500/50'
                }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" /> Dark
                </div>
              ) : (
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]" /> Light
                </div>
              )}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-purple-500 z-[160] relative">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <div className={`fixed inset-0 ${theme === 'light' ? 'bg-white' : 'bg-[#0F0A1F]'} z-[155] flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className={`text-2xl font-bold uppercase tracking-[0.3em] ${theme === 'light' ? 'text-slate-900' : 'text-white'} hover:text-purple-500 transition-all`}>{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="pt-48 pb-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 light:text-purple-700 text-xs font-bold uppercase tracking-[0.2em]">Available for Freelance</div>
          <h1 className={`text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            FULL-STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">DEVELOPER</span>
          </h1>
          <p className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'} text-lg max-w-md leading-relaxed`}>I build immersive, user-centric web experiences using modern technologies and bold design principles.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20">View Work</a>
            <div className="flex items-center gap-5 relative">
              {socialLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a href={link.href} target={link.name === "Email" ? "_self" : "_blank"} rel="noopener noreferrer" onClick={(e) => link.name === "Email" && handleEmailCopy(e, "daredemilade01@gmail.com")} className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'} hover:text-purple-600 transition-all duration-300 transform hover:-translate-y-1 block p-1`}>
                    {link.icon}
                  </a>
                  {link.name === "Email" && (
                    <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-[10px] font-bold rounded-md transition-all duration-300 ${emailCopied ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>COPIED!</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className={`relative aspect-square rounded-2xl overflow-hidden border ${theme === 'light' ? 'border-purple-200 bg-purple-50' : 'border-purple-500/30 bg-slate-900'}`}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" alt="Work Space" className={`object-cover w-full h-full ${theme === 'light' ? 'opacity-90' : 'opacity-60 grayscale md:hover:grayscale-0'} transition-all duration-700`} />
          </div>
        </div>
      </header>

      {/* --- MARQUEE --- */}
      <div className={`py-12 ${theme === 'light' ? 'bg-white border-y border-purple-100' : 'bg-[#0F0A1F] border-y border-purple-500/10'} overflow-hidden relative`}>
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {["Html", "Css", "Javascript", "Next.js", "React", "TypeScript", "Tailwind", "Figma", "Node.js", "Php", "MySQL", "Github"].map((skill, index) => (
            <span key={index} className={`text-4xl md:text-5xl font-black ${theme === 'light' ? 'text-slate-200' : 'text-white/10'} uppercase tracking-tighter hover:text-purple-500 transition-colors duration-500`}>{skill}</span>
          ))}
          {/* Duplicated for loop */}
          {["Html", "Css", "Javascript", "Next.js", "React", "TypeScript", "Tailwind", "Figma", "Node.js", "Php", "MySQL", "Github"].map((skill, index) => (
            <span key={index + 100} className={`text-4xl md:text-5xl font-black ${theme === 'light' ? 'text-slate-200' : 'text-white/10'} uppercase tracking-tighter hover:text-purple-500 transition-colors duration-500`}>{skill}</span>
          ))}
        </div>
      </div>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className={`text-4xl font-black ${theme === 'light' ? 'text-slate-900' : 'text-white'} uppercase tracking-tighter mb-12 reveal`}>Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className={`reveal group flex flex-col ${theme === 'light' ? 'bg-white border-purple-100 shadow-xl shadow-purple-900/5' : 'bg-slate-900/40 border-purple-900/20'} rounded-[2rem] border overflow-hidden hover:border-purple-500/40 transition-all duration-500`}>
              <div className="relative aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a href={p.githubLink} target="_blank" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-purple-600 transition-colors"><Github size={18} /></a>
                  <a href={p.liveLink} target="_blank" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-purple-600 transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className={`text-2xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'} uppercase`}>{p.title}</h3>
                <p className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'} text-sm leading-relaxed`}>{p.desc}</p>
                <div className="flex gap-2">
                  {p.tech.map(t => <span key={t} className="text-[10px] text-purple-600 font-bold uppercase tracking-widest bg-purple-500/10 px-2 py-1 rounded">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-purple-500 mb-4">Expertise</h2>
            <h3 className={`text-5xl md:text-6xl font-black ${theme === 'light' ? 'text-slate-900' : 'text-white'} tracking-tighter uppercase`}>Technical Stack</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`reveal group p-10 rounded-[2.5rem] ${theme === 'light' ? 'bg-white border-purple-100' : 'bg-slate-900/40 border-white/5'} border hover:border-purple-500/50 transition-all`}>
              <Code2 className="text-purple-500 mb-6" size={32} />
              <h4 className={`text-xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'} mb-4 uppercase`}>Development</h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TS', 'Node', 'Tailwind'].map(s => <span key={s} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 ${theme === 'light' ? 'bg-purple-50 text-purple-700' : 'bg-white/5'} rounded-full border border-purple-500/10`}>{s}</span>)}
              </div>
            </div>
            {/* Repeat for other skill cards with theme conditional colors */}
            <div className={`reveal delay-100 group p-10 rounded-[2.5rem] ${theme === 'light' ? 'bg-white border-purple-100' : 'bg-slate-900/40 border-white/5'} border hover:border-indigo-500/50 transition-all`}>
              <Palette className="text-indigo-500 mb-6" size={32} />
              <h4 className={`text-xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'} mb-4 uppercase`}>UI Design</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe CC', 'Prototyping'].map(s => <span key={s} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 ${theme === 'light' ? 'bg-indigo-50 text-indigo-700' : 'bg-white/5'} rounded-full border border-indigo-500/10`}>{s}</span>)}
              </div>
            </div>
            <div className={`reveal delay-200 group p-10 rounded-[2.5rem] ${theme === 'light' ? 'bg-white border-purple-100' : 'bg-slate-900/40 border-white/5'} border hover:border-purple-500/50 transition-all`}>
              <Globe className="text-purple-500 mb-6" size={32} />
              <h4 className={`text-xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'} mb-4 uppercase`}>Performance</h4>
              <div className="flex flex-wrap gap-2">
                {['SEO', 'Web Vitals', 'Analytics'].map(s => <span key={s} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 ${theme === 'light' ? 'bg-purple-50 text-purple-700' : 'bg-white/5'} rounded-full border border-purple-500/10`}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className={`relative pt-32 pb-10 ${theme === 'light' ? 'bg-slate-100' : 'bg-[#0F0A1F]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-purple-500 mb-6">Get in Touch</h2>
            <h3 className={`text-6xl md:text-8xl font-black ${theme === 'light' ? 'text-slate-900' : 'text-white'} tracking-tighter mb-10 leading-none italic uppercase`}>Let's Build Something.</h3>
            
            <form action="https://formspree.io/f/mlgpwonj" method="POST" className={`w-full max-w-3xl ${theme === 'light' ? 'bg-white shadow-2xl' : 'bg-white/5'} backdrop-blur-xl border ${theme === 'light' ? 'border-purple-100' : 'border-white/10'} p-8 md:p-12 rounded-[2.5rem] space-y-6`}>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <input type="text" name="name" required placeholder="Full Name" className={`w-full ${theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#0F0A1F]/50 text-white'} border border-purple-500/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500`} />
                <input type="email" name="email" required placeholder="Email Address" className={`w-full ${theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#0F0A1F]/50 text-white'} border border-purple-500/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500`} />
              </div>
              <textarea name="message" required rows={5} placeholder="Message..." className={`w-full ${theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#0F0A1F]/50 text-white'} border border-purple-500/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 resize-none`} />
              <button type="submit" className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-[0.98] transition-all">Send Message</button>
            </form>
          </div>

          <div className={`reveal flex flex-col md:flex-row justify-between items-center pt-20 border-t ${theme === 'light' ? 'border-slate-200' : 'border-white/5'} gap-8`}>
            <div className={`text-2xl font-black ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>MUSE<span className="text-purple-500">.</span>DEV</div>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'} hover:text-purple-600 transition-all`}>{link.icon}</a>
              ))}
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <a href="https://docs.google.com/document/d/1lv6I2XRIIeLLBF-J-ngGiRy54WxKa-3AcN-OPthEbCc/edit?usp=sharing" target="_blank" className="hover:text-purple-600 transition-colors">View Resume</a>
              <a href="#home" className="hover:text-purple-600 transition-colors">Back to Top</a>
            </div>
          </div>
          <p className="mt-20 text-center text-[10px] text-slate-500 uppercase tracking-[0.5em]">© 2026 MUSE DEV — ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      {/* FLOATING BUTTON */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-[200] p-4 rounded-full bg-purple-600 text-white shadow-2xl transition-all duration-500 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
      >
        <ChevronRight className="-rotate-90" size={24} />
      </button>
    </div>
  );
}