import type { LocalizedText } from '@/types/content'

export type ProjectIcon = 'restaurant' | 'os' | 'simulation' | 'automata'

export interface Project {
  id: string
  title: LocalizedText
  description: LocalizedText
  technologies: string[]
  repoUrl?: string
  icon: ProjectIcon
}

export const projects: Project[] = [
  {
    id: 'restaurant',
    title: {
      es: 'Sistema de Gestión para Restaurante',
      en: 'Restaurant Management System',
    },
    description: {
      es: 'Aplicación de escritorio para gestionar las comandas de un restaurante, con la lógica de negocio y el modelado de entidades (mesas, pedidos, productos) implementados en Java.',
      en: "Desktop application to manage a restaurant's orders, with business logic and entity modeling (tables, orders, products) implemented in Java.",
    },
    technologies: ['Java', 'Git'],
    repoUrl: 'https://github.com/TomasZignegoBatac/Proyecto-Restaurant-Gabriel',
    icon: 'restaurant',
  },
  {
    id: 'os',
    title: {
      es: 'Sistema Operativo sobre Linux',
      en: 'Operating System on Linux',
    },
    description: {
      es: 'Trabajo práctico integrador de la facultad: un sistema operativo funcional desarrollado en C sobre Linux, versionado de forma colaborativa en equipo con Git.',
      en: 'University capstone project: a functional operating system built in C on Linux, version-controlled collaboratively as a team with Git.',
    },
    technologies: ['C', 'Makefile', 'Ubuntu', 'Git'],
    repoUrl: 'https://github.com/TomasZignegoBatac/tp-2026-1c-Ubuntu',
    icon: 'os',
  },
  {
    id: 'simulation',
    title: {
      es: 'Simulación de Participantes y Roles',
      en: 'Participants & Roles Simulation',
    },
    description: {
      es: 'Sistema funcional en Haskell para modelar participantes, roles y equipamiento con tipos algebraicos: selección automática de roles mediante funciones de orden superior y pruebas automáticas.',
      en: 'A functional system in Haskell to model participants, roles and equipment using algebraic types: automatic role selection via higher-order functions and automated tests.',
    },
    technologies: ['Haskell', 'Programación Funcional', 'Testing'],
    icon: 'simulation',
  },
  {
    id: 'automata',
    title: {
      es: 'Reconocedores Léxicos y Autómatas',
      en: 'Lexical Recognizers & Automata',
    },
    description: {
      es: 'Múltiples autómatas finitos para reconocer lenguajes formales, con analizadores léxicos basados en máquinas de estado que aplican teoría de lenguajes y compiladores.',
      en: 'Multiple finite automata for recognizing formal languages, with lexical analyzers based on state machines applying language and compiler theory.',
    },
    technologies: ['C', 'Lenguajes Formales', 'Autómatas'],
    repoUrl: 'https://github.com/TomaszignegoUTN/TP3',
    icon: 'automata',
  },
]
