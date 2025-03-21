import React, { useState } from 'react';
import './Sidebar.css';

const sidebarSections = [
  {
    title: 'Why is Cybersecurity Important?',
    content: `Cybersecurity protects sensitive data, prevents attacks, and secures the digital infrastructure that underpins modern society. 
Examples of major UK cyber attacks include the 2017 NHS WannaCry ransomware attack. Businesses across finance, healthcare, and government rely heavily on cyber protections.`
  },
  {
    title: 'Future Careers in Cybersecurity',
    content: `The cybersecurity sector is rapidly growing in the UK. Roles include:
• Penetration Tester – avg. salary: £45,000–£70,000
• Security Analyst – avg. salary: £35,000–£60,000
• Cybersecurity Consultant – avg. salary: £50,000–£90,000
• SOC Analyst – avg. salary: £30,000–£50,000

Top UK employers include BAE Systems, GCHQ, BT, NCC Group, and Deloitte. Many roles are remote or hybrid.`
  },
  {
    title: 'How Cybersecurity Impacts You',
    content: `Everyday actions — like logging into online banking or using social media — involve cybersecurity protections. 
Cybersecurity defends against identity theft, fraud, phishing, malware, and more. Whether you're a student or working professional, understanding these threats empowers you.`
  },
  {
    title: 'Industries Hiring in the UK',
    content: `Cybersecurity skills are in demand across:
• Finance – Barclays, HSBC, Lloyds
• Government – Home Office, GCHQ
• Tech – Google UK, Microsoft, Darktrace
• Consulting – PwC, EY, Deloitte

Entry-level apprenticeships, graduate schemes, and certifications (e.g., CompTIA, CISSP) are available.`
  },
  {
    title: 'Why Learn With Us?',
    content: `Our interactive learning journey combines gamification, real-world scenarios, and evidence-based learning models to motivate and empower learners. 
  
Build your skills, track XP, and unlock badges while preparing for real career paths in cybersecurity.

Not only will you gain knowledge that is powerful in the current state of the world, but, you will also learn how to learn - yes. You will be able to take a resource and retain all valuable golden specs of information.
`
  

}
];

const Sidebar = ({ show }) => {
  const [expanded, setExpanded] = useState(null);

  if (!show) return null;

  return (
    <div className="sidebar-overlay">
      <div className="sidebar-content">
        <h2 className="sidebar-title">Discover More About Cybersecurity</h2>
        {sidebarSections.map((section, index) => (
          <div key={index} className="sidebar-section">
            <button onClick={() => setExpanded(expanded === index ? null : index)}>
              {section.title}
            </button>
            {expanded === index && <p>{section.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
