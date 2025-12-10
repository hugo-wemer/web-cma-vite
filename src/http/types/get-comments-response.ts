export type GetCommentsResponse = {
  comments: {
    commentedAt: string
    comments: {
      id: string
      assetOwnerId: string
      author: string
      comment: string
      commentedAt: string
    }[]
  }[]
}

export type CronologyRequestParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}
