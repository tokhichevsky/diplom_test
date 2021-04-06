import Button from "../../../UI/Button/Button";
import {Metronom, MetronomTypes} from "../../../../models/Metronom";
import useMetronom from "../../../../models/Metronom.hook";

const CheckMetronom = () => {
  const metronom = useMetronom(MetronomTypes.Random)

  const handleRandomMetronom = () => {
    if (metronom.status === Metronom.Status.Started) {
      metronom.stop()
    } else {
      metronom.start()
    }
  }

  return (
    <div>
      <Button onClick={handleRandomMetronom}>Рандомный метроном</Button>
    </div>
  )
}

export default CheckMetronom;
