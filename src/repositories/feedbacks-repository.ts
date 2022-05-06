export interface FeedbackCreationData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreationData) => Promise<void>
}