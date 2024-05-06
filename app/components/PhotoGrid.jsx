import React from "react";
import { supabaseServer } from "../utils/supabaseServerClient";
import Photo from "./Photo";

async function fetchUserPhotos(user) {
  if (!user) return;

  const folderPath = `user_uploads/${user.id}/`;
  const { data, error } = await supabaseServer.storage
    .from("photos")
    .list(folderPath);

  if (error) {
    console.error("Error fetching photos", error);
    return;
  }

  return data;
}

async function getPhotoUrls(photos, user) {
  return Promise.all(
    photos.map(async (photo) => {
      const { data, error } = await supabaseServer.storage
        .from("photos")
        .createSignedUrl(`user_uploads/${user.id}/${photo.name}`, 60 * 60);
      if (error) {
        console.error("Error generationg signed url", error);
        return null;
      }

      return { url: data.signedUrl, photoName: photo.name };
    })
  );
}

async function fetchFavoritePhotos(user) {
  const { data, error } = await supabaseServer
    .from("favorite")
    .select("photo_name")
    .eq("user_id", user.id);

  if (error) {
    console.error(`Error fetching favorites`, error);
    return [];
  }
  return data.map((favorite) => favorite.photo_name);
}

export default async function PhotoGrid() {
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();
  const photos = await fetchUserPhotos(user);
  console.log({ photos });
  const photoObjects = await getPhotoUrls(photos, user);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {photoObjects.map((photo) => (
        <Photo
          key={photo.photoName}
          url={photo.url}
          alt={`Photo ${photo.photoName}`}
          width={200}
          height={200}
          photoName={photo.photoName}
        />
      ))}
    </div>
  );
}
