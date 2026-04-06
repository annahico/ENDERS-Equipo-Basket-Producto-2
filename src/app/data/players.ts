import { Player } from "../models/player";

export const players: Player[] = [

  {
    id: 1,
    nombre: "Alicia",
    apellidos: "Pérez",
    posicion: "Base",
    edad: 24,
    altura: 1.85,
    foto: "assets/images/jugador1.png",
    videos: [
      "assets/videos/jugador1/video1.mp4",
      "assets/videos/jugador1/video1.mp4"
    ]
  },

  {
    id: 2,

    nombre: "Elena",
    apellidos: "Díaz",
    posicion: "Escolta",
    edad: 26,
    altura: 1.9,
    foto: "assets/images/jugador2.png",
    videos: [
      "assets/videos/jugador3/video1.mp4",
      "assets/videos/jugador3/video1.mp4"
    ]
  },

  {
    id: 3,
    nombre: "Luis",
    apellidos: "García",
    posicion: "Alero",
    edad: 28,
    altura: 2.0,
    foto: "assets/images/jugador3.png",
    videos: [
      "assets/videos/jugador3/video1.mp4",
      "assets/videos/jugador3/video1.mp4"
    ]
  },

  {
    id: 4,
    nombre: "Carlos",
    apellidos: "López",
    posicion: "Ala-Pivot",
    edad: 23,
    altura: 2.05,
    foto: "assets/images/jugador4.png",
    videos: [
      "assets/videos/jugador3/video1.mp4",
      "assets/videos/jugador3/video1.mp4"
    ]
  },

  {
    id: 5,
    nombre: "David",
    apellidos: "Torres",
    posicion: "Pivot",
    edad: 30,
    altura: 2.12,
    foto: "assets/images/jugador5.png",
    videos: [
      "assets/videos/jugador5/video1.mp4",
      "assets/videos/jugador3/video1.mp4"
    ]
  }
];

