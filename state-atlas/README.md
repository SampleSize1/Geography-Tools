# States & Provinces

Learn the states, provinces and regions of every country, one country at a time.

**Use it here: [samplesize1.com/tools/state-atlas](https://samplesize1.com/tools/state-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), on [World Capitals](../capital-atlas/)' globe and borders.

## What it does

- The first-level subdivisions of 195 countries (Monaco and Vatican City have none): the US states, Canada's provinces and territories, France's regions, Kenya's 47 counties, Algeria's 69 provinces...
- Pick a country on the globe, then **Study** (step through the regions or click any one), **Practice** (every region asked; misses come back at the end of the round) or **Test** (one go at each region, against the clock, with your best saved)
- Two kinds of question: you get a name and click it on the map (tiny ones get a ring), or a region lights up and you type its name
- Typed answers ignore accents, and a small spelling slip counts as half a point. Names are in English where a source has them; local and other names count too
- "Show all names" (N) labels the whole country
- Borders match World Capitals' map, so the two tools always agree
- English only for now
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This tool is one folder of [Geography Tools](../README.md). It draws its globe with World Capitals' [`../capital-atlas/geo.js`](../capital-atlas/geo.js) and uses World Capitals' country shapes, lakes and rivers in [`../capital-atlas/data/`](../capital-atlas/data/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page: markup and styles |
| `js/app.js` | The page's code: choosing a country, the controls, the rounds |
| `js/core/` | Answer checking and the rules of a round, with no page code |
| `js/map.js` | Draws the globe, to look like World Capitals' |
| `js/text.js` | Every word it shows, in English |
| `data/index.json` | The countries, how many subdivisions each has, and what they're called (states, provinces, counties...) |
| `data/sub/<id>.json` | One country's subdivisions: shapes, names, and the other names that count |
| `data/borders.json` | Every country's subdivision lines at once, for the spinning globe |
| `SOURCES.md` | Which source each country's shapes came from, and how they compare with the ISO 3166-2 list |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **Shapes**: [Natural Earth](https://www.naturalearthdata.com/) 1:10m states and provinces (public domain) for most countries, drawn on the same lines as World Capitals' map. [geoBoundaries](https://www.geoboundaries.org/) (Runfola et al. 2020) where Natural Earth is out of date: its licence differs by country (public domain, CC BY, or the ODbL for data made from OpenStreetMap). Algeria's 69 provinces: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors (ODbL), by way of [geoalgeria](https://github.com/yasserstudio/geoalgeria). [`SOURCES.md`](SOURCES.md) lists the source of every country.
- **The files in `data/`** are a database made from those sources. Where a country's shapes come from an ODbL source, they are available under the [Open Database License 1.0](https://opendatacommons.org/licenses/odbl/1-0/); keep the credits above if you reuse them.
- **d3-geo, d3-array and topojson-client** by Mike Bostock: ISC, see the [licenses](../licenses/) folder.

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the tool changes, so edits made directly here would be overwritten. Some countries are not yet up to date with recent reforms. Spotted one, or a bug? [Open an issue](https://github.com/SampleSize1/Geography-Tools/issues) and say which tool it's about.
