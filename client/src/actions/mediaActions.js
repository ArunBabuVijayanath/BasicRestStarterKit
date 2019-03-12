export const FETCH_MEDIA_BEGIN = "FETCH_MEDIA_BEGIN";
export const FETCH_MEDIA_SUCCESS = "FETCH_MEDIA_SUCCESS";
export const FETCH_MEDIA_FAILURE = "FETCH_MEDIA_FAILURE";

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

export function getMediaContents(pageNumber) {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("http://localhost:5000/posts/" + pageNumber)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
