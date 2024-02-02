/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js configuration options go here

  // Add the output property for static HTML export
  output: {
    // This will create a folder named "out" with the exported files
    // Feel free to change the "out" to your preferred output folder name
    dir: 'out',
  },
};

module.exports = nextConfig;
