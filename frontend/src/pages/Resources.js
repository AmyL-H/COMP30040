import React from 'react';
import './Resources.css';
import { useNavigate } from 'react-router-dom';

function Resources() {
  const navigate = useNavigate();

  const resourceSections = [
    {
      title: "🧠 Study Tools & Guides",
      items: [
        { name: "Cybersecurity Glossary", link: "https://www.cisa.gov/resources-tools/glossary", description: "Understand key terms used in the cybersecurity world." },
        { name: "OWASP Top 10", link: "https://owasp.org/Top10/", description: "The most critical security risks to web applications." },
        { name: "NIST Cybersecurity Framework", link: "https://www.nist.gov/cyberframework", description: "Industry-standard framework for managing cybersecurity risks." }
      ]
    },
    {
      title: "📚 Free Learning Platforms",
      items: [
        { name: "TryHackMe", link: "https://tryhackme.com/", description: "Hands-on cybersecurity labs and gamified learning." },
        { name: "Hack The Box Academy", link: "https://academy.hackthebox.com/", description: "Cyber labs from beginner to expert." },
        { name: "Cybrary", link: "https://www.cybrary.it/", description: "Courses on cybersecurity, cloud, network defense, and more." }
      ]
    },
    {
      title: "🛠️ Useful Tools",
      items: [
        { name: "Nmap", link: "https://nmap.org/", description: "Powerful network scanning tool used in security assessments." },
        { name: "Burp Suite", link: "https://portswigger.net/burp", description: "Web vulnerability scanner for penetration testers." },
        { name: "Wireshark", link: "https://www.wireshark.org/", description: "Network traffic analyzer for monitoring and troubleshooting." }
      ]
    },
    {
      title: "🌐 Community & Forums",
      items: [
        { name: "Reddit - r/cybersecurity", link: "https://www.reddit.com/r/cybersecurity/", description: "Active discussions, questions, and memes from professionals." },
        { name: "Stack Overflow", link: "https://stackoverflow.com/", description: "Find answers to technical questions from millions of devs." },
        { name: "Infosec Exchange (Mastodon)", link: "https://infosec.exchange/", description: "Decentralized platform for InfoSec professionals." }
      ]
    },
    {
      title: "📖 Cheatsheets",
      items: [
        { name: "Linux Command Cheatsheet", link: "https://cheatography.com/davechild/cheat-sheets/linux-command-line/pdf/", description: "Quick reference to common Linux commands." },
        { name: "Metasploit Cheatsheet", link: "https://www.offensive-security.com/metasploit-unleashed/cheatsheet/", description: "Get started with Metasploit faster." },
        { name: "Wireshark Filters", link: "https://packetlife.net/media/library/23/Wireshark_Display_Filters.pdf", description: "Filter network packets like a pro." }
      ]
    }
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-title">🔗 Helpful Resources</h1>
      <p className="resources-subtitle">Empower your learning journey with curated links, tools, and guides.</p>

      {resourceSections.map((section, idx) => (
        <div className="resource-section" key={idx}>
          <h2 className="section-title">{section.title}</h2>
          <div className="resource-cards">
            {section.items.map((item, i) => (
              <a href={item.link} target="_blank" rel="noreferrer" key={i} className="resource-card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="navigation-button">
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>
    </div>
  );
}

export default Resources;
