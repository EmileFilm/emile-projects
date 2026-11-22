# Running rows

One loud word runs past itself in rows, a picture cuts in, then the word stands whole: for a drop, a sale or a launch.

**What happens.** Rows of one word *run* against each other.

**Beats** (8 s, a loop without a seam)

- Rows surge and ease off twice; the whole piece is a loop.
- 0.6–1.6 s the picture lands, turning; it leaves by 4.2 s.
- 4.2–4.9 s a band opens across the middle; the word is whole on it until 7.2 s; the band shuts by 7.8 s.

**What may change**

- The clip's vars in `emile.json`: `word` (one to three words), `bg`, `fg`, `ac` (colours: ground, main ink, hot).
- The picture: `picture()` in `clips/running-rows/clip.html` draws it on a 720 × 1080 sheet. For a real one, add `<img id="photo" hidden src="../../assets/<file>">` before the canvas.
- The length: the beats are shares of the clip's own length.

**What makes it this piece.** The one movement, the order of the beats and the held name. Keep those when making one like it; the picture, the words and the colours are the maker's own.
