export interface IntervalButtonProps {
  onClick?: () => void,
  onComplete?: ([start, end]: [number, number]) => void
  className?: string
}
