const https = require('https');

const SITE_URL = 'https://ericrc77.github.io/estanciaDaSerra/';

function checkSite() {
  console.log(`🔍 Verificando site: ${SITE_URL}`);
  
  const options = {
    method: 'GET',
    timeout: 10000,
  };

  const req = https.request(SITE_URL, options, (res) => {
    console.log(`✅ Status: ${res.statusCode}`);
    console.log(`📊 Headers: ${JSON.stringify(res.headers, null, 2)}`);
    
    if (res.statusCode === 200) {
      console.log('🎉 Site está ONLINE e funcionando!');
    } else {
      console.log('⚠️ Site retornou status inesperado');
    }
  });

  req.on('error', (error) => {
    console.error('❌ Erro ao verificar site:', error.message);
  });

  req.on('timeout', () => {
    console.error('⏰ Timeout ao verificar site');
    req.destroy();
  });

  req.end();
}

// Verificar imediatamente
checkSite();

// Verificar a cada 5 minutos
setInterval(checkSite, 5 * 60 * 1000);

console.log('🚀 Monitor iniciado - verificando a cada 5 minutos...');
