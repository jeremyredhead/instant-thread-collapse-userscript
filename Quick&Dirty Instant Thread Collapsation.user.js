// ==UserScript==
// @name     Quick&Dirty Instant Thread Collapsation
// @version  0.0.2
// @match    https://instant.leet.nu/room/*
// ==/UserScript==

var css = `
.hide-thread > .replies > .message {
	display: none;
}

.hide-thread.message > .replies {
	padding-top: 6px
}

.hide-thread > .replies::after {
	display: block;
	content: '[thread collapsed]';
	color: gray;
}
`

// TODO: add class is-hidden to replies of collapsed thread
