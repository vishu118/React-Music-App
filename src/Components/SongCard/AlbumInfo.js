import React from 'react'
import "./AlbumInfo.css"

const AlbumInfo = ({Album}) => {
    console.log(Album)
    const artists = [];
    Album?.artists?.forEach((element) => {
      artists.push(element.name);
    });
    return (
        <div className="albumInfo-card">
          <div className="albumName-container">
            <div className="marquee">
              <p>{Album?.name + " - " + artists?.join(", ")}</p>
            </div>
          </div>
          <div className="album-info">
            <p>{`${Album?.name} is an ${Album?.album_type} by ${artists?.join(
              ", "
            )} with ${Album?.total_tracks} track(s)`}</p>
          </div>
          <div className="album-release">
            <p>Release Date: {Album?.release_date}</p>
          </div>
        </div>
  )
}

export default AlbumInfo