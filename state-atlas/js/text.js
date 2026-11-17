// Every word States & Provinces shows, in English. Other languages would be ../lang/<code>.json, listed in the page's
// SiteLanguage.start (/js/language.js picks the language and looks words up, as in every tool). The country and
// region names, and the kind of region ("states", "provinces"), are the map data's (data/), not words of the page.
//
// {name} in a text is filled in; { one, other } is picked by the number n.

export const EN = {
	/* ---------- the page ---------- */
	map_aria: 'Map. Drag to turn it, scroll or pinch to zoom, click a country or a region.',
	home_aria: 'SampleSize_1 home page',
	sub: 'Learn the regions of every country',
	title: 'States & Provinces',
	pick_country: 'Pick a country',
	loading: 'Loading…',
	answer_ph: 'Type its name',
	answer_aria: 'Name of the highlighted region',
	enter: 'Enter',
	skip: 'Skip',
	show_me: 'Show me',
	r_right: 'right',
	r_close: 'misspelled (½)',
	r_bad: 'missed',
	again: 'Again',
	practise_misses: 'Practise the misses',
	back_to_study: 'Back to Study',
	stat_score: 'Score',
	stat_time: 'Time',
	stat_streak: 'Streak',
	close: 'Close',
	find_country: 'Find a country',
	zoom_out: 'Zoom −',
	zoom_out_aria: 'Zoom out',
	zoom_in: 'Zoom +',
	zoom_in_aria: 'Zoom in',
	reset_view: 'Reset view',
	world: 'World',
	mode: 'Mode',
	mode_study: 'Study',
	mode_practice: 'Practice',
	mode_test: 'Test',
	questions: 'Questions',
	fmt_click: 'Click it',
	fmt_type: 'Type its name',
	restart: 'Restart',
	show_names: 'Show all names',
	keys: '<kbd>←</kbd><kbd>→</kbd> previous / next · <kbd>+</kbd><kbd>−</kbd> zoom · <kbd>Esc</kbd> deselect, then back to the globe · <kbd>N</kbd> names',
	credit: 'Beta. Borders match {wc}. Shapes: {ne} (public domain) and {gb} (open licences, incl. CC BY 4.0 and ODbL); Algeria © {osm} contributors (ODbL), by way of {ga}. Some countries are not yet up to date with recent reforms. Made by @samplesize_1.',
	countries: 'Countries',
	prev: '← Previous',
	next: 'Next →',
	options: 'Options',

	/* ---------- the country list ---------- */
	'continent.north-america': 'North America',
	'continent.south-america': 'South America',
	'continent.asia': 'Asia',
	'continent.europe': 'Europe',
	'continent.africa': 'Africa',
	'continent.oceania': 'Oceania',
	nothing_in: 'Nothing to learn in {names}: no subdivisions.',
	no_match: 'No country by that name.',

	/* ---------- settings ---------- */
	hint_study: 'Step through the regions with the arrows, or click any one to see its name. No score.',
	hint_practice: 'Every region is asked. Misses come back at the end of the round for another go.',
	hint_test: 'One go at each region, against the clock.',
	hint_click: 'You get a name; click it on the map. Tiny ones have a ring you can click.',
	hint_type: 'A region lights up; type its name. Accents don’t matter, and a small spelling slip counts as half a point.',
	format_in_study: 'Used in Practice and Test.',
	best_here: 'Best here: {score}/{total} in {time}',

	/* ---------- the prompt ---------- */
	overview: '{countries} countries · {regions} regions · {how}',
	overview_narrow: 'tap Countries, or a country on the globe',
	overview_wide: 'click one in the list or on the globe',
	eyebrow: '{mode} · {country}',
	score: '{score} / {total}',
	your_best: 'your best here',
	best_was: 'best {score}/{total} in {time}',
	click_region: 'click a region to see its name',
	which_lit: 'Which {kind} is lit up?',
	n_of: '{i} of {n}',
	how_click: 'click it on the map',
	how_type: 'type its name; Enter with nothing typed skips',
	n_kind: '{n} {kind}',
	far_off: { one: '{names} is off to the side: drag the map or zoom out', other: '{names} are off to the side: drag the map or zoom out' },
	tap_region: 'Tap a region to see its name',
	step_hint: '← → to step through them, or click any one',
	also: 'also {names}',

	/* ---------- what happened ---------- */
	loading_country: 'Loading {name}…',
	load_country_fail: 'Couldn’t load {name}. Check your connection and try again.',
	esc_again: 'Press Esc again to leave this round.',
	close_spelling: 'Close: it’s spelled {name}. Half a point.',
	its_name: 'It’s {name}.',
	is_here: '{name} is here.',
	marked_red: 'That’s {picked}. {name} is marked in red.',
	not_that_type: 'Not that. Try again, or press Show me.',
	not_that_click: 'That’s {picked}. Try again.',
	lake_is: 'That’s {name}.',
	a_lake: 'That’s a lake.',
	place_of: '{name} ({of})',
	not_country: '{name} isn’t a country in this quiz.',
	already_done: '{name} is already done.',
	last_one: 'That’s the last one left.',
};

/* ---------------- the language in use ---------------- */
// app.js opens it (/js/language.js) and hands it over here
let L = null;
export function useLanguage(lang) {
	L = lang;
}
export const t = (key, vars) => (L ? L.t(key, vars) : key);
export const language = () => L;
