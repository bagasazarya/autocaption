deepai.setApiKey('3c7c00e6-36e9-41e6-881a-57e08795c687');

let generateButton = document.getElementById('generate-text');
let inputText = document.getElementById('input-text');
let output = document.getElementById('output');
let readText = document.getElementById('read-text');
let saveButton = document.getElementById('save-text');
let resultText = "";

generateButton.onclick = () => query(inputText.value);

saveButton.onclick = save;

async function query(text) {
	if (text == "") return;

	generateButton.classList.add('disabled');
	generateButton.textContent = "Generating...";
	document.body.style.cursor = "wait";
	let response = await deepai.callStandardApi("text-generator", { text: text });

	resultText = response.output;
	output.textContent = response.output;
	generateButton.classList.remove('disabled');
	generateButton.textContent = "Generate Text";
	document.body.style.cursor = "default";
	saveButton.style.display = "block";

	if (readText.checked) {
		let convertedText = new SpeechSynthesisUtterance();
		convertedText.text = response.output;
		window.speechSynthesis.speak(convertedText);
		output.classList.add('scroll');
		let wpm = 250;
		let wordCount = resultText.trim().split(/\s+/).length;
		let readingTime = Math.ceil(wordCount / wpm) * 60;
		output.style.setProperty('--scroll-time', `${readingTime}s`);
		let removeScroll = () => { output.classList.remove('scroll'); Math.ceil()}
		output.addEventListener('animationend', removeScroll);
	}
}

async function save() {
	try {
		await navigator.share({
			title: 'Generated Text',
			text: resultText
		});
	} catch(err) {
		console.log(err);
	}
}
