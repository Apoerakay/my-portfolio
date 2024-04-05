import React, { useState } from 'react';
import Skills from './Skills';
import AddSkill from './AddSkill';

const ParentComponent = () => {
  const [skills, setSkills] = useState([]);

  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  return (
    <div>
      <AddSkill onAddSkill={addSkill} />
      <Skills skills={skills} />
    </div>
  );
};

export default ParentComponent;
