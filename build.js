const sourceFiles = [
  "index.html",
  "core.css",
  "theme-classic.css",
  "favicon.ico",
];

const distDir = "dist";

await Bun.$`rm -rf ${distDir}`;
await Bun.$`mkdir -p ${distDir}`;

for (const file of sourceFiles) {
  await Bun.write(`${distDir}/${file}`, Bun.file(file));
}

console.log(`Built ${sourceFiles.length} files into ./${distDir}`);
