import React from "react";
import songs from "./images/songs.jpg";

const Artists = ({ artists }) => {
  return (
    <>
      {/* Object is the result we recieve from API.  */}
      {Object.keys(artists).length > 0 && (
        <div className="container">
          <div className="row">
            {/* Mapping the object to get individual artist */}
            {artists.items.map((artist, index) => {
              return (
                <div className="col-md-4 col-6" key={index}>
                  <a href={artist.external_urls.spotify}>
                    <img
                      // If there is no image, render personal one
                      src={!artist.images[0] ? { songs } : artist.images[0].url}
                      alt="artist"
                      className="artistImg"
                    />
                  </a>
                  <h3>{artist.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Artists;
