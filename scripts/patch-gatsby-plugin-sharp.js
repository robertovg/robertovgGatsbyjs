const fs = require('fs');
const path = require('path');

function fail(message) {
  console.warn(`[patch-gatsby-plugin-sharp] ${message}`);
}

function patchFile(moduleName, replacements) {
  let target;

  try {
    target = require.resolve(moduleName);
  } catch (error) {
    fail(`Unable to resolve ${moduleName}: ${error.message}`);
    return false;
  }

  if (!fs.existsSync(target)) {
    fail(`Target file does not exist: ${target}`);
    return false;
  }

  const source = fs.readFileSync(target, 'utf8');
  let patched = source;

  replacements.forEach(({ from, to }) => {
    patched = patched.replace(from, to);
  });

  if (patched === source) {
    fail(`No ${moduleName} compatibility changes were needed.`);
    return false;
  }

  fs.writeFileSync(target, patched);
  console.log(`[patch-gatsby-plugin-sharp] Patched ${path.relative(process.cwd(), target)}`);
  return true;
}

patchFile('gatsby-plugin-sharp', [
  {
    from: /\.resize\(options\.width, options\.height\)\.crop\(options\.cropFocus\)/g,
    to: ".resize(options.width, options.height, { fit: 'cover', position: options.cropFocus })",
  },
  {
    from: /\.resize\(roundedWidth, roundedHeight\)\.crop\(args\.cropFocus\)/g,
    to: ".resize(roundedWidth, roundedHeight, { fit: 'cover', position: args.cropFocus })",
  },
  {
    from: /return pipeline\.toBufferAsync\(\);/g,
    to: 'return pipeline.toBuffer({ resolveWithObject: true });',
  },
  {
    from: /buffer = _ref5\[0\];\s*info = _ref5\[1\];/g,
    to: 'buffer = _ref5.data;\n            info = _ref5.info;',
  },
  {
    from: /if \(job\.file\.extension === `png` && args\.toFormat === `` \|\| args\.toFormat === `png`\) \{/g,
    to: 'if (false) {',
  },
  {
    from: /else if \(job\.file\.extension === `webp` && args\.toFormat === `` \|\| args\.toFormat === `webp`\) \{/g,
    to: 'else if (false) {',
  },
]);

patchFile('detect-port', [
  {
    from: /listen\(port, '0\.0\.0\.0', err => \{/g,
    to: "listen(port, '127.0.0.1', err => {",
  },
]);

patchFile('detect-port/lib/detect-port.js', [
  {
    from: /listen\(port, '0\.0\.0\.0', err => \{/g,
    to: "listen(port, '127.0.0.1', err => {",
  },
]);

patchFile('gatsby/dist/commands/develop.js', [
  {
    from: /detect\(\{ port, hostname: program\.host \}, function \(err, _port\) \{/g,
    to: 'detect({ port, hostname: program.host, callback: function (err, _port) {',
  },
  {
    from: /detect\(port, function \(err, _port\) \{/g,
    to: 'detect({ port, hostname: program.host, callback: function (err, _port) {',
  },
  {
    from: /\n              \}\);\n            \}\);\n/g,
    to: '\n              }});\n            });\n',
  },
]);
