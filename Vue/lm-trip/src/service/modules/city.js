import lmRequest from "../request";

export function getCityAll() {
  return lmRequest.get({
    url: "/city/all",
  });
}
 