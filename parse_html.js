const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];
const content = fs.readFileSync(inputFile, 'utf-8');

// Extract tailwind config
const configMatch = content.match(/tailwind\.config = ([\s\S]*?)<\/script>/);
if (configMatch) {
  let configStr = configMatch[1].trim();
  let twConfig = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: ${configStr.replace(/}\s*$/, '')},
  plugins: [],
};
export default config;
`;
  fs.writeFileSync('tailwind.config.ts', twConfig);
  console.log('tailwind.config.ts updated');
}

// Extract body content
const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (bodyMatch) {
  let bodyContent = bodyMatch[1];
  
  // Convert HTML to JSX
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  bodyContent = bodyContent.replace(/<(img|input|hr|br|source)([^>]*)>/g, '<$1$2 />');
  bodyContent = bodyContent.replace(/style="background-image:\s*url\('([^']+)'\)"/g, 'style={{ backgroundImage: "url(\'$1\')" }}');
  bodyContent = bodyContent.replace(/style="font-variation-settings:\s*'FILL'\s*1"/g, 'style={{ fontVariationSettings: "\\'FILL\\' 1" }}');
  bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, ''); // comments

  let pageContent = `export default function Home() {
  return (
    <div className="bg-background text-on-background overflow-x-hidden min-h-screen">
      ${bodyContent}
      {/* We will add Pricing and Contact sections here */}
    </div>
  );
}`;
  fs.writeFileSync('app/page.tsx', pageContent);
  console.log('app/page.tsx updated');
}
