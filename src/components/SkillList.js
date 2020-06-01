import React from 'react';


function SkillList(props) {
  return (
    <div className = 'ui'>
        {props.skills.map(skill => (
                <div className="item" key={skill}>
                    {skill}
                </div>  
            ))}
    </div>    
  );
}

export default SkillList;