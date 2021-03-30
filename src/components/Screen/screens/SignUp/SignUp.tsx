import Input from "../../../UI/Input/Input";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import CSS from "./SignUp.module.scss";
import Label from "../../../UI/Label/Label";
import Select from "../../../UI/Select/Select";
import {
  MusicListeningFrequencyOptions,
  NoiseLevelOptions,
  SexOptions,
  VisitingConcertsFrequencyOptions
} from "./SignUp.model";
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {setInfo} from "../../../../store/user/user.actions";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";

const SignUp = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    patronymic: "",
    sex: SexOptions[0].value,
    age: "",
    job: "",
    music_education_years: "",
    music_instrument: "",
    visiting_concerts_frequency: VisitingConcertsFrequencyOptions[0].value,
    music_listening_frequency: MusicListeningFrequencyOptions[0].value,
    noise_level: NoiseLevelOptions[0].value
  });

  const dispatch = useDispatch();

  const fieldChangeHandler = (event: ChangeEvent<any>) => {
    setForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const buttonContinueClickHandler = () => {
    dispatch(setInfo(form));
    dispatch(setScreenByType(ScreenTypes.PollInfo));
  };

  const completed = Object.values(form).reduce((completed, value) => completed && !!value, true);
  return (
    <div className={CSS.SignUp}>
      <h2>О вас</h2>
      <Label>
        Фамилия
        <Input type="text" name="last_name" value={form.last_name} onChange={fieldChangeHandler}/>
      </Label>
      <Label>
        Имя
        <Input type="text" name="first_name" value={form.first_name} onChange={fieldChangeHandler}/>
      </Label>
      <Label>
        Отчество
        <Input type="text" name="patronymic" value={form.patronymic} onChange={fieldChangeHandler}/>
      </Label>
      <Label>
        Пол
        <Select options={SexOptions} name="sex" value={form.sex} onChange={fieldChangeHandler}/>
      </Label>
      <Label>
        Возраст
        <Input type="number" name="age" max="150" min="0" step={1} value={form.age} onChange={fieldChangeHandler}/>
      </Label>
      <Label>
        Сфера деятельности
        <Input type="text" name="job" value={form.job} onChange={fieldChangeHandler}/>
      </Label>
      <h2>Музыкальное образование</h2>
      <Label>
        Количество лет образования
        <Input
          type="number"
          name="music_education_years"
          max="10" min="0" step={1}
          value={form.music_education_years}
          onChange={fieldChangeHandler}
        />
      </Label>
      <Label>
        Специальность
        <Input type="text" name="music_instrument" value={form.music_instrument} onChange={fieldChangeHandler}/>
      </Label>
      <h2>Другое</h2>
      <Label>
        Частота посещения клубов\концертов
        <Select
          options={VisitingConcertsFrequencyOptions}
          name="visiting_concerts_frequency"
          value={form.visiting_concerts_frequency}
          onChange={fieldChangeHandler}
        />
      </Label>
      <Label>
        Частота прослушивания музыки в наушниках
        <Select
          options={MusicListeningFrequencyOptions}
          name="music_listening_frequency"
          value={form.music_listening_frequency}
          onChange={fieldChangeHandler}
        />
      </Label>
      <Label>
        Как бы Вы оценили уровень шума на Вашем рабочем месте
        <Select
          options={NoiseLevelOptions}
          name="noise_level"
          value={form.noise_level}
          onChange={fieldChangeHandler}
        />
      </Label>
      <Navigation>
        <div />
        <Button
          disabled={!completed}
          onClick={buttonContinueClickHandler}
        >
          Продолжить
        </Button>
      </Navigation>
    </div>
  );
};

export default SignUp;
