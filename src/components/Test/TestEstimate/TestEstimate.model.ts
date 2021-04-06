import {MetronomTypes} from "../../../models/Metronom";
import {TestResult} from "../../../models/Test.model";

export interface TestEstimateProps {
  onComplete?: (data: TestResult) => void
  interval: number,
  hideTables?: boolean
}
