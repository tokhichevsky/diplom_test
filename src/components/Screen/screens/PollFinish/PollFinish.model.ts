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
  return [
    ...Object.entries(results).map(([channelType, score]) =>
      `${NameByPerceptionChannelType[channelType]}: ${score} (${getPerceptionChannelLevel(score)})`),
    `Дигидал: ${checkIsDigidal(results) ? "Да" : "Нет"}`
  ];
}

export function checkIsDigidal(results: { [name: string]: number }) {
  const values = Object.values(results);
  const average = values.reduce((sum, score) => sum + score, 0) / values.length;

  return values.reduce((isDigidal, score) => isDigidal && score >= (average - 2) && score <= (average + 2), true);
}

export function getPerceptionChannelLevel(score: number) {
  if (score >= 13) return "высокий";
  else if (score >= 8) return "средний";
  else return "низкий";
}
