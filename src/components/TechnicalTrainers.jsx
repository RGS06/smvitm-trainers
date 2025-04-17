import React from 'react';
import TrainerCard from './TrainerCard';
import './TechnicalTrainers.css';

const TechnicalTrainers = () => {
  // Sample data for technical trainers
  const technicalTrainers = [
    {
      id: 1,
      name: 'CodeChef Training Team',
      role: 'Competitive Programming & DSA Trainer',
      email: 'trainings@codechef.com',
      phone: '+91 9876543210',
      image: 'https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg',
      specialization: 'Data Structures, Algorithms, Competitive Coding',
      experience: '10+ years in programming training',
      certifications: [
        'ICPC Training Partner',
        'CodeChef Certified Trainer',
        'Google Kickstart Partner'
      ],
      bio: 'CodeChef is a competitive programming platform and community that helps students and professionals test and improve their coding skills. Their training team specializes in teaching data structures, algorithms, and competitive programming techniques to prepare students for coding competitions and technical interviews. With a structured curriculum and hands-on approach, the CodeChef training team has successfully coached thousands of students to excel in programming contests like ICPC, Google Kickstart, and various hackathons.'
    },
    {
      id: 2,
      name: 'Be Practical Tech Solutions',
      role: 'Full Stack & Industry 4.0 Trainer',
      email: 'training@bepractical.com',
      phone: '+91 8765432109',
      image: 'https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg',
      specialization: 'MERN Stack, Java Full Stack, DevOps, Cloud Technologies',
      experience: '8+ years in industry training',
      certifications: [
        'AWS Certified Training Partner',
        'IBM Certified Training Institute',
        'Microsoft Learning Partner'
      ],
      bio: 'Be Practical Tech Solutions is a premier training institute that focuses on bridging the gap between academic knowledge and industry requirements. Their expert trainers provide comprehensive training in various technologies including MERN Stack, Java Full Stack, DevOps, and Cloud Computing. They are known for their industry-focused curriculum, hands-on training approach, and placement assistance. Be Practical has partnerships with over 500+ companies and has successfully placed thousands of students in leading tech companies.'
    },
    {
      id: 3,
      name: 'Dr. Rajesh Kumar',
      role: 'Data Science & AI Trainer',
      email: 'rajesh.kumar@smvitm.edu.in',
      phone: '+91 9876543210',
      image: 'https://ext.same-assets.com/1928684896/2666367980.jpeg',
      specialization: 'Machine Learning, Deep Learning, Data Analytics',
      experience: '12+ years in industry and 8+ years in teaching',
      certifications: [
        'IBM Certified Data Scientist',
        'AWS Certified Machine Learning Specialist',
        'Stanford University - Advanced Algorithms'
      ],
      bio: 'Dr. Rajesh Kumar is a distinguished data scientist with over a decade of experience in machine learning and artificial intelligence. He has worked with major tech companies including Google and Microsoft before joining academia. His research focuses on neural networks and their applications in natural language processing. Dr. Kumar has published numerous papers in prestigious journals and has been a keynote speaker at various international conferences on AI and machine learning.'
    },
    {
      id: 4,
      name: 'Prof. Meera Sharma',
      role: 'Full Stack Development Trainer',
      email: 'meera.sharma@smvitm.edu.in',
      phone: '+91 8765432109',
      image: 'https://ext.same-assets.com/1928684896/152433576.jpeg',
      specialization: 'MERN Stack, React.js, Node.js, MongoDB',
      experience: '10+ years in web development training',
      certifications: [
        'MongoDB Certified Developer',
        'React Certification from Meta',
        'AWS Certified Developer'
      ],
      bio: 'Prof. Meera Sharma is a dedicated full-stack development trainer with expertise in modern web development technologies. She has trained over 1000 students in her career and has a passion for creating real-world projects that help students gain practical experience. Before becoming a trainer, she worked as a senior developer at top tech startups, where she built scalable web applications used by millions of users. Her teaching methodology combines theoretical knowledge with hands-on coding sessions that simulate actual industry scenarios.'
    },
    {
      id: 5,
      name: 'Dr. Anand Verma',
      role: 'Cloud Computing & DevOps Trainer',
      email: 'anand.verma@smvitm.edu.in',
      phone: '+91 7654321098',
      image: 'https://ext.same-assets.com/1928684896/3965358743.jpeg',
      specialization: 'AWS, Azure, Docker, Kubernetes, CI/CD',
      experience: '15+ years in IT infrastructure and cloud services',
      certifications: [
        'AWS Certified Solutions Architect',
        'Microsoft Certified: Azure Solutions Architect',
        'Certified Kubernetes Administrator'
      ],
      bio: 'Dr. Anand Verma is an expert in cloud computing and DevOps practices with extensive experience in designing and implementing cloud infrastructure for large enterprises. He has successfully migrated numerous legacy systems to cloud platforms and has expertise in setting up efficient CI/CD pipelines. Dr. Verma regularly conducts workshops on containerization, microservices architecture, and cloud-native application development. His students have gone on to work at top cloud service providers and tech companies worldwide.'
    },
    {
      id: 6,
      name: 'Prof. Sunita Patel',
      role: 'Cybersecurity Trainer',
      email: 'sunita.patel@smvitm.edu.in',
      phone: '+91 6543210987',
      image: 'https://ext.same-assets.com/1928684896/598672774.jpeg',
      specialization: 'Network Security, Ethical Hacking, Security Auditing',
      experience: '14+ years in information security',
      certifications: [
        'Certified Ethical Hacker (CEH)',
        'CompTIA Security+',
        'CISSP (Certified Information Systems Security Professional)'
      ],
      bio: 'Prof. Sunita Patel is a renowned cybersecurity expert who has worked with government agencies and financial institutions to strengthen their security infrastructure. She specializes in vulnerability assessment, penetration testing, and security policy development. Prof. Patel conducts regular hands-on training sessions on ethical hacking and cybersecurity best practices. Her practical approach to security training has helped students develop a deep understanding of both offensive and defensive security techniques. She is passionate about raising awareness about cybersecurity threats and building a workforce capable of addressing modern security challenges.'
    }
  ];

  return (
    <div className="technical-trainers">
      <h2>Technical Trainers</h2>
      <div className="training-partners">
        <h3>Our Training Partners</h3>
        <div className="partners-container">
          <div className="partner-card">
            <img src="https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg" alt="CodeChef" />
            <h4>CodeChef</h4>
            <p>Competitive Programming & DSA Training</p>
          </div>
          <div className="partner-card">
            <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="Be Practical" />
            <h4>Be Practical</h4>
            <p>Full Stack & Industry 4.0 Training</p>
          </div>
        </div>
      </div>
      <div className="trainers-container">
        {technicalTrainers.map(trainer => (
          <TrainerCard
            key={trainer.id}
            name={trainer.name}
            role={trainer.role}
            email={trainer.email}
            phone={trainer.phone}
            image={trainer.image}
            specialization={trainer.specialization}
            experience={trainer.experience}
            certifications={trainer.certifications}
            bio={trainer.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalTrainers;
