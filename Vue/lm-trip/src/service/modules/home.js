import lmRequest from "../request";

export function getHomeHotSuggests() {
  return lmRequest.get({
    url: "/home/hotSuggests",
  });
}
