// src/components/TinaRenderer.tsx
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface TinaRendererProps {
  content: any;
  imgMaxWidth?: string;
  imgMaxHeight?: string;
  imgObjectFit?: "contain" | "cover" | "fill" | "none";
}

export default function TinaRenderer({
  content,
  imgMaxWidth = "100%",
  imgMaxHeight = "500px",
  imgObjectFit = "contain",
}: TinaRendererProps) {
  const components = {
    img: (props) => (
      <img
        src={props.url}
        alt={props.alt || ""}
        loading="lazy"
        style={{
          maxWidth: imgMaxWidth,
          maxHeight: imgMaxHeight,
          width: "auto",
          height: "auto",
          objectFit: imgObjectFit,
          borderRadius: "6px",
        }}
      />
    ),
  };

  return <TinaMarkdown content={content} components={components} />;
}
