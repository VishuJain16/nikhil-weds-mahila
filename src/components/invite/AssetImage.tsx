import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/** Renders an artwork file; if the file is missing, shows a labelled slot instead of invented art. */
export function AssetImage({ src, alt, className, style, label }: { src: string; alt: string; className?: string; style?: CSSProperties; label?: string }) {
  const [missing, setMissing] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  // Catches files that failed before hydration (onError fired before React attached).
  useEffect(() => { const i = ref.current; if (i && i.complete && i.naturalWidth === 0) setMissing(true); }, [src]);
  if (missing)
    return (
      <div className={cn("asset-slot", className)} style={style} role="img" aria-label={alt}>
        {label !== "" && <><span>{label ?? alt}</span><small>{src.replace("/assets/", "")}</small></>}
      </div>
    );
  return <img ref={ref} src={src} alt={alt} className={className} style={style} draggable={false} onError={() => setMissing(true)} />;
}
