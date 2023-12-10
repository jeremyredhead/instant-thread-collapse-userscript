// ==UserScript==
// @name     Quick&Dirty Instant Thread Collapsation
// @version  0.0.3
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

var style = document.createElement('style')
style.textContent = css
document.head.appendChild(style)

var js = `
document.addEventListener("DOMContentLoaded", () => {
window.$onload(() => {

Instant.listen('message.click', evt => {
	var c = evt.source // click event
	var m = c.target // message element

	/* Filter out clicks on links */
	if (m.matches('a, a *')) return

	if (c.shiftKey && !c.ctrlKey && !c.altKey && !c.metaKey) {
		evt.cancel()
		var hideThread = m.classList.toggle('hide-thread')
		// Instant uses .is-hidden to determine if keyboard navigation is prevented
		m.querySelector('.replies').childNodes.forEach(el => {
			// don't remove is-hidden from /data commands
			if (el.matches('.message:not(.data)')) {
				el.classList.toggle('is-hidden', hideThread)
			}
		})
	}
})

}) // end $onload
}) // end DOMContentLoaded
`

var script = document.createElement('script')
script.textContent = js
document.head.appendChild(script)
