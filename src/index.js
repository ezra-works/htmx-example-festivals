import "htmx.org";
import "./my_custom";
import "./styles/main.css";
import "nunjucks";
import "htmx.org/dist/ext/client-side-templates";

// Read vars from envVariables object
const UNSPLASH_HEADER_KEY = process.env.UNSPLASH_HEADER_KEY;
const UNSPLASH_HEADER_VALUE = process.env.UNSPLASH_HEADER_VALUE;
// console.log("UNSPLASH_HEADER_KEY", UNSPLASH_HEADER_KEY);
// console.log("UNSPLASH_HEADER_VALUE", UNSPLASH_HEADER_VALUE);

document.body.addEventListener("htmx:configRequest", function (evt) {
  evt.detail.headers[UNSPLASH_HEADER_KEY] = UNSPLASH_HEADER_VALUE; // add a new header into the request
  // console.log(
  //   "evt.detail.headers[UNSPLASH_HEADER_KEY]",
  //   evt.detail.headers[UNSPLASH_HEADER_KEY]
  // );
});
