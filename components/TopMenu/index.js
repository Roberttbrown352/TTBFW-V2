import TopMenuContainer from "./TopMenuContainer";
import TopMenuBackground from "./TopMenuBackground";
import ThemeButton from "./ThemeButton"
import HomeButton from "./HomeButton"
import lightMode from "../../public/svgs/nav/light_mode.svg"
import darkMode from "../../public/svgs/nav/dark_mode.svg"
import home from "../../public/svgs/nav/home.svg"
import Image from "next/image";
import Link from "next/link";

export default function TopMenu ({theme}){

  const changeTheme = () => {
    theme.setCurrent(theme.current === "light" ? "dark" : "light")
  }

  const mode = () => {
    if(theme.current === "dark"){
      return(
        <Image src={darkMode} alt="Dark Mode" />
      )
    }
    return(
      <Image src={lightMode} alt="Light Mode" />
    )
  }

  return(
    <TopMenuBackground>
      <TopMenuContainer>
        <Link href="/">
          <HomeButton>
            <Image src={home} alt="Home" />
          </HomeButton>
        </Link>
        <ThemeButton onClick={() => {changeTheme()}}>
          {mode()}
        </ThemeButton>
      </TopMenuContainer>
    </TopMenuBackground>
  )
}
