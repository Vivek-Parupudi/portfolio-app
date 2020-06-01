import React from 'react';
import SkillsList from './SkillList';

function SkillCard(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="center aligned header">
          {props.skills.name}
        </div>
        <div className="center aligned">
          <SkillsList skills={props.skills.skills} />
        </div>
      </div>
    </div>
  );
}

export default SkillCard;