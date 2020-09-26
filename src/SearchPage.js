import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>300+ stays · Sep 26 - Oct 8 · 1 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Instance Book</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult 
    img="https://a0.muscache.com/im/pictures/3b2c43f5-988f-4be4-b7ac-0f470c5ba3f8.jpg?im_w=1200"
    location="Entire apartment in Da Nang"
    title="♛NANG HOUSE - GLORIOUS SUNSHINE/ NANG 6♛"
    description="2 guests · 1 bedroom · 1 bed · 1 bath"
    star="4.73"
    price="$30/night"
    total="$117 total"
      />
      <SearchResult 
    img="https://a0.muscache.com/im/pictures/d69bb888-f14f-48a3-a776-b8a156fbedb4.jpg?im_w=1200"
    location="Private room in Son Tra"
    title="Cozy room#Garden space#mykhe beach#night market"
    description="2 guests · 1 bedroom · 1 bed · 1 private bath"
    star="4.84"
    price="$45/night"
    total="$123 total"
      />
      <SearchResult 
    img="https://a0.muscache.com/im/pictures/d69bb888-f14f-48a3-a776-b8a156fbedb4.jpg?im_w=1200"
    location="Private room in Son Tra"
    title="Cozy room#Garden space#mykhe beach#night market"
    description="2 guests · 1 bedroom · 1 bed · 1 private bath"
    star="4.84"
    price="$45/night"
    total="$123 total"
      />
      <SearchResult 
    img="https://a0.muscache.com/im/pictures/d69bb888-f14f-48a3-a776-b8a156fbedb4.jpg?im_w=1200"
    location="Private room in Son Tra"
    title="Cozy room#Garden space#mykhe beach#night market"
    description="2 guests · 1 bedroom · 1 bed · 1 private bath"
    star="4.84"
    price="$45/night"
    total="$123 total"
      />
      <SearchResult 
    img="https://a0.muscache.com/im/pictures/d69bb888-f14f-48a3-a776-b8a156fbedb4.jpg?im_w=1200"
    location="Private room in Son Tra"
    title="Cozy room#Garden space#mykhe beach#night market"
    description="2 guests · 1 bedroom · 1 bed · 1 private bath"
    star="4.84"
    price="$45/night"
    total="$123 total"
      />
    </div>
  );
}

export default SearchPage;
