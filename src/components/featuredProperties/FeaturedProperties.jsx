import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/08/Poolside-restaurant-The-Residency-Coimbatore-An-evening-shot-of-the-poolside-restaurant-at-The-Residency-Hotel.jpg?tr=w-400"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Country Club Resort</span>
        <span className="fpCity">Coimbatore</span>
        <span className="fpPrice">Starting from ₹1,500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/e6/1b/74/palm-meadows-club.jpg?w=700&h=-1&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Palm Meadows Resort</span>
        <span className="fpCity">Bengaluru</span>
        <span className="fpPrice">Starting from ₹2,500</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoWvPDedtfoWnWdCLQjPCvIwTF6vUlLhbsJWe_sYIcw&s"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Radisson Blu Mumbai International Airport</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹4432</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.madurairesidency.com/wp-content/uploads/2019/08/room01.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">HOtel Madurai Residency</span>
        <span className="fpCity">Madurai</span>
        <span className="fpPrice">Starting from ₹1500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
