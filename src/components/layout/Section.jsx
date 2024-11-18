export default function Section({children, color, spacing, classes = null}) {
  return (
    <div className={
      "flex align-center px-2 md:px-6 lg:px-8"
      + ` bg-${color}`
      + ` justify-${spacing}`
      + " " + classes}
    >
      {children}
    </div>
  )
}