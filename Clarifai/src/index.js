import ClarifaiInstance from './clarifai-instance';
import {isValidUrl} from './utils';
import $ from 'jquery';


// instantiate a new Clarifai app passing in your clientId and clientSecret
$(window).on('load', ()=>{
	const instance = new ClarifaiInstance();
	//'https://samples.clarifai.com/metro-north.jpg'
	let input = handleInputForm(instance);

});

const handleInputForm = (instance) => {
	let input = '';
	$('#home-input-btn').on('click', ()=> {
		input =  $("#home-input-url").val();
		$("#home-input-url").val('');
		if (input === '') {
			console.log("initializing");
		} else if (isValidUrl(input)) {
			console.log("VALID URL: " + input);
			// instance.predict(input);
		} else {
			console.log("INVALID URL: " + input);
		}
	});

}