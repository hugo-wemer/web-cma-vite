export type CreateCommentRequestBody = {
  author: string
  commentedAt: string
  comment: string
}

export type CreateCommentRequestParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}
