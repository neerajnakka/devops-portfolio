import React from 'react';
import { AnimatedBackground } from '../components/visual/VisualComponents';
import EnhancedCaseStudies from '../components/case-studies/EnhancedCaseStudies';

const CaseStudies: React.FC = () => {
  return (
    <AnimatedBackground>
      <EnhancedCaseStudies />
    </AnimatedBackground>
  );
};

export default CaseStudies;