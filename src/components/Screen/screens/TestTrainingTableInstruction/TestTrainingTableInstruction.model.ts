import {TaskTable} from "../../../../models/TaskTable.model";

export const ExampleTable1: TaskTable = {
  columnNames: ["Мадрид", "Париж", "Вена", "Рим", "Прага", "Осло"],
  rowNames: ["Биология", "Литература", "История", "Физика"],
  tasks: [{
    text: "Пожалуйста, укажите на ячейку в строке, стоящей выше строки История, и столбце, который расположен правее столбца Рим",
    answer: [1, 4]
  }]
};

export const ExampleTable2: TaskTable = {
  columnNames: ["Фосфор", "Сера", "Калий", "Водород", "Бор", "Азот"],
  rowNames: ["Глагол", "Местоимение", "Числительное", "Союз"],
  tasks: [{
    text: "Укажите клетку, расположенную на две клетки выше и на три клетки правее, чем пересечение строки Числительное и столбца Калий",
    answer: [0, 5]
  }]
};

