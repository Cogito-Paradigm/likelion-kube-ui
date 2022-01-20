const movies = [
	{
		id: 1,
		name: 'evil-dead-2013',
	},
	{
		id: 2,
		name: 'annabelle-creation',
	},
	{
		id: 3,
		name: 'insidious-the-last-key',
	},
	{
		id: 4,
		name: 'the-conjuring-2',
	},
	{
		id: 5,
		name: 'dawn-of-justice',
	},
	{
		id: 6,
		name: 'suicide-squad',
	},
	{
		id: 7,
		name: 'john-wick-chapter-1',
	},
	{
		id: 8,
		name: 'john-wick-chapter-2',
	},
	{
		id: 9,
		name: 'john-wick-chapter-3',
	},
	{
		id: 10,
		name: 'lost-in-space-s1',
	},
	{
		id: 11,
		name: 'lost-in-space-s2',
	},
	{
		id: 12,
		name: 'pacific-rim-2013',
	},
	{
		id: 13,
		name: 'pacific-rim-uprising-2017',
	},
];
//

window.onload = function () {
	var URLSearch = new URLSearchParams(location.search);
	var id = URLSearch.get('id');
	var { name: moviename } = movies.filter((data) => data.id == id)[0];
	//
	fetch(`${location.origin}/api/movie/${moviename}`)
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
