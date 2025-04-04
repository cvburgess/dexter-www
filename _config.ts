import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const BASE_URL = "https://dexterplanner.com";

const site = lume({
  location: new URL(BASE_URL),
  src: "./src",
});

site.use(tailwindcss());
site.add("index.css");
site.add("/assets");

export default site;
