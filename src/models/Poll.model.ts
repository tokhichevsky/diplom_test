export enum PerceptionChannelTypes {
  Audio = "audio",
  Visual = "visual",
  Kinesthetic = "kinesthetic",
  Digital = "digital"
}

export const NameByPerceptionChannelType = {
  [PerceptionChannelTypes.Audio]: "Аудиал",
  [PerceptionChannelTypes.Visual]: "Визуал",
  [PerceptionChannelTypes.Kinesthetic]: "Кинестетик",
  [PerceptionChannelTypes.Digital]: "Дигитал",
}

export interface Question {
  text: string,
  type: PerceptionChannelTypes
}

export const questions: Question[] = [
  {
    text: "Люблю наблюдать за облаками и звёздами.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Часто напеваю себе потихоньку.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Не признаю моду, которая неудобна.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Люблю ходить в сауну.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "В автомашине цвет для меня имеет значение.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Узнаю по шагам, кто вошёл в помещение.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Меня развлекает подражание диалектам.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Внешнему виду придаю серьезное значение.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Мне нравится принимать массаж.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Когда есть время, люблю наблюдать за людьми.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Плохо себя чувствую, когда не наслаждаюсь движением.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Видя одежду в витрине, знаю, что мне будет хорошо в ней.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Когда услышу старую мелодию, ко мне возвращается прошлое.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Люблю читать во время еды.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Люблю поговорить по телефону.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "У меня есть склонность к полноте.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Предпочитаю слушать рассказ, который кто-то читает, чем читать самому.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "После плохого дня мой организм в напряжении.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Охотно и много фотографирую.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Долго помню, что мне сказали приятели или знакомые.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Легко могу отдать деньги за цветы, потому что они украшают жизнь.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Вечером люблю принять горячую ванну.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Стараюсь записывать свои личные дела.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Часто разговариваю с собой.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "После длительной езды на машине долго прихожу в себя.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Тембр голоса многое мне говорит о человеке.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Придаю значение манере одеваться, свойственной другим.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Люблю потягиваться, расправлять конечности, разминаться.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Слишком твёрдая или слишком мягкая постель для меня мука.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Мне нелегко найти удобную обувь.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Люблю смотреть теле- и видеофильмы.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Даже спустя годы могу узнать лица, которые когда-либо видел.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Люблю ходить под дождем, когда капли стучат по зонтику.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Люблю слушать, когда говорят.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Люблю заниматься подвижным спортом или выполнять какие-либо двигательные упражнения, иногда и потанцевать.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Когда близко тикает будильник, не могу уснуть.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "У меня неплохая стереоаппаратура.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Когда слушаю музыку, отбиваю такт ногой.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "На отдыхе не люблю осматривать памятники архитектуры.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Не выношу беспорядок.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Не люблю синтетических тканей.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Считаю, что атмосфера в помещении зависит от освещения.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Часто хожу на концерты.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Пожатие руки много говорит мне о данной личности.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "Охотно посещаю галереи и выставки.",
    type: PerceptionChannelTypes.Visual
  },
  {
    text: "Серьезная дискуссия – это интересно.",
    type: PerceptionChannelTypes.Audio
  },
  {
    text: "Через прикосновение можно сказать значительно больше, чем словами.",
    type: PerceptionChannelTypes.Kinesthetic
  },
  {
    text: "В шуме не могу сосредоточиться.",
    type: PerceptionChannelTypes.Audio
  },
];

