import Instruction from "../../../Test/Instruction/Instruction";
import {NameByPerceptionChannelType} from "../../../../models/Poll.model";
import {getPerceptionChannelLevel} from "./PollFinish.model";

const PerceptionChannelScore = (props: { results: { [name: string]: number } }) => {
  return (
    <Instruction>
      {Object.entries(props.results).map(([channelType, score], index) => (
        <div key={`score_${index}`}>
          <b>{NameByPerceptionChannelType[channelType]}</b>: {score} ({getPerceptionChannelLevel(score)})
        </div>
      ))
      }
    </Instruction>
  );
};

export default PerceptionChannelScore;
