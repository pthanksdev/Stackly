// app/dashboard/components/types.ts
export type Framework = 'html' | 'react' | 'nextjs' | 'typescript';

export interface ComponentVersion {
  framework: Framework;
  label: string;
  code: string;
}

export interface ComponentItem {
  id: number;
  name: string;
  category: 'buttons' | 'cards' | 'forms' | 'navbars' | 'footers' | 'sidebars' | 'headers' | 'modals' | 'alerts' | 'badges' | 'hooks' | 'next-api' | 'layouts' | 'feedback';
  description: string;
  versions: ComponentVersion[];
  preview: string;
  color: string;
}
