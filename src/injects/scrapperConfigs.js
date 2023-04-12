const scrapperConfigs = {
  couponDunia: {
    preprocess() {
      const loadMoreButton = document.querySelector(".load-more-offers");
      if (loadMoreButton) {
        loadMoreButton.click();
      }
      setTimeout(() => {
        cards = document.querySelectorAll(".ofr-card-wrap");
        cards.forEach((card) => {
          const showDetailsButton = card.querySelector(
            "div > .bottom-action-bar .slide-down-tag"
          );
          showDetailsButton.click();
        });
      }, 1000);
    },
    postprocess: function postprocess() {
      cards.forEach((card) => {
        const couponId = card.getAttribute("id");
        if (document.querySelector(".btn-group") === null)
          render_template({ couponId }, "btnGroup").then((addBtnGroup) => {
            card.innerHTML += addBtnGroup;
          });
      });
    },
    isVerified: ".verified-tag",
    peopleUsed: ".used-tag",
    heading: ".offer-title",
    description: ".offer-desc",
    details: "ol",
  },
  grabOn: {
    preprocess() {
      cards = document.querySelectorAll(".gmc-list > li");
      cards.forEach((card) => {
        const showDetailsButton = card.querySelector("div > ul > .c-show-det");
        showDetailsButton.click();
      });
    },
    postprocess: function postprocess() {
      cards.forEach((card) => {
        const couponId = card.querySelector("div").getAttribute("id");
        if (document.querySelector(".btn-group") === null)
          render_template({ couponId }, "btnGroup").then((addBtnGroup) => {
            card.innerHTML += addBtnGroup;
          });
      });
    },
    isVerified: "div > div > .gcbr-r > p > .verified",
    peopleUsed: "div > div > .gcbr-r > p > .usr",
    heading: "div > .gcbr > .bank >span",
    description: "div > .gcbr > p",
    details: "div > .gcb-det > ul",
  },
  zoutons: {
    preprocess() {
      setTimeout(() => {
        cards = document.querySelectorAll(".content > section > ul > li");
        cards.forEach((card) => {
          const showDetailsButton = card.querySelector(
            "div > div > .bottom-container > .show_more"
          );
          showDetailsButton?.click();
        });
      }, 1000);
    },
    postprocess: function postprocess() {
      cards.forEach((card) => {
        const couponId = card.querySelector("div").getAttribute("data-coupon-id");
        if (document.querySelector(".btn-group") === null)
          render_template({ couponId }, "btnGroup").then((addBtnGroup) => {
            card.innerHTML += addBtnGroup;
          });
      });
    },
    isVerified: "div > div > div > div > .meta .a",
    peopleUsed: "div > div > div > div > .meta .info",
    heading: "div > div > div > div > h3",
    details: "div > div > span > ul",
  },
};
