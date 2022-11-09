const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log(req.body);
  const newNum = await prisma.number
    .update({
      where: { NumberId: 0 },
      data: { numberCount: req.body.numberCount },
    })
    .then(await prisma.$disconnect());
}
