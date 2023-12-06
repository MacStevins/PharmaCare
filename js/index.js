
let pharmacy1 = readJSON('./data/pharmacy1.json');
let pharmacy2 = readJSON('./data/pharmacy2.json');

async function readJSON(path) {
	var response = await fetch(path);
	return await response.json();
}
