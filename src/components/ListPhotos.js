import { useState, useEffect } from "react";
import Photo from "./Photo";
import Data from "./Data";


function ListPhotos() {

    const photos = Data.map((photo) => {
        return (
            <Photo
                key={photo.id}
                {...photo}
            />
        );
    });

    return (
        <div>
            <h1 className="header-photos">My Photos</h1>
            <section className="cards-list">
                {photos}
            </section>
        </div>
    )
}

export default ListPhotos;