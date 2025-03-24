import lume from "lume/mod.ts";

const BASE_URL = "https://cvburgess.com";

const site = lume({
  location: new URL(BASE_URL),
  src: "./src",
});

site.copyRemainingFiles();

export default site;
