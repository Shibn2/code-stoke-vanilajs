import chessBoard from "./Modules/domExperiments/chessBoard";
import dsp from "./Modules/domExperiments/domShortPblm";
import lruCacheApp from "./Modules/domExperiments/lruCache";
import todoVanilla from "./Modules/domExperiments/todo";
import VanilaTodoFetch from "./Modules/domExperiments/vanilaTodo";

function handleBtnClick(e, tab, tabList, contentList) {
  // Clear active from all the tabs and contents
  tabList.forEach((tab) => tab.classList.remove("active"));
  contentList.forEach((content) => content.classList.remove("active"));
  tab.classList.add("active");
  const targetContent = document.querySelector(
    `[data-content="${tab.dataset.tab}"]`
  );
  targetContent.classList.add("active");
}
function bootStrap() {
  const tabList = document.querySelectorAll(".tab");
  const contentList = document.querySelectorAll(".content");

  //Atach event listener
  tabList.forEach((tab) => {
    const tabData = tab.addEventListener("click", (e) =>
      handleBtnClick(e, tab, tabList, contentList)
    );
  });
}
lruCacheApp();
chessBoard();
dsp();
VanilaTodoFetch();
todoVanilla();
bootStrap();
