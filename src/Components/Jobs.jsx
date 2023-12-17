import Job from "./Job";
import data from "../data.json";

const Jobs = () => {
  return (
    <main>
      {data.map((elem) => {
        return (
          <Job
            title={elem.title}
            contractType={elem.contractType}
            country={elem.country}
            city={elem.city}
            className={elem.className}
          />
        );
      })}
      {/* <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"red"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"blue"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"yellow"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"pink"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"green"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"red"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"blue"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"yellow"}
      />
      <Job
        title={"Agent de sécurité Marseille"}
        contractType={"CDI"}
        country={"France"}
        city={"Marseille"}
        className={"pink"}
      /> */}
    </main>
  );
};

export default Jobs;
