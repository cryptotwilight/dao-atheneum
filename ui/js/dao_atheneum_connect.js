const onboardButton = document.getElementById("connect_web_3");
const showWallet = document.getElementById("show_wallet");

var account;
const web3 = new Web3(window.ethereum);

const daoAtheneumAddress = "0x1Acd4022862617050a7374883be01fB90293e49E";
const daoAtheneumContract = new web3.eth.Contract(iDAOAtheneumAbi, daoAtheneumAddress);

const ipfs = window.IpfsHttpClientLite('https://ipfs.infura.io:5001')
const buffer = window.IpfsHttpClientLite.Buffer;
console.log("got ipfs: " + ipfs);

//Created check function to see if the MetaMask extension is installed
const isMetaMaskInstalled = () => {

	const {
		ethereum
	} = window;
	return Boolean(ethereum && ethereum.isMetaMask);
};

const MetaMaskClientCheck = () => {
	//Now we check to see if Metmask is installed
	if (!isMetaMaskInstalled()) {
		console.log("metamask not installed");
		//If it isn't installed we ask the user to click to install it
		onboardButton.innerText = 'Click here to install MetaMask!';
		//When the button is clicked we call this function
		onboardButton.onclick = onClickInstall;
		//The button is now disabled
		onboardButton.disabled = false;
	} else {
		//If it is installed we change our button text
		onboardButton.innerText = 'Click to Connect Metamask';

		console.log("metamask installed");
		onboardButton.addEventListener('click', () => {
			getAccount();
			onboardButton.innerText = "Web 3 Connected";
		});
	}
};
const initialize = () => {
	MetaMaskClientCheck();
};

window.addEventListener('DOMContentLoaded', initialize);

async function getAccount() {
	const accounts = await ethereum.request({
		method: 'eth_requestAccounts'
	});
	account = accounts[0];
	showWallet.innerHTML = "<b>Connected Wallet :: " + account + "</b>";
	loadPage(); 
}

//We create a new MetaMask onboarding object to use in our app
//const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

//This will start the onboarding proccess
const onClickInstall = () => {
	onboardButton.innerText = 'Onboarding in progress';
	onboardButton.disabled = true;
	//On this object we have startOnboarding which will start the onboarding process for our end user
	onboarding.startOnboarding();
};

const onClickConnect = async() => {
	try {
		// Will open the MetaMask UI
		// You should disable this button while the request is pending!
		await ethereum.request({
			method: 'eth_requestAccounts'
		});
	} catch (error) {
		console.error(error);
	}
};

function ge(element) {
	return document.getElementById(element);
}

function ce(element) {
	return document.createElement(element);
}

function text(txt) {
	return document.createTextNode(txt);
}