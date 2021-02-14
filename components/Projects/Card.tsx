import React from 'react';
import { OutlinedAnchor, RoundedAnchor } from '../Anchor';
import { ButtonWrapper, CardContainer, CardContent, CardImg } from './styled';

export interface CardData {
  desc: string;
  image: { url: string; alt: string };
  site: string;
  source: string;
  title: string;
}

interface ProjectProps {
  project: {
    data: CardData;
  };
  alt: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project: { data }, alt }) => {
  const { desc, image, site, source, title } = data;
  return (
    <CardContainer alt={alt}>
      <CardImg src={image.url} alt={image.alt} />
      <CardContent>
        <h1>{title}</h1>
        <p>{desc}</p>
        <ButtonWrapper>
          <RoundedAnchor target="_blank" href={site}>
            VISIT
          </RoundedAnchor>
          <OutlinedAnchor target="_blank" href={source}>
            SOURCE
          </OutlinedAnchor>
        </ButtonWrapper>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
