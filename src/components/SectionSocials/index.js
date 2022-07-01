import * as S from './styles'

const SectionSocials = () => (
  <S.Wrapper>
    <span>
      <p>Me acompanhe</p>
      <a
        href="https://www.instagram.com/crismonteirooficial"
        target="_blank"
        rel="noreferrer"
        id="home-social-instagram"
      >
        <S.InstagramIcon size={35} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCrsf7LPJqr98T6JLV7KzszA"
        target="_blank"
        rel="noreferrer"
        id="home-social-youtube"
      >
        <S.YoutubeIcon size={35} />
      </a>
      {/* <a
        href="https://www.instagram.com/crismonteiroinstituto/"
        target="_blank"
        rel="noreferrer"
      >
        <S.LinkedinIcon size={35} />
      </a> */}
      <a
        href="https://twitter.com/ACrisMonteiro"
        target="_blank"
        rel="noreferrer"
        id="home-social-twitter"
      >
        <S.TwitterIcon size={35} />
      </a>
    </span>
  </S.Wrapper>
)

export default SectionSocials
