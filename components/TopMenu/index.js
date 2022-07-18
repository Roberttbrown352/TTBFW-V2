import TopMenuContainer from "./TopMenuContainer";
import TopMenuBackground from "./TopMenuBackground";
import ThemeButton from "./ThemeButton"
import lightMode from "../../public/svgs/nav/light_mode.svg"
import darkMode from "../../public/svgs/nav/dark_mode.svg"
import Image from "next/image";

export default function TopMenu ({theme}){

  console.log(theme)

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
        <ThemeButton onClick={() => {changeTheme()}}>
          {mode()}
        </ThemeButton>
      </TopMenuContainer>
    </TopMenuBackground>
  )
}
