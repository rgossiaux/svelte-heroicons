import * as fs from "fs/promises";
import { generateFromFolder } from "svg-to-svelte";

const options = { clean: true };

async function build() {
  await generateFromFolder(
    "node_modules/heroicons/solid",
    "src/lib/solid",
    options
  );

  let index = await fs.readFile("src/lib/solid/index.js", { encoding: "utf-8" });
  index = index.replace(/export { (\w+) }/g, "export { $1 as $1Icon }").replace(/from ".\/(\w+)";/g, 'from "./$1/index.js";');
  await fs.writeFile("src/lib/solid/index.js", index);

  await generateFromFolder(
    "node_modules/heroicons/outline",
    "src/lib/outline",
    options
  );

  index = await fs.readFile("src/lib/outline/index.js", { encoding: "utf-8" });
  index = index.replace(/export { (\w+) }/g, "export { $1 as $1Icon }").replace(/from ".\/(\w+)";/g, 'from "./$1/index.js";');
  await fs.writeFile("src/lib/outline/index.js", index);
}

build();
