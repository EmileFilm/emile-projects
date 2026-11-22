# Built in front of you

A button unfolds into a product screen, fills itself in, is pressed and folds back: for an app, a shop or a SaaS launch.

**What happens.** A screen *unfolds* out of its own button.

**Beats** (8 s, a loop without a seam)

- 0.2–1 s the button opens into the screen; picture, lines and bars come in by 4 s.
- 4–5.4 s the pointer arrives; 5.6–6.2 s it presses (the hit).
- 7–7.9 s the screen folds back into the button, where the loop began.

**What may change**

- The clip's vars in `emile.json`: `word` (one to three words), `word2`, `bg`, `fg`, `ac`, `mid` (colours: ground, main ink, hot, shapes; `word2` is the button’s words).
- The picture: `picture()` in `clips/built-in-front-of-you/clip.html` draws it on a 720 × 1080 sheet. For a real one, add `<img id="photo" hidden src="../../assets/<file>">` before the canvas.
- The length: the beats are shares of the clip's own length.

**What makes it this piece.** The one movement, the order of the beats and the held name. Keep those when making one like it; the picture, the words and the colours are the maker's own.
