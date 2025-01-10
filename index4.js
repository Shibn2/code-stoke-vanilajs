// LRU Cache dummy data source.
const SEARCH_DATA = {
  "john wick":
    "John wick is a movie series, where a retired assassin seeks vengeance for his dog's death.",
  avengers:
    "Avengers is a movie series, where a group of superheroes fight against the evil forces.",
  harryPotter:
    "Harry Potter is a movie series, where a young wizard fights against the dark lord.",
  batman: "Batman is a movie series,  where a rich",
  superman:
    "Superman is a movie series, where an alien superhero fights against the evil forces.",
};
let searchInputValue;
// LRU Cache Contructor.
let lruCacheInstance;
function lruCache(maxSize) {
  const cache = new Map();
  let order = [];
  function get(searchInput) {
    console.log("cache from get", cache);
    if (searchInput in cache) {
      order = order.filter((item) => item !== searchInput);
      order.unshift(searchInput);
      return cache[searchInput];
    } else {
      return null;
    }
  }
  function set(searchInput, searchData) {
    console.log("cache from set", cache);
    if (order.length + 1 >= maxSize) {
      const key = order.pop();
      delete cache[key];
    }
    cache[searchInput] = searchData;
    order.unshift(searchInput);
  }
  return {
    get,
    set,
  };
}
// lruCache Instance creation utitlity
function createLruCache(maxSize = 2) {
  if (lruCacheInstance) {
    return lruCacheInstance;
  }
  lruCacheInstance = new lruCache(maxSize);
  return lruCacheInstance;
}
// LRU Cache Accessing function
function fetchSearchData(searchInput) {
  const lruCache = createLruCache(3);
  const searchResult = lruCache.get(searchInput);
  if (!searchResult) {
    console.log("Server hit...........");
    const searchResultFromServer = SEARCH_DATA[searchInput];
    lruCache.set(searchInput, searchResultFromServer);
    return searchResultFromServer;
  }
  console.log("Cache hit...........");
  return searchResult;
}
// Add search results in the dom.
function displaySearchResults(results) {
  const displayBlock = document.getElementById("search-result");
  displayBlock.innerHTML = results;
}
// Submit handler callback function.
function submitEeventHanlder(e) {
  const response = fetchSearchData(searchInputValue);
  displaySearchResults(response);
}
// Input field change handler.
function inputChangeEventHandler(e) {
  searchInputValue = e.target?.value || "";
}
// DOM Update utility function.
function loadUtil() {
  const submitBtn = document.getElementById("submit-btn");
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("change", (e) => inputChangeEventHandler(e));
  submitBtn.addEventListener("click", (e) => submitEeventHanlder(e));
}
// Call DOM update utility function.
loadUtil();
