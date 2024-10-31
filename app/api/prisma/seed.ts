import { Posts } from "../../types/types";
import { generateId } from "../utils";
import prisma from "./prisma";

const postsData: Posts[] = [
  {
    id: generateId(),
    title: "Мэр Уфы открыл новые перила",
    text: "Сегодняшним вечером мэр Уфы посетил новую детскую площадку и провёл торжественное открытие новых перил.",
    createdDate: new Date().toISOString(),
  },
  {
    id: generateId(),
    title: "Могилёвские грибы - источники пси-излучения",
    text: "В небезысвестном Белорусском городе жители сообщают о негативном воздействии маслят на психику",
    createdDate: new Date().toISOString(),
  },
  {
    id: generateId(),
    title: "Рецепт вкуснейших чепубелей",
    text: "Только в этом посте вы узнаете о нескольких секретных ингредиентах для приготовления изумительных чепубелей",
    createdDate: new Date().toISOString(),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of postsData) {
    const post = await prisma.posts.create({
      data: u,
    });
    console.log(`Created user with id: ${post.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
