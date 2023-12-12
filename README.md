The Instant Thread Collapsinator!
===========

This userscript lets you ctrl+click a message to hide/show its replies,
i.e. collapse that message's (sub-)thread.
(n.b. messages' replies can be preemptively hidden before they have any,
 i.e. don't randomly ctrl+click messages)

Also, note that this script is currently in quite an alpha state (see Bugs section below)

Installation
------------

To run it you'll probably need to install a userscript manager.
Good ones include Greasemonkey, Tampermonkey, and Violentmonkey.
Despite being a stalwart Greasemonkey user, I'd suggest Violentmonkey.
(also, why are they all monkeys ?)

Once you've installed one, [click this link to install the script][install].
You should be asked if you're sure you want to install the script.
Thereafter, updates should be automatic (at least, theoretically; 
I have yet to actually confirm this).
You should also be able to manually update it in Tampermonkey & Violentmonkey.

[install]: https://github.com/jeremyredhead/instant-thread-collapse-userscript/raw/master/instant-thread-collapse.user.js

Bugs
----

The input bar will disappear, if you jump to an unread message that is inside a collapsed thread, and in some other cases.

Messages will appear to become unread again after un-collapsing a thread.

The "thread collapsed" indicator shows above instead of below the input bar.

Messages without replies being prematurely collapsible is a "feature" and not a "bug".
