import appConfig from "../config/app.config";
export const FETCH_MEDIA_BEGIN = "FETCH_MEDIA_BEGIN";
export const FETCH_MEDIA_SUCCESS = "FETCH_MEDIA_SUCCESS";
export const FETCH_MEDIA_FAILURE = "FETCH_MEDIA_FAILURE";

export const SEARCH_MEDIA = "SEARCH_MEDIA";
export const SEARCH_RESULT_SUCCESS = "SEARCH_RESULT_SUCCESS";

export const fetchProductsBegin = () => ({
  type: FETCH_MEDIA_BEGIN
});

export const fetchProductsSuccess = mediaItems => ({
  type: FETCH_MEDIA_SUCCESS,
  payload: mediaItems
});

export const fetchProductsFailure = error => ({
  type: FETCH_MEDIA_FAILURE,
  payload: error
});

export const searchMediaSuccess = mediaItems => ({
  type: SEARCH_RESULT_SUCCESS,
  payload: mediaItems
});

export const resetMediaData = mediaItems => ({
  type: SEARCH_RESULT_SUCCESS,
  payload: mediaItems
});

export function getMediaContents(pageNumber) {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(`${appConfig.baseURL}/posts/${pageNumber}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export function searchMediaContents(searchQuery) {
  return (dispatch, getState) => {
    let alreadyLoadedMediaItems = getState().mediaReducer.contentItemsBackUp
      .content;
    let hasContentInCache = alreadyLoadedMediaItems.filter(mediaData =>
      mediaData.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (hasContentInCache && hasContentInCache.length) {
      dispatch(searchMediaSuccess(hasContentInCache));
    } else {
      return fetch(`${appConfig.baseURL}/searchpost/?search="${searchQuery}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(searchMediaSuccess(json));
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    }
  };
}

export function resetMediaContents() {
  return (dispatch, getState) => {
    const mediaData = getState().mediaReducer.contentItemsBackUp.content;
    dispatch(resetMediaData(mediaData));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
