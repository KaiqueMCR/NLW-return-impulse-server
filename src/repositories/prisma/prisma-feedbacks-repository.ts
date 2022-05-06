import { prisma } from "../../prisma";
import { FeedbackCreationData, FeedbacksRepository } from "../feedbacks-repository";

export class PismaFeedbackRepository implements FeedbacksRepository {
  async create({  type, comment, screenshot }: FeedbackCreationData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }   
    })
  }
}