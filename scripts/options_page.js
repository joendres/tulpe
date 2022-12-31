window.addEventListener("load", function(){
	getDefaultValues();
	document.getElementById("scarta").addEventListener('click',function(){scartaModifiche()});
	document.getElementById("salva").addEventListener('click',function(){salvaModifiche()});
});
async function getDefaultValues(){
	browser.storage.local.get().then((res) => {
		document.getElementById("input-tlp-red").value = res.tlp_red_message;
		document.getElementById("input-tlp-amber").value = res.tlp_amber_message;
		document.getElementById("input-tlp-green").value = res.tlp_green_message;
		document.getElementById("input-tlp-white").value = res.tlp_white_message;
	});
}

function scartaModifiche(){
	getDefaultValues();
}

async function salvaModifiche(){
	await browser.storage.local.set({
		tlp_red_message:  document.getElementById("input-tlp-red").value,
		tlp_amber_message:  document.getElementById("input-tlp-amber").value,
		tlp_green_message:  document.getElementById("input-tlp-green").value,
		tlp_white_message:  document.getElementById("input-tlp-white").value,
	});
	document.getElementById("conferma").classList = "hide fade-in";
	setTimeout(function(){
		document.getElementById("conferma").classList = "hide fade-out";
		setTimeout(function(){
			document.getElementById("conferma").classList = "hide";
		}, 1500);
	}, 3000);
}
