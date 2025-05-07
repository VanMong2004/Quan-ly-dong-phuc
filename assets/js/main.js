function showDetailAction() {
  const imgMain = document.querySelector(".product-img__main");
  const imgExtra = document.querySelectorAll(".product-img__extra-item");

  imgExtra.forEach((item) => {
    item.onclick = () => {
      if (imgMain && item) {
        imgMain.src = item.src;
      }
    };
  });
}

function ProfileTab(selector) {
  // Lấy ul, a, div và kiểm tra
  this.container = document.querySelector(`${selector}`);
  if (!this.container) {
    console.log(`Không tìm thấy ${this.container}`);
    return;
  }

  this.tabs = Array.from(this.container.querySelectorAll("li a"));

  this.panels = this.tabs.map((tab) => {
    const panel = document.querySelector(tab.getAttribute("href"));
    return panel;
  });

  // Reset lại không có gì
  this.tabs.forEach((tab) => {
    tab.closest("li").classList.remove("tab--active");
  });
  this.panels.forEach((panel) => (panel.hidden = true));

  this.tabs.forEach((tab) => {
    tab.onclick = (e) => {
      e.preventDefault();

      // Reset lại không có gì
      this.tabs.forEach((tab) => {
        tab.closest("li").classList.remove("tab--active");
      });
      this.panels.forEach((panel) => (panel.hidden = true));

      // Gán active cho từng thẻ
      tab.closest("li").classList.add("tab--active");

      const panelActive = document.querySelector(tab.getAttribute("href"));
      panelActive.hidden = false;
    };
  });
}
