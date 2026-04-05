const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));

const regex = /rgba\(\s*(245,166,35|0,201,167|167,139,250|56,189,248|255,107,107)\s*,\s*0\.12\s*\)/g;

pages.forEach(page => {
  const filePath = path.join(srcDir, page);
  let content = fs.readFileSync(filePath, 'utf8');
  if (regex.test(content)) {
    content = content.replace(regex, 'rgba(255,51,51,0.12)');
    fs.writeFileSync(filePath, content);
    console.log(`Updated colors in ${page}`);
  }
});
