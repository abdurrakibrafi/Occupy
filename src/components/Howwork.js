import { useState } from "react";
import workapi from "../API/Worksapi";
import "../Styles/Howworks.css";

function Howwork() {
  const [workdata, setWorkdata] = useState(workapi);

  return (
    <>
      <section>
        <div className="work_container container">
          <h1 className="main_heading text-center">How does its works</h1>
          <div data-aos="fade-right" className="row">
            {workdata.map((current) => {
              const { id, logo, title, info } = current;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawsome_style ${logo}`}></i>
                    <h2 className="sub_heading">{title}</h2>
                    <p className="para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Howwork;
