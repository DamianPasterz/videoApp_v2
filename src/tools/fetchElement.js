import { formItemVimeo, getUrlVimeo } from './fetchVimeo';
import { formItemYT, getUrlYT } from './fetchYT';



const switchGetUrl = (movieInput, provider) => {
	switch (provider) {
		case "YOUTUBE":
			return getUrlYT(movieInput);
		case "VIMEO":
			return getUrlVimeo(movieInput);
		default:
			throw new Error(`Wrong provider: ${provider}`);
	}
};

const formElement = (data, provider, movieUrl) => {
	switch (provider) {
		case "YOUTUBE":
			return formItemYT(data, provider, movieUrl);
		case "VIMEO":
			return formItemVimeo(data, provider, movieUrl);
		default:
			throw new Error(`Wrong: ${provider}`);
	}
};

const fetchElement = async (movieInput, provider) => {
	const { fetchUrl, movieUrl } = switchGetUrl(movieInput, provider);

	const response = await fetch(fetchUrl);
	const data = await response.json();
	return formElement(data, provider, movieUrl);
};

export default fetchElement;
