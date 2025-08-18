import { transformImageUrl } from "@kontent-ai/delivery-sdk";
import { ImageLoader } from "next/image";

export const imageLoader: ImageLoader = (props) => {
  return transformImageUrl(props.src)
    .withQuality(props.quality ?? 75)
    .withWidth(props.width)
    .withCompression("lossless")
    .withAutomaticFormat()
    .getUrl();
};

export default imageLoader;