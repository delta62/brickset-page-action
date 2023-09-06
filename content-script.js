const ITEM_NUM_SELECTOR = "[data-test=item-value]";

browser.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  let { newTab } = message;
  let setId = document.body.querySelector(ITEM_NUM_SELECTOR)?.textContent;
  let url = `https://brickset.com/sets/${setId}`;

  if (newTab) {
    sendResponse({ url });
  } else {
    window.location.href = url;
  }
});
