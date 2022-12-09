import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
  errorFormat: "pretty",
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Database Connected ! ✌🏻");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { prisma, connectDB };
