const Total = ({ exercises_list }) => {
  const total = exercises_list.reduce((s, p) => s + p, 0);
  return <p>Number of exercises {total}</p>;
}

export default Total;