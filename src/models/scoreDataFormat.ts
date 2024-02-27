export class ScoreModel {
  score: number;
  todayScore: number;

  constructor(score: number, todayScore: number) {
    this.score = score;
    this.todayScore = todayScore;
  }

  getScoreData(): { name: string; value: number }[] {
    const scoreData = [{ name: "Score", value: this.score || this.todayScore }];
    console.log("scoreData", scoreData);
    return scoreData;
  }
}
