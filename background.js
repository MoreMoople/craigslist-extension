chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        // Redirect the main URL to pebbleparadise.com/craigslist
        if (details.type === "main_frame" && details.url === "https://lascruces.craigslist.org/") {
            return {redirectUrl: "https://pebbleparadise.com/craigslist/"};
        }
        // Leave subpages and other links within Craigslist untouched
        return {cancel: false};
    },
    {
        urls: [
            "*://lascruces.craigslist.org/*",
        ],
        types: ["main_frame", "sub_frame"]
    },
    ["blocking"]
);
