export const queryParams = new URLSearchParams(window.location.search);
export const debugPage = queryParams.get("debug");
export const externalId = parseInt(queryParams.get("id"));
