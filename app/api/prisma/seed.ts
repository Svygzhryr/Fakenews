import { Posts } from "../../types/types";
import { generateId } from "../../utils";
import prisma from "./prisma";

const postsData: Posts[] = [
  {
    id: generateId(),
    text: "Мэр Уфы открыл новые перила",
    title:
      "Сегодняшним вечером мэр Уфы посетил новую детскую площадку и провёл торжественное открытие новых перил.",
    createdDate: Date(),
  },
  {
    id: generateId(),
    text: "Могилёвские грибы - источники пси-излучения",
    title:
      "В небезысвестном Белорусском городе жители сообщают о негативном воздействии маслят на психику",
    createdDate: Date(),
  },
  {
    id: generateId(),
    text: "Рецепт вкуснейших чепубелей",
    title:
      "Только в этом посте вы узнаете о нескольких секретных ингредиентах для приготовления изумительных чепубелей",
    createdDate: Date(),
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
