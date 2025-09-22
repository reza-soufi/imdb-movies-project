'use client';

import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProviderContent: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ThemeProviderContent;
