document.oncontextmenu = function() { return true; }

var sources = document.getElementsByTagName('source');
var videos = document.getElementsByTagName('video');
var embeds = document.getElementsByTagName('embed');
var url = '';
//console.log(sources);
//console.log(videos);
if(sources.length != 0){
	url = sources[0].src;
}else if(videos.length != 0){
	url = videos[0].src;
}else if(embeds.length != 0){
	url = embeds[0].src;
	if(url.indexOf('.swf')!=-1) url = url.substr(url.indexOf('=')+1);
}else{
	var iframes = document.getElementsByTagName('iframe');
	//console.log(iframes);
	if(iframes.length != 0){
		videos = iframes[0].contentWindow.document.getElementsByTagName('video');
		url = videos[0].src;
		iframes[0].contentWindow.document.oncontextmenu = function() { return true; }
	}
}

if(url != ''){
    var domain = location.host;
    console.info(domain);
    var dialog = document.getElementById('dialog');
    if (dialog == null) {
        var dialog = document.createElement('dialog');
        dialog.setAttribute('id', 'dialog');
        dialog.setAttribute('open', 'open');
        dialog.style.position = 'fixed';
        dialog.style.margin = '0px';
        dialog.style.top = '100px';
        dialog.style.left = '0px';
        dialog.style.zIndex = 10000;
        document.body.appendChild(dialog);
    }
    dialog.innerHTML = '';
    dialog.style.display = 'block';
    var button = document.createElement('button');
    button.textContent=' X ';
    dialog.appendChild(button);
    button.onclick = function(){
        dialog.style.display = 'none';
    }
    var br = document.createElement('br');
    dialog.appendChild(br);
    var a = document.createElement('a');
    a.textContent = 'video';
    a.href = url;
    a.target = '_blank';
    dialog.appendChild(a);
    var br = document.createElement('br');
    dialog.appendChild(br);
}