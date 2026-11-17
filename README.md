# Geography Tools

Four interactive maps for learning the world: every country's capital, where every country is, every flag, and the states and provinces of each country. Each one has a Study mode, a Practice mode that brings your misses back, and a timed Test, all in the browser, with no account.

Made by [@samplesize_1](https://www.instagram.com/samplesize_1/). **Use them at [samplesize1.com/tools/geography](https://samplesize1.com/tools/geography/).**

| Tool | What you learn | Use it | Code |
| --- | --- | --- | --- |
| World Capitals | The capital of every country, on a 3D globe or a flat map | [Open](https://samplesize1.com/tools/capital-atlas/) | [`capital-atlas/`](capital-atlas/) |
| World Countries | Where every country is, on a 3D globe or a flat map | [Open](https://samplesize1.com/tools/country-atlas/) | [`country-atlas/`](country-atlas/) |
| World Flags | The flag of every country, and where it is on the map | [Open](https://samplesize1.com/tools/flag-atlas/) | [`flag-atlas/`](flag-atlas/) |
| States & Provinces | The states, provinces and regions of every country, one country at a time | [Open](https://samplesize1.com/tools/state-atlas/) | [`state-atlas/`](state-atlas/) |

Each tool's folder has its own README: what it covers, its files and where its data comes from.

## Run them yourself

They're plain web pages with no build step. Browsers won't load the map files from a page opened straight from disk, so serve the whole repository with any static file server:

```sh
git clone https://github.com/SampleSize1/Geography-Tools.git
cd Geography-Tools
python3 -m http.server 8000
```

Then open a tool's folder, such as http://localhost:8000/capital-atlas/. Serve the repository itself, not one tool's folder: the tools load the shared files from the folder above them, and each other's.

## How it's put together

World Capitals is the base. World Countries and World Flags are its page and code with another subject: they run [`capital-atlas/app.js`](capital-atlas/app.js), and everything that differs between the three is in [`capital-atlas/subjects.js`](capital-atlas/subjects.js). States & Provinces has its own code, and draws its globe with World Capitals' map files so the two show the same borders. A change to World Capitals' code changes all three map tools.

| Shared file | What it is |
| --- | --- |
| `capital-atlas/app.js`, `subjects.js`, `text.js`, `lang/` | World Capitals' code, words and languages, used by World Countries and World Flags too |
| `capital-atlas/geo.js` | [d3-geo](https://github.com/d3/d3-geo) and [topojson-client](https://github.com/topojson/topojson-client), bundled into one file; all four tools draw with it |
| `capital-atlas/data/` | The countries, their shapes at four levels of detail, lakes, rivers and seas; all four tools use them |
| `scripts/` | Rebuild World Capitals' map files from Natural Earth (instructions at the top of each file) |
| `js/progress.js` | Saves progress and best scores in the browser (localStorage) |
| `js/language.js` | Languages: picks one (a `?lang=` link, the one picked before, the browser's), the menu, and the text in it |

## Licences and credits

- **Code and capitals data**: MIT, see [LICENSE](LICENSE).
- **Map**: [Natural Earth](https://www.naturalearthdata.com/) 1:10m country shapes, lakes and rivers, and 1:50m sea names, public domain. Borders are drawn as the UN and most countries recognise them; the list and the reasons are in [World Capitals' README](capital-atlas/README.md#licences-and-credits).
- **Flags**: [country-flags](https://github.com/hjnilsson/country-flags) (from Wikimedia Commons) and [flag-icons](https://github.com/lipis/flag-icons) (MIT), see [`flag-atlas/flags/LICENSES.md`](flag-atlas/flags/LICENSES.md).
- **States and provinces**: Natural Earth (public domain), [geoBoundaries](https://www.geoboundaries.org/) (licence by country: public domain, CC BY or ODbL) and OpenStreetMap (ODbL), see [States & Provinces' README](state-atlas/README.md#licences-and-credits).
- **Names in other languages**: see [`capital-atlas/lang/LICENSES.md`](capital-atlas/lang/LICENSES.md).
- **d3-geo, d3-array and topojson-client** by Mike Bostock: ISC, see the [licenses](licenses/) folder.

## Updates and feedback

This repository is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever a tool changes, so edits made directly here would be overwritten. Spotted an outdated capital, flag or border, or a bug? [Open an issue](https://github.com/SampleSize1/Geography-Tools/issues) and say which tool it's about.
