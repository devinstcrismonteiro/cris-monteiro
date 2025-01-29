import SliderContent from "../SliderContent";
import cris from '../../assets/images/terapeuta-cris.png';
import otavio from '../../assets/images/terapeuta-otavio.jpg';
import { TherapistCard } from "../Cards";

export const Therapists = () => {
  const data = [
    {
      name: 'Cris Monteiro',
      content: 'Fundadora do Instituto Cris Monteiro e reconhecida como pioneira em aconselhamentos afetivos no Brasil, Cris Monteiro é uma das principais referências em assuntos amorosos no país. Com mais de 22 mil atendimentos realizados, é especialista em restauração e reconstrução de relacionamentos, mediação e conciliação familiar, reabilitação e superação de crises nos relacionamentos. Sua expertise, unida a uma abordagem estratégica e transformadora, tem gerado milhares de histórias de sucesso e reconhecimento. Autora de livros e cursos aclamados, Cris utiliza sua experiência para ajudar pessoas a reconstruírem relacionamentos e alcançarem conexões duradouras. Uma de suas frases mais famosas, que inspira seus atendimentos e seguidores, é: “Quem ama não desiste.”',
      image: cris,
    },
    {
      name: 'Otávio Monteiro',
      content: 'Terapeuta especializado em restauração, mediação, conciliação e superação de conflitos, Otávio atua no Instituto Cris Monteiro desde 2017. Reconhecido por sua abordagem prática e humanizada, ele trabalha para oferecer soluções eficazes que promovem a harmonia tanto no relacionamento quanto no crescimento individual. Sua experiência e habilidade em lidar com os desafios enfrentados pelos casais fazem dele uma referência na área, contribuindo para fortalecer vínculos e transformar vidas.',
      image: otavio,
    },
  ]

  return (
    <SliderContent title='Nossos Terapeutas'>
      {data.map((value) => (
        <TherapistCard
          name={value.name}
          description={value.content}
          image={value.image}
        />
      ))}
    </SliderContent>
  )
}