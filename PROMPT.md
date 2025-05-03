# Prompting

This project was entirely vibe coded with GitHub Copilot writing all the code. Here is the transcript of the prompts that i gave it.

---

let's vibe code a new project!

i want to make a music quiz website.

it will have four rounds and a tie-breaker question.

each round will play up to 10 short clips of music.

i only want to use html, javascript and css. that is to say, it'll be a static site that can be hosted on GitHub pages.

the rounds are as follows:

* Round 1: Name that song (10 clips)
* Round 2: Finish the lyric (5 songs, 2 clips each)
* Round 3: Guess the theme (5 clips)
* Round 4: Throwback party (5 clips)
* Tie-breaker (1 clip)

i will provide the clips, but you can name them whatever makes sense and i'll drop the clips in.

i'd like the site to have nice big play/pause buttons so it's clear for the quizmaster to know where they have to press.

you can link the rounds together in different pages or a single page app, whatever you think is best.

---

can you create the files for me please.

also, yes, i want you to fill in the javascript for the play/pause buttons please.

---

please add 10 buttons on page 1.

each one should be a round icon with a play triangle in the middle.

when pressed, the play icon turns into a pause icon so that the clip can be paused.

---

when the music ends, the icon needs to go back to a play icon.

also, when i said pause i probably meant stop.

if i press play on a clip again i'd like it to begin from the start.

---

very nice, ok, i just tested it on my phone and it works.

i would like to break the page up a bit so that each play button is on a new line, and has the clip number next to it.

---

it's not on a new line. i'm still seeing the audio-control spans line up side by side.

would it help to make them divs instead?


---

i'm still seeing .audio-control divs line up side-by-side. that's not what i want.

i want them to appear underneath each other.

---

that's really good! can you just make them appear in the center of the screen now? they're at the left edge at the moment.

---

so good, yes thank you!!!

let's do the same as we've done for round1 on round3.

This one only has 5 clips.

---

wonderful! now exactly the same for round 4, there will be 5 clips

---

ok now the tiebreaker is a bit different, there is only 1 clip

---

ok, finally round 2.

i left this one til last because it's a bit more involved.

There are 5 clips, but each of them need two play buttons, the first clip leads up to the line, and the second clip will have the line to be revealed as the anser.

---

Actually just label each one

Clip X:

and

Reveal:

---

we could do with a bit of padding between each play button and the "Reveal" label.

---

nah, i don't mean above it, i mean to the left.

---


we have a javascript problem with round2 ...

when i click the play button i get this:

    script.js:5 Uncaught TypeError: Cannot read properties of null (reading 'querySelector') at togglePlayPause (script.js:5:23) at HTMLButtonElement.onclick (round2:19:76)

---

hmm, that didn't work. let's update the ids, i think that will be better.

---

ok, now all the other pages need updating with ids on the audio elements.

---

