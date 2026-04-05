const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const pages = ['AlumniPage.js', 'CareersPage.js', 'ContactPage.js', 'FacultyPage.js', 'GalleryPage.js', 'ProgrammesPage.js', 'ResultsPage.js'];

pages.forEach(page => {
  const filePath = path.join(srcDir, page);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('VantaBackground')) {
    // Add import after last import
    const importMatch = content.match(/import .*?;?(\r?\n)/g);
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + "import VantaBackground from '../components/VantaBackground';\n");
    } else {
      content = "import VantaBackground from '../components/VantaBackground';\n" + content;
    }
  }

  // Inject component
  if (content.includes('<section className="page-hero">') && !content.includes('<VantaBackground />')) {
    content = content.replace('<section className="page-hero">', '<section className="page-hero">\n        <VantaBackground />');
    fs.writeFileSync(filePath, content);
    console.log(`Injected VantaBackground into ${page}`);
  }
});
