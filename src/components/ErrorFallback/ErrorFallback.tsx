import Instruction from "../Test/Instruction/Instruction";
import Button from "../UI/Button/Button";
import CenterText from "../UI/CenterText/CenterText";

const ErrorFallback = (props: { error: Error, resetErrorBoundary(): void }) => {
  return (
    <CenterText>
      <Instruction>
        <h2>Произошла ошибка :(</h2>
        <p>Описание ошибки:</p>
        <pre>{props.error.message}</pre>
        <p>Для получения подробностей об ошибке откройте консоль <b>(CTRL + SHIFT + i → Console)</b>.</p>
        <p>Если это возможно, сообщите об ошибке Василисе через приложение ВКонтакте&nbsp;
          <a href="https://vk.com/vmbogina">vk.com/vmbogina</a> или приложение Telegram&nbsp;
          &#32;<a href="https://t.me/vbogin">@VBogin</a>.</p>
        <Button onClick={props.resetErrorBoundary}>Попробовать еще раз</Button>
      </Instruction>
    </CenterText>
  );
};

export default ErrorFallback;
