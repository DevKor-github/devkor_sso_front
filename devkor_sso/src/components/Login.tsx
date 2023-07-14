"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import google from "../../public/image/google.svg";
import kakao from "../../public/image/kakao.svg";

export default function LoginForm() {
  const [loginFail, setLoginFail] = useState<"t" | "f">("f");

  const handleLogin = () => {
    // 임의 구현
    if (loginFail === "t") {
      setLoginFail("f");
    } else {
      setLoginFail("t");
    }
  };

  return (
    <div className="loginForm">
      <input className={loginFail} type="email" placeholder="이메일" />
      <input className={loginFail} type="password" placeholder="비밀번호" />
      <div>
        <p className="wrongpw">{loginFail === "t" && "다시 시도하세요"}</p>
        <p className="findpw">비밀번호 찾기</p>
      </div>
      <button className="login" onClick={handleLogin}>
        로그인
      </button>
      <Link href={"/signup"}>
        <button className="signup">회원가입</button>
      </Link>
      <div className="social">
        <Image src={google} alt="google Login" />
        <Image src={kakao} alt="kakao Login" />
      </div>
    </div>
  );
}
