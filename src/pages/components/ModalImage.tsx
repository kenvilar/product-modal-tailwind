import Image from "next/image";
import Gizeh from "@/images/43693.jpg";

const ModalImage = () => {
  return (
    <>
      <div>
        <Image
          src={Gizeh}
          alt="Gizeh"
          className="mx-auto duration-200 w-60 hover:scale-105"
        />
      </div>
    </>
  );
};

export default ModalImage;
