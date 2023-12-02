// ==UserScript==
// @name     Quick&Dirty Instant Thread Collapsation
// @version  0.0.1
// @match    https://instant.leet.nu/room/*
// ==/UserScript==

var css = `
.hide-thread .replies {
	display: none;
}

.hide-thread::after {
	display: block;
	content: '[thread collapsed]';
	padding: 5px;
	color: gray;
	margin-left: 1em;
}
`

