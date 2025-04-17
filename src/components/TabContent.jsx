import React from 'react';
import TechnicalTrainers from './TechnicalTrainers';
import SoftSkillTrainers from './SoftSkillTrainers';
import Gallery from './Gallery';
import './TabContent.css';

const TabContent = ({ activeTab }) => {
  return (
    <div className="tab-content">
      {activeTab === 'technical' && <TechnicalTrainers />}
      {activeTab === 'soft' && <SoftSkillTrainers />}
      {activeTab === 'gallery' && <Gallery />}
    </div>
  );
};

export default TabContent;
