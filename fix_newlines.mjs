import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
    if (filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // The literal '\n' strings appear randomly between the script tags or near the </body> tag.
        // We will just do a global replace of literal '\\n' with actual newlines '\n' 
        // ONLY if they appear near the end of the file or around our custom script blocks.
        // Wait, actually, let's just globally replace ALL literal '\\n' that are floating between tags.
        // Or simpler: The universal_injector added `\\n` exactly as text. 
        // Let's replace literally "\\n<!-- project-swapper -->" with "\n<!-- project-swapper -->"
        // and so on.
        
        content = content.replace(/\\n/g, '\n');

        if (content !== original) {
            fs.writeFileSync(filePath, content);
            console.log('Fixed literal newlines in:', filePath);
        }
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === '.vite' || file === 'dist') continue;
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkDir(filePath);
        } else {
            fixFile(filePath);
        }
    }
}

walkDir('.');
