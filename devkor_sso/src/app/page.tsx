import Image from "next/image";
import Logo from "../../public/image/Devkor_black.svg";
import LoginForm from "@/components/Login";

export default function Home() {
  return (
    <div className="loginContainer">
      <div>
        <Image
          alt="Devkor"
          src={Logo}
          width={423}
          style={{
            filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.35)",
          }}
        ></Image>
      </div>
      <LoginForm />
    </div>
  );
}
