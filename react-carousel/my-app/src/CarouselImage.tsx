type Props = {
  image: string;
};

export function CarouselImage({ image }: Props) {
  return <img src={image} />;
}
