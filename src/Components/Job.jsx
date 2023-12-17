const Job = (props) => {
  return (
    <div className="job">
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};
export default Job;
