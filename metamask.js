const accessToMetamask = () => {
    if (window.ethereum) {
        console.log("Access");

        window.ethereum.request({ method: 'eth_requestAccounts'})
        .then(result => {
            accountChangedHandler(result[0]);
        })} else {
            Swal.fire({
                title: 'What are you waiting for?',
                color: 'red',
                background: 'black',
                text: 'Go install Metamask now!',
                imageUrl: 'https://pa1.narvii.com/7957/dd0dec18fda53bcf3b7d5cbe43f6aa1cbf9daa8dr1-603-300_hq.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Stranger things image',
              });
    };
    const accountChangedHandler = (Account) => {
		setDefaultAccount(Account);
		getAccountBalance(Account.toString());
	}
};