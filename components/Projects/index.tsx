import React from 'react';
import BgImg from '../Hero/HeroBackground';
import ProjectCard, { CardData } from './Card';
import { ProjectsContainer, ProjectsWrapper, Title } from './styled';

type Props = {
  projects: [{ id: string; data: CardData }];
  err: string;
};

const Projects: React.FC<Props> = ({ projects, err }) => {
  return (
    <ProjectsContainer name="projects">
      <Title>PROJECTS</Title>
      <ProjectsWrapper>
        {err && <img className="err" src="/no-data.png" alt="Error Image" />}
        {projects &&
          projects.map((project, index) => (
            <ProjectCard key={project.id} alt={index % 2} project={project} />
          ))}
      </ProjectsWrapper>
      <BgImg />
    </ProjectsContainer>
  );
};

export default Projects;
