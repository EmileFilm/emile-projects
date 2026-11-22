# Émile projects

Free projects for [Émile](https://emilefilm.com), the video editor for Mac built for AI. Each one is a short motion piece: one movement, drawn in code, in colours and words you can change.

In Émile they are on Home, under Remake. Open one as a project of your own, or have the AI make one like it with your brand. Émile loads them from this repository.

| | What happens | Good for |
|---|---|---|
| Running rows | Rows of one word run against each other | a drop, a sale, a launch |
| Typed bloom | A picture typed over again in characters | tech, data, AI |
| Round and round | Rings of a name turn round a picture | a logo, a badge |
| Torn edition | Bands of a picture tear and snap back | fashion, a night out |
| Quarter turns | Quarter circles turn in step | design, architecture, food |
| Built in front of you | A screen unfolds out of its own button | an app, a shop |
| Breathing dots | Halftone dots swell in rings | beauty, music, print |
| Up to a hundred | A number climbs and bursts into a picture | a result, sold out |
| Through the slits | Slits open on a picture, one after another | a trailer, a place |
| Frame in frame | Frames fly out of a picture without end | sport, music, loops |

Every picture is drawn in code: no photographs, no brands. The typefaces are Google Fonts, named in the clips and fetched by Émile.

## Adding one

`projects/<id>/` is a whole Émile project with a `README.md` that says the movement, its beats and what may change, plus `preview.mp4` and `preview.jpg` (360 × 640, no sound). Its title, line, kind and beats go in `projects.json`. Then:

```bash
node scripts/build.mjs      # checks each project with Émile's engine (../Emile/engine) and writes index.json
```

## Licence

MIT, see `LICENSE`.
