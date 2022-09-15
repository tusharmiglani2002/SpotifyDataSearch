import React from "react";
import "./images/songs.jpg";

const Albums = ({ albums }) => {
  return (
    <>
      {Object.keys(albums).length > 0 && (
        <div className="container">
          <div className="row">
            {albums.items.map((album, index) => {
              return (
                <div className="col-md-4 col-6" key={index}>
                  <a href={album.external_urls.spotify}>
                    <img
                      src={!album.images[0] ? "songs.jpg" : album.images[0].url}
                      alt="Album"
                    />
                  </a>
                  <div>
                    <h3>{album.name}</h3>
                    <p>
                      {album.artists.map((artist) => artist.name).join(", ")}
                    </p>
                  </div>
                  {/* <ReactPlayer url={album.external_urls.spotify} /> */}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Albums;
