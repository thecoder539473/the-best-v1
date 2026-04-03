function navigate(url) {
  if (!currentTab) return;

  if (!url.startsWith("http")) {
    url = "https://www.google.com/search?q=" + encodeURIComponent(url);
  }

  currentTab.frame.src = "/proxy?url=" + encodeURIComponent(url);

  // Set temporary title
  currentTab.tab.querySelector(".title").textContent = "Loading...";

  // Favicon (Google service)
  const favicon = document.createElement("img");
  favicon.src = "https://www.google.com/s2/favicons?domain=" + url;
  favicon.style.width = "16px";
  favicon.style.height = "16px";

  const tabEl = currentTab.tab;

  // Remove old icon if exists
  const oldIcon = tabEl.querySelector("img");
  if (oldIcon) oldIcon.remove();

  tabEl.prepend(favicon);
}
