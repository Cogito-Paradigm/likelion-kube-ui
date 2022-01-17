var HOST_NAME = 'http://rest-container-service.default.svc.cluster.local:3000';
//
window.onload = function () {
	var URLSearch = new URLSearchParams(location.search);
	var id = URLSearch.get('id');
	//
	fetch(`${HOST_NAME}/api/detail?id=${id}`)
		.then((response) => response.json())
		.then((data) => {
			//
			var img = document.createElement('img');
			img.setAttribute('src', `assets/${id}.jpg`);
			img.setAttribute('style', 'width: 100%');
			//
			data.info[0].detail;
			var crlf = document.createElement('br');
			var title = document.createTextNode(data.info[0].title);
			var detail = document.createTextNode(data.info[0].detail);
			//
			var content = document.getElementsByClassName('content')[0];
			content.appendChild(img);
			content.appendChild(crlf);
			content.appendChild(title);
			content.appendChild(crlf);
			content.appendChild(detail);
		})
		.catch((error) => alert(error));
	//
};
