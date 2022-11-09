const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  res.json(await prisma.number.findFirst());
}
