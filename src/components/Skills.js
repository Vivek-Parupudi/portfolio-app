import React from 'react';
import SkillsList from './SkillList';
import SkillCard from './SkillCard';

//Formatiing the document
// Select the entire document -> Ctrl+Shift+P -> type format dcoument and click on it
function Skills() {
    const frontend = {
        name: 'Frontend stack',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'ReactJS']
    }
    const backend = {
        name: "Backend Stack",
        skills: ['Python', 'Django','Java', 'MySQL','PostgreSQL']
    }
    const ML = {
        name: "Machine Learning",
        skills: ['Tensorflow', 'pandas', 'numpy', 'Pytorch']
    }
    return (
        <>
            <h1 className='ui center aligned basic segment'>Skills</h1>
            <div className='ui centered raised cards '>
                <SkillCard skills={frontend} />
                <SkillCard skills={backend} />
                <SkillCard skills={ML} />
            </div>
        </>
    );
}

export default Skills;