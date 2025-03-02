const Total = ({ parts }) => {
  const total = parts.reduce((s, part) => s + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
}

export default Total;