/**
 *
 * FeatureCard
 *
 */

import React from 'react';
import { Image } from 'semantic-ui-react';

function FeatureCard({image, title, description, onClick}) {
  return (
    <div className="ui card" onClick={onClick}>
      <a className="image">
        <Image style={{ width: 'auto', height: 'auto' }} src={image}/>
      </a>
      <div className="content font-weight-bold">
        <p className="ui header" style={{ fontWeight: 'bold', fontSize: 'medium' }}>{title}</p>        
        <div className="meta">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {};

export default FeatureCard;
