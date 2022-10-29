import Image from "next/future/image";
import { useRouter } from "next/router";

import logoImg from "../../assets/logo.svg";
import { Cart } from "../Cart";
import { HeaderContainer } from "./styles";

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
