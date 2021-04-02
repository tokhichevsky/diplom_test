import {NameByPerceptionChannelType, PerceptionChannelTypes, questions} from "../../../../models/Poll.model";

export function calculatePerceptionChannel(poll: { [name: string]: boolean }) {
  const results = {
    [PerceptionChannelTypes.Kinesthetic]: 0,
    [PerceptionChannelTypes.Visual]: 0,
    [PerceptionChannelTypes.Audio]: 0
  };

  Object.values(poll).forEach((value, index) => {
    results[questions[index].type] += +value;
  });

  return results;
}

export function getResultsStringArray(results: { [name: string]: number }) {
  return Object.entries(results).map(([channelType, score]) =>
    `${NameByPerceptionChannelType[channelType]}: ${score} (${getPerceptionChannelLevel(score)})`);
}

export function getPerceptionChannel(results: { [name: string]: number }) {
  if (checkIsDigital(results)) return PerceptionChannelTypes.Digital;
  const maxScore = Math.max(...Object.values(results));

  return Object.entries(results).find(([perceptionChannel, score]) => score === maxScore)[0]
}

export function checkIsDigital(results: { [name: string]: number }) {
  const values = Object.values(results);

  if (Math.max(...values) > 8) return false;

  const average = values.reduce((sum, score) => sum + score, 0) / values.length;

  return values.reduce((isDigital, score) => isDigital && score >= (average - 2) && score <= (average + 2), true);
}

export function getPerceptionChannelLevel(score: number) {
  if (score >= 13) return "высокий";
  else if (score >= 8) return "средний";
  else return "низкий";
}
