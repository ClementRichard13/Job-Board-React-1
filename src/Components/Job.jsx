const Job = (props) => {
  const bool = true;

  const { title, contractType, country, city, className } = props;

  return (
    <div className={`job ${className}`}>
      {title ? <h2>{title}</h2> : <h2>Pas de titre d'offre d'emploi</h2>}
      {/* {props.title && <h2>{props.title}</h2>} */}
      <p>
        {contractType} - {country} - {city}
      </p>
    </div>
  );
};

export default Job;
