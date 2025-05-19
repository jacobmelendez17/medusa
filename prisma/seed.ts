const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const level1 = await prisma.level.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
      title: "Beginner",
      description: "Basic words to get started",
      vocabulary: {
        create: [
          {
            spanish: "hola",
            english: "hello",
            part_of_speech: "interjection",
            difficulty: 1,
            example_sentence: "¡Hola! ¿Cómo estás?",
            srs_points: 0,
            wrong_points: 0
          },
          {
            spanish: "casa",
            english: "house",
            part_of_speech: "noun",
            difficulty: 1,
            example_sentence: "La casa es grande.",
            srs_points: 0,
            wrong_points: 0
          },
          {
            spanish: "comer",
            english: "to eat",
            part_of_speech: "verb",
            difficulty: 2,
            example_sentence: "Me gusta comer pizza.",
            srs_points: 0,
            wrong_points: 0
          }
        ]
      }
    }
  });

  console.log(`✅ Seeded level: ${level1.title}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
