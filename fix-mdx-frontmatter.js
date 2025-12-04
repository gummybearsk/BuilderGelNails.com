const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all MDX files
const mdxFiles = glob.sync('content/posts/**/*.mdx');

console.log(`Found ${mdxFiles.length} MDX files to process`);

mdxFiles.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  // Find import lines (lines starting with 'import')
  const importLines = [];
  const restLines = [];
  let inImports = true;
  let foundFrontmatter = false;
  let frontmatterStart = -1;
  let frontmatterEnd = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this is frontmatter delimiter
    if (line.trim() === '---') {
      if (!foundFrontmatter) {
        foundFrontmatter = true;
        frontmatterStart = i;
      } else if (frontmatterEnd === -1) {
        frontmatterEnd = i;
        break;
      }
    }

    // Collect import lines before frontmatter
    if (!foundFrontmatter && line.trim().startsWith('import ')) {
      importLines.push(line);
    } else if (!foundFrontmatter && line.trim() === '') {
      // Skip empty lines before frontmatter
      continue;
    } else if (foundFrontmatter && frontmatterEnd === -1) {
      // We're inside frontmatter
      continue;
    }
  }

  // Extract frontmatter content
  const frontmatter = lines.slice(frontmatterStart, frontmatterEnd + 1);

  // Extract content after frontmatter
  const contentAfterFrontmatter = lines.slice(frontmatterEnd + 1);

  // Reconstruct file: frontmatter, blank line, imports, blank line, content
  const newContent = [
    ...frontmatter,
    '',
    ...importLines,
    '',
    ...contentAfterFrontmatter.join('\n').trim().split('\n')
  ].join('\n');

  // Write back
  fs.writeFileSync(filePath, newContent);
  console.log(`✓ Fixed ${filePath}`);
});

console.log('Done!');
