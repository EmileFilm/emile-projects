# Make me a launch film

## Visual conventions

- Frame 1920×1080, 16:9, 30 fps. Tempo 160 BPM: one beat = 0.375 s, half a beat = 0.1875 s. Every hit (a landing, a word, a switch, a flash) falls on a beat or half beat.
- Colours: Film black #100f0e (main ground), Dark panel #1b1917 (cards, tracks), Glow brown #2d2823 (radial glows, card borders, quiet fills), Cream #f7f4ee (text, lines, light grounds), Ember orange #d9541e (the one accent: the ball, the send button, the playhead, active states, the orange ground of the title), Shade #0b0a09 (deep shadows). No other hues; tints of ember (#e8774a, #a83f14) only for shading 3D faces.
- Grounds: dark scenes use radial-gradient(90% 70% at 50% 46%, #2d2823 0, #181513 48%, #100f0e 100%); an ember glow behind the hero is radial-gradient(circle, rgba(217,84,30,0.3), transparent 52%). Light scenes are flat #f7f4ee with #100f0e ink.
- Type: headings Fraunces (Google Fonts), weight 850–900, italic, tracking −0.025em, line-height 0.95. Title words are huge: 360–440 px cap height on the title scene; end-card line 110 px. Body and UI in system sans (-apple-system, 'SF Pro Text', Inter fallback) 28–44 px, weight 500. HUD labels: system sans 20 px, weight 600, uppercase, tracking 0.12em, cream at 55% opacity (near-black at 55% on cream or ember grounds).
- HUD motif (every scene except the quick flashes): top-left the chapter (e.g. '01 — SAY'), top-right 'ÉMILE', bottom-left 'VIDEO EDITOR FOR MAC', bottom-right a running timecode 00:00:00 counting the film's real time; all 56 px in from the edges.
- Layout: safe margins 96 px left/right, 72 px top/bottom; the hero centred at 50%/52%, at most 60% of the frame's width.
- Shapes: cards radius 31 px, small chips 14 px, pills 99 px; card fill #1b1917 with a 2 px #3b352f ring; soft shadow 0 30px 80px rgba(0,0,0,0.5).
- Timeline motif (clips, 3D, cut, playhead scenes, drawn the same each time): tracks are #1b1917 bars 64 px tall, 14 px apart, radius 12 (on cream, tracks are #e9e3d8); clips on them are rounded blocks radius 12 in cream #f7f4ee, glow brown #2d2823 and one ember #d9541e, with a 18 px sans label inside; the playhead is a 4 px ember line with a 22 px ember pill head.
- The ember ball motif: a 64 px #d9541e sphere with a soft cream highlight upper-left and a small ember glow; it is the ball of the opening, the full stop of 'SAY IT.', the send button and the full stop of the ending.
- Motion: snappy, back-out easing (cubic-bezier(.2,1.4,.3,1)) for landings, expo-out for slides; fast moves carry directional motion blur (a 6–10 frame smear along the move); squash and stretch on every impact. Shapes hand over to the next shape by morphing (path tween), never by fading.
- Words over a picture: cream on dark, near-black on cream or ember; never a drop shadow, contrast comes from the ground.
- The logo is the file assets/brand/Émile/logo-dark.png as given (the app icon), shown at 220 px, never redrawn or recoloured; the word 'Émile' beside it is set in Fraunces italic 500.
