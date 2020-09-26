import React from "react";
import Banner from "./Banner";
import Card from "./Card";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/8e3d5167-55ca-4fbd-832d-e3b66dad54ec.jpg?im_w=720"
          title="Online Experiences"
          description="A new way to travel from home."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/440e366f-3669-4a16-808e-7dc6f12fae4a.jpg?im_w=1200"
          title="Entire homes"
          description="Cozy, warm atmosphere, perfect for the traveler looking for a real NY experience."
          price="$90/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/010b23ca-3526-4ab1-ab30-52080a64df72.jpg?im_w=1200"
          title="Charming Upper West Side Studio"
          description="It's a quiet apartment on the first floor of a brownstone."
          price="$150/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/140e873e-9767-4721-81a1-6659db6582ac.jpg?im_w=1200"
          title="1 Bedroom apartment"
          description="Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."
          price="$120/night"
        />
      </div>
    </div>
  );
}

export default Home;
