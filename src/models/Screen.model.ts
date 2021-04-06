export enum ScreenTypes {
  Start = "Start",
  Warning = "Warning",
  Finish = "Finish",
  ChooseTest = "ChooseTest",
  Poll = "Poll",
  SignUp = "SignUp",
  PollInfo = "PollInfo",
  PollFinish = "PoolFinish",
  TestInfo1 = "TestInfo1",
  TestInfo2 = "TestInfo2",
  TestExample = "TestExample",
  TestTrainingInfo = "TestTrainingInfo",
  TestTrainingFinish = "TestTrainingFinish",
  TestTrainingTableInstruction = "TestTrainingTableInstruction",
  TestTraining = "TestTraining",
  TestStage1 = "TestStage1",
  TestEnableHeadphone = "TestEnableHeadphone",
  TestStage2 = "TestStage2",
  TestStage3 = "TestStage3",
  DebugTables = "DebugTables",
  CheckMetronom = "CheckMetronom"
}

export interface ScreenElement {
  token: ScreenTypes,
  state?: any,
  title: string | null
}

