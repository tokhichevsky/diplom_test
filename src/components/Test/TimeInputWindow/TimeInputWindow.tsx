import Input from "../../UI/Input/Input";
import CSS from "./TimeInputWindow.module.scss";

const TimeInputWindow = () => {
  return (
    <div className={CSS.TimeInputWindow}>
      <p><b>Сколько длился указанный промежуток времени?</b></p>
      <div className={CSS.TimeInputWindow__field}>
        <Input type="number" className={CSS.TimeInputWindow__input}/>
        секунд
      </div>
    </div>
  );
};

export default TimeInputWindow;
