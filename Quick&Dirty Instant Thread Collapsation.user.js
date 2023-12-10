// ==UserScript==
// @name          Quick&Dirty Instant Thread Collapsation
// @description   Ctrl+click a message to hide/show its replies
// @version       0.1.3
// @match         https://instant.leet.nu/room/*
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
	if (c.target.matches('a, a *')) return

	// TODO: configurable accelerator key(s)
	// FIXME: prevent text selection when shift is the accelerator key
	if (!c.shiftKey && c.ctrlKey && !c.altKey && !c.metaKey) {
		evt.cancel()
		var hideThread = m.classList.toggle('hide-thread')
		// Instant uses .is-hidden to determine if keyboard navigation is prevented
		var replies = m.querySelector('.replies')
		replies && replies.childNodes.forEach(el => {
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
