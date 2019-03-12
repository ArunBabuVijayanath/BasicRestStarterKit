import { stat } from "fs";

const initialState = {
  title: "",
  "total-content-items": "",
  "page-num-requested": 1,
  "page-size-requested": "",
  "page-size-returned": "",
  isLoading: false,
  maxPageNumber: 1,
  "content-items": {
    content: []
  }
};

//change state in an immutable way
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEDIA_BEGIN":
      state = {
        ...state,
        isLoading: true
      };
      break;

    case "FETCH_MEDIA_SUCCESS":
      state = {
        ...state,
        isLoading: false,
        maxPageNumber: Math.ceil(
          action.payload.page["total-content-items"] /
            action.payload.page["page-size-requested"]
        ),
        title: action.payload.page.title,
        "total-content-items": action.payload.page["total-content-items"],
        "page-num-requested": action.payload.page["page-num-requested"],
        "page-size-requested": action.payload.page["page-size-requested"],
        "page-size-returned": action.payload.page["page-size-returned"],
        "content-items": {
          ...state["content-items"],
          content: [
            ...state["content-items"].content,
            ...action.payload.page["content-items"].content
          ]
        }
      };
      break;

    case "FETCH_MEDIA_FAILURE":
      state = {
        ...state,
        isLoading: false
      };
      break;
  }
  return state;
};
