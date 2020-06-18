import React from "react"

const Exercise = ({ solution, specsUrl, title }) => {
  return (
    <div className="exercise">
      <h2>{title}</h2>
      <div className="specs-url block">
        <h4>Specs</h4>
        <a href={specsUrl}>{specsUrl}</a>
      </div>

      <div className="solution block">
        <h4>Solution</h4>
        <div className="solution-workspace">
          {solution}
        </div>
      </div>
    </div>
  )
}

export default Exercise
