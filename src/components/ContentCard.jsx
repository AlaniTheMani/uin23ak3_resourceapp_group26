import React from 'react';
import { useParams } from 'react-router-dom';
import resources from '../ressurser';

function ContentCardItem({ title, url }) {
  return (
    <div className='content-card-item'>
      <h3>{title}</h3>
      <p><a href={url} target='_blank' rel='noopener noreferrer'>{url}</a></p>
    </div>
  );
}

export default function ContentCard() {
  const { category } = useParams();

  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <div className='content-card'>
      <h1>{category.toUpperCase()}</h1>
      <div className='content-card-list'>
        {filteredResources.map((resource, index) => (
          <ContentCardItem
            key={index}
            title={resource.title}
            url={resource.url}
          />
        ))}
      </div>
    </div>
  );
}
