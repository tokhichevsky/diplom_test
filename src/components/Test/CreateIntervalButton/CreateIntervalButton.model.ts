export interface CreateIntervalButtonProps {
  onClick?: () => void,
  onComplete?: ([start, end]: [number, number]) => void
  className?: string
}
