export interface EstimateIntervalTaskProps {
  onComplete?: (time) => void;
  onStart?: () => void;
  onListeningEnd?: () => void;
  interval: number
}
