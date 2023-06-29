chrome.action.onClicked.addListener((tab) => {
    let url = tab.url;
    let newUrl = url + "&emi=ATVPDKIKX0DER";
    chrome.tabs.update(tab.id, {url: newUrl});
});
