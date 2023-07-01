import { PrismaClient } from "@prisma/client";
import parables from "./data.json" assert { type: "json" };

const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);

  for (const p of parables) {
    const user = await prisma.parable.create({
      data: { ...p },
    });
    console.log(`Added parable ${p.title}`);
  }
  console.log(`Seeding finished.`);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
