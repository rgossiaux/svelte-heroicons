# svelte-heroicons

Yet another Svelte wrapper for [Heroicons](https://heroicons.com). 

This library differs from others in a couple main ways:
* The icon components forward common event listeners to the underlying SVG, so you may use `on:click` and so on;
* The API is closer to the official React wrappers, making it easier to use when converting [Tailwind UI](https://tailwindui.com/) components to Svelte in conjunction with [svelte-headlessui](https://github.com/rgossiaux/svelte-headlessui);
* It's based on the latest version of Heroicons (at time of writing), **1.0.5**

# Installation

```
npm install @rgossiaux/svelte-heroicons
```

# Usage

Heroicons contains two types of icons: outline and solid. They can be imported from `@rgossiaux/svelte-heroicons/outline` and `@rgossiaux/svelte-heroicons/solid` respectively. 

All icon names are CamelCased and end with the word `Icon`; for example, the `academic-cap` icon on heroicons.com is imported as `AcademicCapIcon`.

```svelte

<script>
  import { SelectorIcon } from "@rgossiaux/svelte-heroicons/solid";
  import { CheckIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>

<CheckIcon />
<SelectorIcon class="my-class" aria-hidden="true" />

```

# Documentation

See [heroicons.com](https://heroicons.com) for the full list of icons.

# License

As with the main Heroicons library, this library is MIT licensed.

# Credit

All credit goes to Tailwind Labs for designing the icons and to the [svg-to-svelte](https://github.com/metonym/svg-to-svelte) library for the tooling to wrap them as Svelte components.
