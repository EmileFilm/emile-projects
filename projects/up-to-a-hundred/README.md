# Up to a hundred

A number climbs as a colour fills the frame, then bursts into the picture and the name: for a result, a milestone or sold out.

**What happens.** A number *climbs* until it fills the frame.

**Beats** (8 s, a loop without a seam)

- 0.1–3.4 s the climb; 3.7–4.4 s it bursts into the picture (the hit).
- 4.4–5 s the name comes in on its strip; it holds until 7.2 s; then all of it drains back to 000.

**What may change**

- The clip's vars in `emile.json`: `word` (one to three words), `bg`, `fg`, `ac` (colours: ground, main ink, hot).
- The picture: `picture()` in `clips/up-to-a-hundred/clip.html` draws it on a 720 × 1080 sheet. For a real one, add `<img id="photo" hidden src="../../assets/<file>">` before the canvas.
- The length: the beats are shares of the clip's own length.

**What makes it this piece.** The one movement, the order of the beats and the held name. Keep those when making one like it; the picture, the words and the colours are the maker's own.
