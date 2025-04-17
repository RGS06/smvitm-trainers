import React from 'react';
import TrainerCard from './TrainerCard';
import './SoftSkillTrainers.css';

const SoftSkillTrainers = () => {
  // Sample data for soft skill trainers
  const softSkillTrainers = [
    {
      id: 1,
      name: 'Dr. Priya Nair',
      role: 'Communication Skills Trainer',
      email: 'priya.nair@smvitm.edu.in',
      phone: '+91 9876543211',
      image: 'https://ext.same-assets.com/1928684896/2062414329.jpeg',
      specialization: 'Verbal Communication, Public Speaking, Business Writing',
      experience: '15+ years in corporate communication training',
      certifications: [
        'Certified Professional in Training Management',
        'Toastmasters International Certification',
        'TESOL Certification'
      ],
      bio: 'Dr. Priya Nair is a seasoned communication skills trainer with expertise in helping students and professionals improve their verbal and written communication abilities. She has worked with Fortune 500 companies to enhance their employees\' communication skills and has designed numerous effective training programs. Dr. Nair believes in practical learning and incorporates role-playing, mock interviews, and real-life scenarios in her training sessions. Her ability to identify and address individual communication challenges has made her a highly sought-after trainer in the field.'
    },
    {
      id: 2,
      name: 'Prof. Suresh Menon',
      role: 'Leadership & Team Building Trainer',
      email: 'suresh.menon@smvitm.edu.in',
      phone: '+91 8765432100',
      image: 'https://ext.same-assets.com/1928684896/1481089598.jpeg',
      specialization: 'Leadership Development, Team Dynamics, Conflict Resolution',
      experience: '18+ years in management and leadership training',
      certifications: [
        'Certified Leadership Coach',
        'ICF Accredited Coach',
        'Management Development Program - Harvard Business School'
      ],
      bio: 'Prof. Suresh Menon is a distinguished leadership and team-building expert who has trained executives at all levels across various industries. With his background in organizational psychology, he helps individuals develop essential leadership competencies and build high-performing teams. His training methodology includes experiential learning activities, case studies, and simulations that provide practical insights into leadership challenges. Prof. Menon regularly conducts workshops on emotional intelligence, strategic thinking, and change management for both students and professionals.'
    },
    {
      id: 3,
      name: 'Ms. Deepika Gupta',
      role: 'Interview Preparation & Personality Development Trainer',
      email: 'deepika.gupta@smvitm.edu.in',
      phone: '+91 7654321099',
      image: 'https://ext.same-assets.com/1928684896/1110800075.jpeg',
      specialization: 'Resume Building, Interview Skills, Professional Etiquette',
      experience: '10+ years in career counseling and interview coaching',
      certifications: [
        'Certified Career Coach',
        'Personality Development Trainer',
        'NLP Practitioner'
      ],
      bio: 'Ms. Deepika Gupta specializes in preparing students for job interviews and professional environments. Her comprehensive approach covers everything from resume crafting and interview preparation to professional appearance and workplace etiquette. She has successfully coached thousands of students who have secured positions in top companies globally. Her training sessions incorporate mock interviews, feedback sessions, and personalized guidance. Ms. Gupta is known for her ability to identify and enhance individual strengths while helping students overcome their weaknesses.'
    },
    {
      id: 4,
      name: 'Dr. Karthik Rao',
      role: 'Time Management & Stress Management Trainer',
      email: 'karthik.rao@smvitm.edu.in',
      phone: '+91 6543210988',
      image: 'https://ext.same-assets.com/1928684896/4232417808.jpeg',
      specialization: 'Stress Management, Work-Life Balance, Productivity Enhancement',
      experience: '12+ years in behavioral training and counseling',
      certifications: [
        'Certified Stress Management Consultant',
        'Time Management Expert',
        'Mindfulness-Based Stress Reduction Trainer'
      ],
      bio: 'Dr. Karthik Rao is an expert in time management and stress reduction techniques who helps students and professionals maximize their productivity while maintaining well-being. His holistic approach addresses both organizational skills and psychological aspects of time and stress management. Dr. Rao combines scientific research with practical strategies to help individuals overcome procrastination, set effective goals, and create sustainable routines. His workshops incorporate mindfulness practices, productivity tools, and personalized action plans that participants can implement immediately.'
    }
  ];

  return (
    <div className="soft-skill-trainers">
      <h2>Soft Skill Trainers</h2>
      <div className="trainers-container">
        {softSkillTrainers.map(trainer => (
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

export default SoftSkillTrainers;
