browser.pageAction.onClicked.addListener((tab, event) => {
  let { modifiers } = event;
  let newTab = modifiers.includes("Ctrl");
  let options = { newTab };

  browser.tabs.sendMessage(tab.id, options).then((response) => {
    if (response && response.url) {
      browser.tabs.create({ url: response.url });
    }
  });
});
