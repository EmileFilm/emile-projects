# Typed bloom

A picture set in characters and typed over again by a sweep of light, with a name on a bar: for tech, data, AI and anything mysterious.

**What happens.** A sweep *types* the picture over again.

**Beats** (8 s, a loop without a seam)

- The sweep passes twice; the picture is there from the first frame.
- 2.4–3.2 s the bar with the name runs in; it holds until 7 s and runs back by 7.8 s.

**What may change**

- The clip's vars in `emile.json`: `word` (one to three words), `bg`, `fg`, `ac` (colours: ground, main ink, hot).
- The picture: `picture()` in `clips/typed-bloom/clip.html` draws it on a 720 × 1080 sheet. For a real one, add `<img id="photo" hidden src="../../assets/<file>">` before the canvas.
- The length: the beats are shares of the clip's own length.

**What makes it this piece.** The one movement, the order of the beats and the held name. Keep those when making one like it; the picture, the words and the colours are the maker's own.
