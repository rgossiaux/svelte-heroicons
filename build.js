import * as fs from "fs/promises";
import { generateFromFolder } from "svg-to-svelte";

const options = { clean: true };

async function build() {
  await generateFromFolder(
    "node_modules/heroicons/20/solid",
    "src/lib/mini",
    options
  );

  let index = await fs.readFile("src/lib/mini/index.js", { encoding: "utf-8" });
  index = index.replace(/export { (\w+) }/g, "export { $1 as $1Icon }").replace(/from ".\/(\w+)";/g, 'from "./$1/index.js";');
  await fs.writeFile("src/lib/mini/index.js", index);

  await generateFromFolder(
    "node_modules/heroicons/24/solid",
    "src/lib/solid",
    options
  );

  index = await fs.readFile("src/lib/solid/index.js", { encoding: "utf-8" });
  index = index.replace(/export { (\w+) }/g, "export { $1 as $1Icon }").replace(/from ".\/(\w+)";/g, 'from "./$1/index.js";');
  await fs.writeFile("src/lib/solid/index.js", index);

  await generateFromFolder(
    "node_modules/heroicons/24/outline",
    "src/lib/outline",
    options
  );

  index = await fs.readFile("src/lib/outline/index.js", { encoding: "utf-8" });
  index = index.replace(/export { (\w+) }/g, "export { $1 as $1Icon }").replace(/from ".\/(\w+)";/g, 'from "./$1/index.js";');
  await fs.writeFile("src/lib/outline/index.js", index);
}

build();
