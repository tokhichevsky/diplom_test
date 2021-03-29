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
  TestTrainingCreate = "TestTraining/Create",
  TestTrainingEstimate = "TestTraining/Estimate",
  TestStage1Create = "TestStage1/Create",
  TestStage1Estimate = "TestStage1/Estimate",
  TestStage2Create = "TestStage2/Create",
  TestStage2Estimate = "TestStage2/Estimate",
  TestStage3Create = "TestStage3/Create",
  TestStage3Estimate = "TestStage3/Estimate",
}

export interface ScreenElement {
  token: ScreenTypes,
  state?: any,
  title: string | null
}

