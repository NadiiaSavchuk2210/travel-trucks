import { GalleryItem } from "@/types/camper";
import css from "./Gallery.module.css";
import Image from "next/image";

interface Props {
  images: GalleryItem[];
}

const Gallery = ({ images }: Props) => {
  return (
    <ul className={css.gallery}>
      {images.map((item, id) => (
        <li key={`${id}-${item.thumb}`} className={css.galleryItem}>
          <Image
            src={item.original}
            alt="Camper image"
            width={292}
            height={312}
            className={css.galleryImg}
            loading={id === 0 ? "eager" : "lazy"}
            priority={id === 0}
            fetchPriority={id === 0 ? "high" : "auto"}
          />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
