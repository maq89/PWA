window.addEventListener('load', function(){
	registersw();
});

async function registersw(){
	if('serviceWorker' in navigator){
		try{
			await navigator.serviceWorker.register('./sw.js');
		}
		catch(e){
			console.log('Sw Registration failed');
		}
	}
}

var deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA prompt');
      } else {
        console.log('User dismissed the PWA prompt');
      }
      deferredPrompt = null;
    });
});