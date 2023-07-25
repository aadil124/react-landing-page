import React from "react";

const IconGrid = () => {
  const IconData = [
    {
      iconclassName: "bi-window m-auto text-primary",
      title: "Fully Responsive",
      Description:
        "This theme will look great on any device, no matter the size!",
    },
    {
      iconclassName: "bi-layers m-auto text-primary",
      title: "Bootstrap 5 Ready",
      Description:
        "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      iconclassName: "bi-terminal m-auto text-primary",
      title: "Easy to Use",
      Description:
        "Ready to use with your own content, or customize the source files!",
    },
  ];
  return (
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {IconData.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className={item.iconclassName}></i>
                </div>
                <h3>{item.title}</h3>
                <p className="lead mb-0">{item.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconGrid;
