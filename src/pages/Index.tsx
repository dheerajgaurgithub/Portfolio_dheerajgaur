import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Portfolio from '@/components/Portfolio';

const Index = () => {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
};

export default Index;
