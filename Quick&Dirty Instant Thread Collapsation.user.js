// ==UserScript==
// @name     Quick&Dirty Instant Thread Collapsation
// @version  0.0.4
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

function code() {
document.addEventListener("DOMContentLoaded", () => {

function getMsgNode(el) {
	do {
		if (el.matches('.message')) return el
	} while (el = el.parentElement)
	return null
}

Instant.listen('message.click', evt => {
	var c = evt.data.source // click event
	var m = getMsgNode(c.target) // message element

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

}) // end DOMContentLoaded
} // end function code

var script = document.createElement('script')
script.textContent = `(${code.toString()})()`
document.head.appendChild(script)
