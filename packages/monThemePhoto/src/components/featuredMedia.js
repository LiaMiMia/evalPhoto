import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

/**
 * The Component that renders a featured media, typically an image. The featured
 * media can represent an individual Post, Page, or Custom Post Type.
 *
 * @param props - The state injected by {@link connect } and the ID of the
 * featured media.
 *
 * @returns A react component.
 */
const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];
  const data = state.source.get(state.router.link);

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Container isAmp={state.frontity.mode === "amp"}>
      
      {data.isHome ? <HomeImage alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
        width={media?.media_details?.width}
        height={media?.media_details?.height} /> : <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
        width={media?.media_details?.width}
        height={media?.media_details?.height}
      /> }
      
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  //height: 50vh;
  width: auto;
  position: block;
  // top : 0;
  overflow: hidden;
  //margin-top: 20px;
  //margin-bottom: 20px;
  width: 100%;
    height: 100%; 
`;

const ConstImage= styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
`

const StyledImage = styled(Image)`
  object-fit: contain;
  ${ConstImage}
`;

const HomeImage = styled(Image)`
  object-fit: cover;
  max-width: none;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  // max-width: 100%;
  max-height: 100%;
  ${ConstImage}
`