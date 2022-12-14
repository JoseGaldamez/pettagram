import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DETAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DETAULT_IMAGE }) => {
  const key = `like-${id}`;

  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`./detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            {liked ? <MdFavorite size={32} /> : <MdFavoriteBorder size={32} />}
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
