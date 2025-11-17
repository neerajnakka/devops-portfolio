import React from 'react';
import { AnimatedBackground } from '../components/visual/VisualComponents';
import EnhancedBlog from '../components/blog/EnhancedBlog';

const Blog: React.FC = () => {
  return (
    <AnimatedBackground>
      <EnhancedBlog />
    </AnimatedBackground>
  );
};

export default Blog;