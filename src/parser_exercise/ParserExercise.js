import React from "react";
import Exercise from "../exercise/Exercise";

const ParserExercise = () => {
  return (
    <div className="parser">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/2"
        title="Parser Exercise"
      />
    </div>
  );
};

export default ParserExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return <div>Add solution here</div>;
};
