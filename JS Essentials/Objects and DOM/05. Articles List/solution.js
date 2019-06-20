function createArticle() {
	let creatiTitleElement = document.getElementById('createTitle');
	let createTitleValue = creatiTitleElement.value;

	let createContentElement = document.getElementById('createContent');
	let createContentValue = createContentElement.value;

	if (createTitleValue && createContentValue) {

		let titleElement = document.createElement('h3');
		titleElement.textContent = createTitleValue;

		let contentElement = document.createElement('p');
		contentElement.textContent = createContentValue;

		let articleElement = document.createElement('article');
		articleElement.appendChild(titleElement);
		articleElement.appendChild(contentElement);

		let articleAppends = document.getElementById('articles');
		articleAppends.appendChild(articleElement);

		creatiTitleElement.value = '';
		createContentElement.value = '';
		
	}
}