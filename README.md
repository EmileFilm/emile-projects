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
| Say the film | A ball, a slam and short chapters cut on the beat, landing on the name (16:9, with music) | a launch reel, a product |

## Prompts

`prompts/` holds, for each project, the prompt that makes one like it, in English (`<id>.en.md`) and Chinese (`<id>.zh.md`); [emilefilm.com/examples](https://emilefilm.com/examples/) shows them with your own words and colours filled in. At the top: what the picture shows, what to ask for next, and, in Chinese, the project's words. In the text `{word}`, `{bg}`, `{fg}`, `{ac}` … are the clip's vars (their values in `emile.json`) and `{picture}` the picture. They say what the clip's code does: change one when its code changes.

Every picture is drawn in code: no photographs, and no brand but Émile's own (its logo in Say the film). The typefaces are Google Fonts, named in the clips and fetched by Émile.

## Adding one

`projects/<id>/` is a whole Émile project with a `README.md` that says the movement, its beats and what may change, plus `preview.mp4` and `preview.jpg` (360 × 640, no sound). Its title, line, genre (the kind of film, which Home sorts by: `Motion design` for now), kind (its technique: Kinetic type, ASCII…) and beats go in `projects.json`, its prompts in `prompts/`. Then:

```bash
node scripts/build.mjs      # checks each project with Émile's engine (../Emile/engine) and writes index.json
```

## Licence

MIT, see `LICENSE`.
