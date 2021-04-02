export interface CreateIntervalTaskProps {
  time: number
  onComplete?: (time: number) => void
  onStart?: () => void;
}
