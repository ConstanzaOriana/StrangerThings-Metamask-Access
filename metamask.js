const accessToMetamask = () => {
    if (window.ethereum) {
        console.log("Access");

        window.ethereum.request({ method: 'eth_requestAccounts'})
        .then(result => {
            accountChangedHandler(result[0]);
        })} else {
        alert("Install Metamask Pluggin");
    };
    const accountChangedHandler = (Account) => {
		setDefaultAccount(Account);
		getAccountBalance(Account.toString());
	}
};