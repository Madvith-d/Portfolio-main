import { Code2 } from "lucide-react";

export default function TechIcon({ name, className }: { name: string, className?: string }) {
    switch (name) {
      case 'JavaScript':
        return (
          <svg viewBox="0 0 128 128" className={className} fill="currentColor">
            <rect width="128" height="128" rx="8" fill="currentColor" />
            <path d="M38 99l9.8-5.9c1.9 3.4 3.7 6.3 8 6.3 4.1 0 6.7-1.6 6.7-7.8V49h12v42.8c0 13-7.6 18.9-18.6 18.9-10 0-15.8-5.2-18.7-11.7zm43-1.3l9.8-5.7c2.6 4.3 6 7.5 11.9 7.5 5 0 8.2-2.5 8.2-6 0-4.2-3.3-5.7-8.9-8.1l-3-1.3c-8.8-3.7-14.6-8.4-14.6-18.2 0-9 6.9-16 17.7-16 7.7 0 13.2 2.7 17.1 9.7l-9.4 6c-2.1-3.7-4.4-5.2-7.7-5.2-3.5 0-5.8 2.2-5.8 5.2 0 3.7 2.3 5.1 7.6 7.4l3 1.3c10.3 4.4 16.1 8.9 16.1 19 0 10.9-8.6 16.8-20.1 16.8-11.3 0-18.6-5.4-22.1-12.4z" fill="#000" />
          </svg>
        );
      case 'React':
        return (
          <svg viewBox="-10.5 -9.45 21 18.9" className={className} fill="currentColor">
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        );
      case 'Next.js':
        return (
          <svg viewBox="0 0 180 180" className={className} fill="currentColor">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
              <circle cx="90" cy="90" r="90" fill="#000" />
            </mask>
            <g mask="url(#mask0)">
              <circle cx="90" cy="90" r="90" fill="transparent" stroke="currentColor" strokeWidth="6" />
              <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor" />
              <rect x="115" y="54" width="12" height="72" fill="currentColor" />
            </g>
          </svg>
        );
      case 'TypeScript':
        return (
          <svg viewBox="0 0 128 128" className={className} fill="currentColor">
            <path d="M1.5 63.91V126.5H126.5V1.5H1.5V63.91ZM57.65 41.5H74.96V110.5H60.28V53.28H43.14V41.5H57.65ZM95.69 84.14C93.75 83.05 92.42 82.35 91.71 82.02C89.71 81.11 88.08 80.52 86.82 80.25C85.58 79.99 84.34 79.85 83.1 79.85C81.25 79.85 79.74 80.26 78.56 81.08C77.38 81.88 76.8 83.04 76.8 84.54C76.8 85.8 77.25 86.8 78.16 87.52C79.08 88.23 80.5 88.75 82.42 89.06C83.5 89.26 85.74 89.65 89.12 90.23C95.14 91.26 99.4 92.71 101.91 94.57C104.43 96.43 105.69 99.18 105.69 102.82C105.69 105.51 104.83 107.82 103.1 109.76C101.39 111.71 99.03 113.17 96.02 114.15C93.02 115.11 89.75 115.6 86.22 115.6C82.16 115.6 78.43 115.03 75.02 113.9C71.62 112.75 68.91 111.33 66.89 109.64L72.29 98.7C74.61 100.56 77.01 101.95 79.5 102.88C82 103.79 84.45 104.25 86.85 104.25C89.02 104.25 90.7 103.88 91.91 103.13C93.13 102.37 93.74 101.27 93.74 99.83C93.74 98.68 93.34 97.77 92.54 97.11C91.75 96.43 90.31 95.88 88.22 95.45C87.42 95.28 85.34 94.9 81.99 94.31C78.61 93.71 75.83 92.93 73.66 91.96C70.19 90.39 67.57 88.29 65.81 85.64C64.06 82.98 63.18 79.82 63.18 76.16C63.18 73.18 64.04 70.62 65.77 68.49C67.51 66.36 69.91 64.76 72.99 63.71C76.08 62.64 79.54 62.11 83.39 62.11C89.59 62.11 94.81 63.38 99.06 65.91L95.69 84.14Z"/>
          </svg>
        );
      case 'Go':
        return (
          <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 80h48" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
            <path d="M83 80h23" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
            <circle cx="87" cy="80" r="16" stroke="currentColor" strokeWidth="10" />
            <circle cx="48" cy="60" r="5" fill="currentColor" />
            <circle cx="63" cy="60" r="5" fill="currentColor" />
            <path d="M24 52h19M32 40h11M93 42h11" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          </svg>
        );
      case 'C':
        return (
          <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M110 37L64 10 18 37v54l46 27 46-27V37z" stroke="currentColor" strokeWidth="10" />
            <path d="M78 43a25 25 0 100 42" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'Tailwind':
        return (
          <svg viewBox="0 0 54 33" className={className} fill="currentColor">
            <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/>
          </svg>
        );
      case 'Node.js':
        return (
          <svg viewBox="0 0 32 32" className={className} fill="currentColor">
            <path d="M16 2L2 9v14l14 7 14-7V9L16 2zm0 2.5l10 5v13l-10 5-10-5v-13l10-5zM11 11v10h2v-6l3 1.5V21h2v-6l3 1.5V21h2V11l-5 2.5-5-2.5z"/>
          </svg>
        );
      case 'MongoDB':
        return (
          <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 10c10 18 22 34 22 58 0 24-11 40-22 50-11-10-22-26-22-50 0-24 12-40 22-58z" fill="currentColor" />
            <path d="M64 24v80" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
          </svg>
        );
      case 'Docker':
        return (
          <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22" y="62" width="14" height="14" fill="currentColor" />
            <rect x="38" y="62" width="14" height="14" fill="currentColor" />
            <rect x="54" y="62" width="14" height="14" fill="currentColor" />
            <rect x="70" y="62" width="14" height="14" fill="currentColor" />
            <rect x="38" y="46" width="14" height="14" fill="currentColor" />
            <rect x="54" y="46" width="14" height="14" fill="currentColor" />
            <rect x="70" y="46" width="14" height="14" fill="currentColor" />
            <rect x="54" y="30" width="14" height="14" fill="currentColor" />
            <path d="M20 80h66c6.5 0 12.1-1.8 16.8-5.5 4.1-3.2 6.9-7.3 8.2-12.3H96.8c-.8 3.3-2.9 5.5-6.3 6.7-2.1.7-4.7 1.1-7.8 1.1H20v10z" fill="currentColor" />
          </svg>
        );
      case 'Linux':
        return (
          <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="64" cy="72" rx="28" ry="36" fill="currentColor" />
            <ellipse cx="54" cy="58" rx="3" ry="4" fill="#fff" />
            <ellipse cx="74" cy="58" rx="3" ry="4" fill="#fff" />
            <ellipse cx="64" cy="68" rx="6" ry="4" fill="#fff" />
            <ellipse cx="48" cy="104" rx="14" ry="8" fill="currentColor" />
            <ellipse cx="80" cy="104" rx="14" ry="8" fill="currentColor" />
          </svg>
        );
      default:
        return <Code2 className={className} />;
    }
  };