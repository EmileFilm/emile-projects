# Torn edition

A picture is torn into bands and snaps back still, the word stamped on paper strips: for fashion, an edition or a night out.

**What happens.** Bands of the picture *tear* sideways and snap back.

**Beats** (8 s, a loop without a seam)

- Two tears, 0–0.8 s and 4–4.8 s, in steps of a ninth of a second; still in between.
- The lowest strip is always there; the hot one comes at 0.8 s and the top one at 1.9 s; both leave at the end.

**What may change**

- The clip's vars in `emile.json`: `word` (one to three words), `bg`, `fg`, `ac` (colours: ground, main ink, hot).
- The picture: `picture()` in `clips/torn-edition/clip.html` draws it on a 720 × 1080 sheet. For a real one, add `<img id="photo" hidden src="../../assets/<file>">` before the canvas.
- The length: the beats are shares of the clip's own length.

**What makes it this piece.** The one movement, the order of the beats and the held name. Keep those when making one like it; the picture, the words and the colours are the maker's own.
