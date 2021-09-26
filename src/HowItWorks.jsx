import React from 'react';
import WorkAPI from './API/WorkAPI';

const HowItWorks = () => {

   
    return (
       <>
            <section>
        <div className="work-container container ">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {WorkAPI.map((curElem) => {
             
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${curElem.logo}`}></i>
                    <h2 className="sub-heading">{curElem.title}</h2>
                    <p className="main-hero-para w-100">{curElem.info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
       </>
    )
};

export default HowItWorks;
