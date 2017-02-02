import Clarifai from 'clarifai';
import $ from 'jquery';

class ClarifaiInstance {
	constructor() {
		this.app = new Clarifai.App(
			'BJ9wSxnLvrjDAwKA7M9Ih44pk6xdIxMKtJml4uE3',
			'KjoJE-Zoomb3u95p3Qw8EeBsTwzXjvJLo-WykZZC'
		);
		this.results = [];
		this.domUl = $('.home-result-ul');
	}

	saveResults(url, response) {
		let line = '';
		this.domUl.append(url);
		response.outputs[0].data.concepts.forEach((elem, index)=> {
			line = `${elem.name} ${elem.value}`
			this.saveAndPublishToDom(line);
		})
	}

	saveAndPublishToDom(line) {
		this.results.push(line);
		this.domUl.append(`<li class="home-result-li">${line}</li>`);
	}

	showError(err) {
		console.error(err);
	}

	predict(url) {
		console.log("start predicting...");
		this.app.models.predict(Clarifai.NSFW_MODEL, url).then(
			(response) => this.saveResults(url, response),
			(err) => this.showError(err)
		);
	}
}

export default ClarifaiInstance;