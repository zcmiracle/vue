import lmRequest from "../request";

export function getHomeHotSuggests() {
  return lmRequest.get({
    url: "/home/hotSuggests",
  });
}

export function getHomeCategories() {
  return lmRequest.get({
    url: "/home/categories",
  });
}

// currentPage 页码
export function getHomeHouseList(currentPage) {
  return lmRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
