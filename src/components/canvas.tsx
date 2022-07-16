import { useEffect } from "react";
import { nanoid } from "nanoid";
import p5 from "p5";

type Props = {
  sketch: any;
};

const Canvas = (props: Props) => {
  const id = nanoid();

  useEffect(() => {
    new p5(props.sketch, document.getElementById(`${id}`)!);
  }, [props.sketch]);

  return (
    <>
      <section id={id} />
    </>
  );
};

export default Canvas;
