import {Description} from '../components/user-card/user-card.component';

type User = {
  id: number,
  fullname: string;
  photoUrl: string;
  educations: Description[];
  works: Description[];
  skills: Description[]
}

const sannikova: User = {
  id: 1,
  fullname: "Санникова Татьяна Юрьевна",
  photoUrl: "assets/photo/sannikova.jpg",
  educations: [
    {
      id: 1,
      description: "н.в. — Самарский государственный университет, направление: \"Фундаментальная информатика и информационные технологии\", Программа: \"Инженерия программного обеспечения\" (магистратура)"
    },
    {
      id: 2,
      description: "2018 — Тольяттинский государственный университет, направление: \"Юриспруденция\", Программа: \"Уголовное право и процесс\" (магистратура)"
    },
    {
      id: 3,
      description: "2014 — Самарский государственный университет, направление: \"Филология\", Программа: \"Русский язык и литература\" (бакалавриат)"
    }
  ],
  works: [
    {
      id: 1,
      description: "2020-н.в. — Frontend Developer (Mid-level+)"
    },
  ],
  skills: [
    {
      id: 1,
      description: "HTML5"
    },
    {
      id: 2,
      description: "CSS/SCSS, CSS-in-JS"
    },
    {
      id: 3,
      description: "Typescript"
    },
    {
      id: 4,
      description: "React/Next"
    },
    {
      id: 5,
      description: "Vue/Nuxt"
    },
  ],
}

const kubanov: User = {
  id: 2,
  fullname: "Кубанов Кирилл Валерьевич",
  photoUrl: "assets/photo/kubanov.jpg",
  educations: [
    {
      id: 1,
      description: "н.в. — Самарский государственный университет, направление: \"Фундаментальная информатика и информационные технологии\", Программа: \"Инженерия программного обеспечения\" (магистратура)"
    },
  ],
  works: [
    {
      id: 1,
      description: "н.в. — Инженер-программист, ООО «Собитс»"
    },
  ],
  skills: [
    {
      id: 1,
      description: ".NET"
    },
    {
      id: 2,
      description: "ExtJS"
    },
    {
      id: 3,
      description: "PostgreSQL"
    },
  ],
}

const users: User[] = [sannikova, kubanov]

export {users};
