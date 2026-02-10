import Image from "next/image";
import Link from "next/link";

import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/asset/logo.png"}
        alt={"logo image"}
        width={80}
        height={70}
        style={{ width: "80px", height: "70px" }}
      />
    </Link>
  );
};

export default Logo;
