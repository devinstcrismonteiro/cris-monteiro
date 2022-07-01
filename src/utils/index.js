import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import PresencialImg from '../assets/images/presencial.jpg'
import OnlineImg from '../assets/images/terapia-online.jpg'
import ApoioImage from '../assets/images/apoio-relacionamento.jpg'
import AvaliacaoImage from '../assets/images/avaliacao.jpg'
import ConciliacaoImage from '../assets/images/conciliacao.jpg'
import ConsultoriaImage from '../assets/images/consultoria.jpg'
import IntermediacaoImage from '../assets/images/intermediacao.jpg'
import TerapiaCasalImage from '../assets/images/terapia-casal.jpg'

export function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url
  return url.replace(/\/$/, '')
}

export const formatDate = (data) => {
  const date = data ? format(new Date(data), 'd LLLL y', { locale: ptBR }) : ''
  const splitDate = date.split(' ')
  return splitDate[0] + ' de ' + splitDate[1] + ' de ' + splitDate[2]
}

export const atendimentos = [
  {
    title: 'Presencial',
    shortDescription: ' ',
    image: PresencialImg,
    url: '/atendimento',
    slug: 'btn-atendimento-presencial',
  },
  {
    title: 'Online',
    shortDescription: ' ',
    image: OnlineImg,
    url: '/atendimento',
    slug: 'btn-atendimento-online',
  },
]

export const atendimentosResume = [
  {
    title: 'Avaliação',
    shortDescription:
      '<p>Você já imaginou descobrir quais são os verdadeiros problemas da sua relação em uma única sessão?</p>',
    image: AvaliacaoImage,
    slug: 'btn-atendimento-avaliacao',
  },
  {
    title: 'Terapia de casal (Individual ou em conjunto)',
    shortDescription:
      '<p>Nosso serviço mais requisitado. Vamos solucionar as dificuldades de seu relacionamento e resgatar sua esperança!</p>',
    image: TerapiaCasalImage,
    slug: 'btn-atendimento-terapia-casal',
  },
  {
    title: 'Conciliação',
    shortDescription:
      '<p>Apoio conjugal, familiar, profissional, pessoal ou corporativo, com o objetivo de solucionar conflitos de interesse.</p>',
    image: ConciliacaoImage,
    slug: 'btn-atendimento-conciliacao',
  },
  {
    title: 'Intermediação emergencial ou agendada',
    shortDescription:
      '<p>Um método alternativo de solução de conflitos, desordens ou divergências. Presencialmente, na sua casa, na sua empresa, na sua vida...</p>',
    image: IntermediacaoImage,
    slug: 'btn-atendimento-intermediacao',
  },
  {
    title: 'Apoio para relacionamentos',
    shortDescription: '<p>Por um ambiente mais democrático e harmonioso... Entre irmãos, padrastos, enteados, ou qualquer relação que encontra-se desgastada.</p>',
    image: ApoioImage,
    slug: 'btn-atendimento-apoio',
  },
  {
    title: 'Consultoria de planejamento',
    shortDescription:
      '<p>A sua consultoria de gestão de tarefas - pessoais, familiares ou profissionais - totalmente personalizada!</p>',
    image: ConsultoriaImage,
    slug: 'btn-atendimento-consultoria',
  },
]
