import Test from "../../../Test/Test";
import {intervals} from "../../../../models/Test.model";
import {ScreenTypes} from "../../../../models/Screen.model";
import {MetronomTypes} from "../../../../models/Metronom";

const Tests = {
  Training: () => <Test intervals={[8]} stage="test" nextScreen={ScreenTypes.TestStage1} metronom={MetronomTypes.Random} isTraining/>,
  Stage1: () => <Test intervals={intervals} stage="1" nextScreen={ScreenTypes.TestStage2}/>,
  Stage2: () => <Test intervals={intervals} stage="2" nextScreen={ScreenTypes.TestStage3} metronom={MetronomTypes.Normal}/>,
  Stage3: () => <Test intervals={intervals} stage="3" nextScreen={ScreenTypes.ChooseTest} metronom={MetronomTypes.Random}/>
};

export default Tests;
