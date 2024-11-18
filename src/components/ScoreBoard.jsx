import Section from "./layout/Section.jsx";
export default function ScoreBoard({hit, miss}) {
  const accuracy = Math.round((hit / (hit + miss)) * 100);
  return (
    <Section
      color="blue"
      spacing="between"
      classes="rounded-b-3xl">
      <div className="p-4 text-white flex justify-between w-full">
        <div className="text-center">
          <label className="text-sm">Assassinations</label>
          <h2 className="text-xl font-bold">{hit}</h2>
        </div>
        <div className="text-center">
          <label className="text-sm">Accuracy</label>
          <h2 className="text-xl font-bold">{accuracy ? accuracy : 0}%</h2>
        </div>
        <div className="text-center">
          <label className="text-sm">Failed Attempts</label>
          <h2 className="text-xl font-bold">{miss}</h2>
        </div>
      </div>
    </Section>
  )
}