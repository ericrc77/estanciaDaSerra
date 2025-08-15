const fs = require('fs');
const path = require('path');

// Função para remover classes dark: de um arquivo
function removeDarkClasses(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove todas as classes dark: mantendo o resto da className
    content = content.replace(/dark:[a-zA-Z0-9_:\[\]\/\-\.\%\(\)\+\*\!\@\#\$\^\&]+/g, '');
    
    // Remove espaços duplos que podem ter ficado
    content = content.replace(/\s+/g, ' ');
    
    // Remove espaços antes de aspas de fechamento
    content = content.replace(/\s+"/g, '"');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Processado: ${filePath}`);
  } catch (error) {
    console.error(`❌ Erro em ${filePath}:`, error.message);
  }
}

// Função para encontrar arquivos recursivamente
function findFiles(dir, extensions) {
  const files = [];
  
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDir(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  searchDir(dir);
  return files;
}

// Executar
const srcPath = path.join(__dirname, 'src');
const files = findFiles(srcPath, ['.tsx', '.ts']);

console.log(`🔍 Encontrados ${files.length} arquivos para processar...\n`);

files.forEach(removeDarkClasses);

console.log(`\n🎉 Concluído! Todas as classes dark: foram removidas.`);
