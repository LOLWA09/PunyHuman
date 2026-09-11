const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const required = [
  'README.md', 'ARCHITECTURE.md', 'CONTRIBUTING.md', 'SECURITY.md',
  'LICENSE', 'index.html', 'manifest.webmanifest', 'service-worker.js',
  'src/core.js', 'src/app.js', 'src/styles.css', 'tests/core.test.js'
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error(`Missing required project files:\n- ${missing.join('\n- ')}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
for (const field of ['name', 'short_name', 'start_url', 'display', 'theme_color', 'icons']) {
  if (!manifest[field]) {
    console.error(`Manifest is missing required field: ${field}`);
    process.exit(1);
  }
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (packageJson.dependencies && Object.keys(packageJson.dependencies).length) {
  console.error('Runtime dependencies require an architectural review.');
  process.exit(1);
}

console.log(`Project contract verified (${required.length} required files).`);
