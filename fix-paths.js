const fs = require('fs');
const path = require('path');

function fixPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix CSS and JS paths to be relative
      content = content.replace(/href="\/_next\//g, 'href="./_next/');
      content = content.replace(/src="\/_next\//g, 'src="./_next/');
      content = content.replace(/href="\/([^"]*\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))"/g, 'href="./$1"');
      content = content.replace(/src="\/([^"]*\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))"/g, 'src="./$1"');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in: ${filePath}`);
    } else if (file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix JavaScript internal paths
      content = content.replace(/"\/\_next\//g, '"./_next/');
      content = content.replace(/'\/\_next\//g, '"./_next/');
      content = content.replace(/`\/\_next\//g, '`./_next/');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JS paths in: ${filePath}`);
    }
  });
}

// Fix paths in the out directory
fixPaths('./out');
console.log('All paths fixed!');