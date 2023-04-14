import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-Number card-circle subtle">{curElem.id}</span>
                    <span className="card-author" >
                    {curElem.category}
                    </span>
                    <h2 className="card-title">{curElem.name}</h2>
                    <span className="card-discription subtle">
                    {curElem.discription}
                      Ots is a best Breakfast Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Beatae nam possimus
                      dignissimos et facilis voluptatibus aut, rerum placeat
                      eaque distinctio, quasi eligendi, qui quos reiciendis
                      totam ratione ea. Quos, temporibus.
                    </span>
                    <div className="card-read">Read</div>
                    <div className="card-seen"><img src={curElem.image} alt="" /></div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
