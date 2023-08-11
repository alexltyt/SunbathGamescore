# Sunbath Game Score

Access the tool here: [https://alexltyt.github.io/sunbathgamescore/](https://alexltyt.github.io/SunbathGamescore/)

## Introduction

Sunbath Game Score is a tool designed to help players record scores for two popular games: Big2 and Rummikub.

## Big2

**Scoring Method: "Reverse Scoring - Relative"**

In this variation of the popular card game Big Two (鋤大D), we introduce a unique scoring method called "Reverse Scoring - Relative." Unlike traditional scoring, where higher scores are better, this method aims to minimize points. Player scores are calculated relative to their ranking in the game:

- The first-place player accumulates points equal to the sum of scores from the second, third, and fourth-place players.
- The second-place player collects points equivalent to the total scores of the third and fourth-place players.
- The third-place player garners points equal to the fourth-place player's score.

**House Rules:**
In the Navigation bar at the top left corner, you can customize your own house rules. Popular house rules include doubling scores at 10 and tripling scores at 13. An alternative rule doubles scores at 8, triples scores at 10, and quadruples scores at 13.

## Rummikub

**Scoring Method: "Reverse Scoring - Winner Takes All"**

Similar to Big 2, Rummikub players aim to minimize points. However, in this version, the winner takes all, and there are no advantages for second and third-place players.

## Version History

- **V2.1 (11 Aug 2023):**
  - Fixed the flashlight bug.
  - Fixed the timeout bug.
  - Added house-rules settings to Big2.
  - Added time limit selector to Rummikub.

- **V2.0 (7 May 2023):**
  - Rewrote redundant code for improved readability.
  - Fixed flashing after selecting the winner and refined Winner().

- **V1.2 (5 Jan 2023):**
  - Added an info icon explaining the use of the restore button.
  - Fixed undo function.

- **V1.1 (23 Dec 2022):**
  - Added a restore button to retrieve previous scores and player names stored in local storage.

- **V1.0 (21 Dec 2022):**
  - Initial version of the web app. Enjoy, and please report any bugs.
  - Happy playing!
