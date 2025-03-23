import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from './google/api/annotations_pb'; // proto import: "google/api/annotations.proto"


export class Audit extends jspb.Message {
  getCreatedBy(): string;
  setCreatedBy(value: string): Audit;
  hasCreatedBy(): boolean;
  clearCreatedBy(): Audit;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): Audit;
  hasUpdatedBy(): boolean;
  clearUpdatedBy(): Audit;

  getDeletedBy(): string;
  setDeletedBy(value: string): Audit;
  hasDeletedBy(): boolean;
  clearDeletedBy(): Audit;

  getCreatedAt(): string;
  setCreatedAt(value: string): Audit;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Audit;

  getDeletedAt(): string;
  setDeletedAt(value: string): Audit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Audit.AsObject;
  static toObject(includeInstance: boolean, msg: Audit): Audit.AsObject;
  static serializeBinaryToWriter(message: Audit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Audit;
  static deserializeBinaryFromReader(message: Audit, reader: jspb.BinaryReader): Audit;
}

export namespace Audit {
  export type AsObject = {
    createdBy?: string,
    updatedBy?: string,
    deletedBy?: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
  }

  export enum CreatedByCase { 
    _CREATED_BY_NOT_SET = 0,
    CREATED_BY = 1,
  }

  export enum UpdatedByCase { 
    _UPDATED_BY_NOT_SET = 0,
    UPDATED_BY = 2,
  }

  export enum DeletedByCase { 
    _DELETED_BY_NOT_SET = 0,
    DELETED_BY = 3,
  }
}

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): Pagination;
  hasPage(): boolean;
  clearPage(): Pagination;

  getPageSize(): number;
  setPageSize(value: number): Pagination;
  hasPageSize(): boolean;
  clearPageSize(): Pagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    page?: number,
    pageSize?: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 2,
  }
}

export class Choice extends jspb.Message {
  getId(): string;
  setId(value: string): Choice;

  getChoice(): string;
  setChoice(value: string): Choice;

  getOrder(): number;
  setOrder(value: number): Choice;

  getIsCorrect(): boolean;
  setIsCorrect(value: boolean): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Choice.AsObject;
  static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
  static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Choice;
  static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
}

export namespace Choice {
  export type AsObject = {
    id: string,
    choice: string,
    order: number,
    isCorrect: boolean,
  }
}

export class QuizQuestion extends jspb.Message {
  getId(): string;
  setId(value: string): QuizQuestion;

  getQuestion(): string;
  setQuestion(value: string): QuizQuestion;

  getAnswersList(): Array<string>;
  setAnswersList(value: Array<string>): QuizQuestion;
  clearAnswersList(): QuizQuestion;
  addAnswers(value: string, index?: number): QuizQuestion;

  getCorrectAnswer(): number;
  setCorrectAnswer(value: number): QuizQuestion;

  getDifficulty(): Difficulty;
  setDifficulty(value: Difficulty): QuizQuestion;

  getAudit(): Audit | undefined;
  setAudit(value?: Audit): QuizQuestion;
  hasAudit(): boolean;
  clearAudit(): QuizQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuizQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: QuizQuestion): QuizQuestion.AsObject;
  static serializeBinaryToWriter(message: QuizQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuizQuestion;
  static deserializeBinaryFromReader(message: QuizQuestion, reader: jspb.BinaryReader): QuizQuestion;
}

export namespace QuizQuestion {
  export type AsObject = {
    id: string,
    question: string,
    answersList: Array<string>,
    correctAnswer: number,
    difficulty: Difficulty,
    audit?: Audit.AsObject,
  }
}

export class Quiz extends jspb.Message {
  getId(): string;
  setId(value: string): Quiz;

  getUserId(): string;
  setUserId(value: string): Quiz;

  getTitle(): string;
  setTitle(value: string): Quiz;

  getDescription(): string;
  setDescription(value: string): Quiz;

  getDuration(): number;
  setDuration(value: number): Quiz;
  hasDuration(): boolean;
  clearDuration(): Quiz;

  getDifficulty(): Difficulty;
  setDifficulty(value: Difficulty): Quiz;
  hasDifficulty(): boolean;
  clearDifficulty(): Quiz;

  getThumbnail(): string;
  setThumbnail(value: string): Quiz;
  hasThumbnail(): boolean;
  clearThumbnail(): Quiz;

  getCover(): string;
  setCover(value: string): Quiz;
  hasCover(): boolean;
  clearCover(): Quiz;

  getCategory(): string;
  setCategory(value: string): Quiz;
  hasCategory(): boolean;
  clearCategory(): Quiz;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Quiz;
  clearTagsList(): Quiz;
  addTags(value: string, index?: number): Quiz;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): Quiz;

  getAudit(): Audit | undefined;
  setAudit(value?: Audit): Quiz;
  hasAudit(): boolean;
  clearAudit(): Quiz;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quiz.AsObject;
  static toObject(includeInstance: boolean, msg: Quiz): Quiz.AsObject;
  static serializeBinaryToWriter(message: Quiz, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quiz;
  static deserializeBinaryFromReader(message: Quiz, reader: jspb.BinaryReader): Quiz;
}

export namespace Quiz {
  export type AsObject = {
    id: string,
    userId: string,
    title: string,
    description: string,
    duration?: number,
    difficulty?: Difficulty,
    thumbnail?: string,
    cover?: string,
    category?: string,
    tagsList: Array<string>,
    metadataMap: Array<[string, string]>,
    audit?: Audit.AsObject,
  }

  export enum DurationCase { 
    _DURATION_NOT_SET = 0,
    DURATION = 5,
  }

  export enum DifficultyCase { 
    _DIFFICULTY_NOT_SET = 0,
    DIFFICULTY = 6,
  }

  export enum ThumbnailCase { 
    _THUMBNAIL_NOT_SET = 0,
    THUMBNAIL = 7,
  }

  export enum CoverCase { 
    _COVER_NOT_SET = 0,
    COVER = 8,
  }

  export enum CategoryCase { 
    _CATEGORY_NOT_SET = 0,
    CATEGORY = 9,
  }
}

export class CreateQuizRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateQuizRequest;

  getDescription(): string;
  setDescription(value: string): CreateQuizRequest;

  getDuration(): number;
  setDuration(value: number): CreateQuizRequest;
  hasDuration(): boolean;
  clearDuration(): CreateQuizRequest;

  getThumbnail(): string;
  setThumbnail(value: string): CreateQuizRequest;
  hasThumbnail(): boolean;
  clearThumbnail(): CreateQuizRequest;

  getCover(): string;
  setCover(value: string): CreateQuizRequest;
  hasCover(): boolean;
  clearCover(): CreateQuizRequest;

  getCategory(): string;
  setCategory(value: string): CreateQuizRequest;
  hasCategory(): boolean;
  clearCategory(): CreateQuizRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateQuizRequest;
  clearTagsList(): CreateQuizRequest;
  addTags(value: string, index?: number): CreateQuizRequest;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): CreateQuizRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuizRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuizRequest): CreateQuizRequest.AsObject;
  static serializeBinaryToWriter(message: CreateQuizRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuizRequest;
  static deserializeBinaryFromReader(message: CreateQuizRequest, reader: jspb.BinaryReader): CreateQuizRequest;
}

export namespace CreateQuizRequest {
  export type AsObject = {
    title: string,
    description: string,
    duration?: number,
    thumbnail?: string,
    cover?: string,
    category?: string,
    tagsList: Array<string>,
    metadataMap: Array<[string, string]>,
  }

  export enum DurationCase { 
    _DURATION_NOT_SET = 0,
    DURATION = 3,
  }

  export enum ThumbnailCase { 
    _THUMBNAIL_NOT_SET = 0,
    THUMBNAIL = 4,
  }

  export enum CoverCase { 
    _COVER_NOT_SET = 0,
    COVER = 5,
  }

  export enum CategoryCase { 
    _CATEGORY_NOT_SET = 0,
    CATEGORY = 6,
  }
}

export class CreateQuizResponse extends jspb.Message {
  getQuiz(): Quiz | undefined;
  setQuiz(value?: Quiz): CreateQuizResponse;
  hasQuiz(): boolean;
  clearQuiz(): CreateQuizResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuizResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuizResponse): CreateQuizResponse.AsObject;
  static serializeBinaryToWriter(message: CreateQuizResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuizResponse;
  static deserializeBinaryFromReader(message: CreateQuizResponse, reader: jspb.BinaryReader): CreateQuizResponse;
}

export namespace CreateQuizResponse {
  export type AsObject = {
    quiz?: Quiz.AsObject,
  }
}

export class GetQuizRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetQuizRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuizRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuizRequest): GetQuizRequest.AsObject;
  static serializeBinaryToWriter(message: GetQuizRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuizRequest;
  static deserializeBinaryFromReader(message: GetQuizRequest, reader: jspb.BinaryReader): GetQuizRequest;
}

export namespace GetQuizRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetQuizResponse extends jspb.Message {
  getQuiz(): Quiz | undefined;
  setQuiz(value?: Quiz): GetQuizResponse;
  hasQuiz(): boolean;
  clearQuiz(): GetQuizResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuizResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuizResponse): GetQuizResponse.AsObject;
  static serializeBinaryToWriter(message: GetQuizResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuizResponse;
  static deserializeBinaryFromReader(message: GetQuizResponse, reader: jspb.BinaryReader): GetQuizResponse;
}

export namespace GetQuizResponse {
  export type AsObject = {
    quiz?: Quiz.AsObject,
  }
}

export class ListQuizRequest extends jspb.Message {
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): ListQuizRequest;
  hasPagination(): boolean;
  clearPagination(): ListQuizRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuizRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuizRequest): ListQuizRequest.AsObject;
  static serializeBinaryToWriter(message: ListQuizRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuizRequest;
  static deserializeBinaryFromReader(message: ListQuizRequest, reader: jspb.BinaryReader): ListQuizRequest;
}

export namespace ListQuizRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class ListQuizResponse extends jspb.Message {
  getQuizzesList(): Array<Quiz>;
  setQuizzesList(value: Array<Quiz>): ListQuizResponse;
  clearQuizzesList(): ListQuizResponse;
  addQuizzes(value?: Quiz, index?: number): Quiz;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): ListQuizResponse;
  hasPagination(): boolean;
  clearPagination(): ListQuizResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuizResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuizResponse): ListQuizResponse.AsObject;
  static serializeBinaryToWriter(message: ListQuizResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuizResponse;
  static deserializeBinaryFromReader(message: ListQuizResponse, reader: jspb.BinaryReader): ListQuizResponse;
}

export namespace ListQuizResponse {
  export type AsObject = {
    quizzesList: Array<Quiz.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class UpdateQuizRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateQuizRequest;

  getTitle(): string;
  setTitle(value: string): UpdateQuizRequest;
  hasTitle(): boolean;
  clearTitle(): UpdateQuizRequest;

  getDescription(): string;
  setDescription(value: string): UpdateQuizRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateQuizRequest;

  getDuration(): number;
  setDuration(value: number): UpdateQuizRequest;
  hasDuration(): boolean;
  clearDuration(): UpdateQuizRequest;

  getThumbnail(): string;
  setThumbnail(value: string): UpdateQuizRequest;
  hasThumbnail(): boolean;
  clearThumbnail(): UpdateQuizRequest;

  getCover(): string;
  setCover(value: string): UpdateQuizRequest;
  hasCover(): boolean;
  clearCover(): UpdateQuizRequest;

  getCategory(): string;
  setCategory(value: string): UpdateQuizRequest;
  hasCategory(): boolean;
  clearCategory(): UpdateQuizRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UpdateQuizRequest;
  clearTagsList(): UpdateQuizRequest;
  addTags(value: string, index?: number): UpdateQuizRequest;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): UpdateQuizRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuizRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuizRequest): UpdateQuizRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateQuizRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuizRequest;
  static deserializeBinaryFromReader(message: UpdateQuizRequest, reader: jspb.BinaryReader): UpdateQuizRequest;
}

export namespace UpdateQuizRequest {
  export type AsObject = {
    id: string,
    title?: string,
    description?: string,
    duration?: number,
    thumbnail?: string,
    cover?: string,
    category?: string,
    tagsList: Array<string>,
    metadataMap: Array<[string, string]>,
  }

  export enum TitleCase { 
    _TITLE_NOT_SET = 0,
    TITLE = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }

  export enum DurationCase { 
    _DURATION_NOT_SET = 0,
    DURATION = 4,
  }

  export enum ThumbnailCase { 
    _THUMBNAIL_NOT_SET = 0,
    THUMBNAIL = 5,
  }

  export enum CoverCase { 
    _COVER_NOT_SET = 0,
    COVER = 6,
  }

  export enum CategoryCase { 
    _CATEGORY_NOT_SET = 0,
    CATEGORY = 7,
  }
}

export class UpdateQuizResponse extends jspb.Message {
  getQuiz(): Quiz | undefined;
  setQuiz(value?: Quiz): UpdateQuizResponse;
  hasQuiz(): boolean;
  clearQuiz(): UpdateQuizResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuizResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuizResponse): UpdateQuizResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateQuizResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuizResponse;
  static deserializeBinaryFromReader(message: UpdateQuizResponse, reader: jspb.BinaryReader): UpdateQuizResponse;
}

export namespace UpdateQuizResponse {
  export type AsObject = {
    quiz?: Quiz.AsObject,
  }
}

export class DeleteQuizRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteQuizRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuizRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuizRequest): DeleteQuizRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteQuizRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuizRequest;
  static deserializeBinaryFromReader(message: DeleteQuizRequest, reader: jspb.BinaryReader): DeleteQuizRequest;
}

export namespace DeleteQuizRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteQuizResponse extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteQuizResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuizResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuizResponse): DeleteQuizResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteQuizResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuizResponse;
  static deserializeBinaryFromReader(message: DeleteQuizResponse, reader: jspb.BinaryReader): DeleteQuizResponse;
}

export namespace DeleteQuizResponse {
  export type AsObject = {
    id: string,
  }
}

export class SearchQuizRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchQuizRequest;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): SearchQuizRequest;
  hasPagination(): boolean;
  clearPagination(): SearchQuizRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuizRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuizRequest): SearchQuizRequest.AsObject;
  static serializeBinaryToWriter(message: SearchQuizRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuizRequest;
  static deserializeBinaryFromReader(message: SearchQuizRequest, reader: jspb.BinaryReader): SearchQuizRequest;
}

export namespace SearchQuizRequest {
  export type AsObject = {
    query: string,
    pagination?: Pagination.AsObject,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class SearchQuizResponse extends jspb.Message {
  getQuizzesList(): Array<Quiz>;
  setQuizzesList(value: Array<Quiz>): SearchQuizResponse;
  clearQuizzesList(): SearchQuizResponse;
  addQuizzes(value?: Quiz, index?: number): Quiz;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): SearchQuizResponse;
  hasPagination(): boolean;
  clearPagination(): SearchQuizResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuizResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuizResponse): SearchQuizResponse.AsObject;
  static serializeBinaryToWriter(message: SearchQuizResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuizResponse;
  static deserializeBinaryFromReader(message: SearchQuizResponse, reader: jspb.BinaryReader): SearchQuizResponse;
}

export namespace SearchQuizResponse {
  export type AsObject = {
    quizzesList: Array<Quiz.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class AddQuestionRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): AddQuestionRequest;

  getQuestion(): string;
  setQuestion(value: string): AddQuestionRequest;

  getDifficulty(): Difficulty;
  setDifficulty(value: Difficulty): AddQuestionRequest;

  getOrder(): number;
  setOrder(value: number): AddQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddQuestionRequest): AddQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: AddQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddQuestionRequest;
  static deserializeBinaryFromReader(message: AddQuestionRequest, reader: jspb.BinaryReader): AddQuestionRequest;
}

export namespace AddQuestionRequest {
  export type AsObject = {
    quizId: string,
    question: string,
    difficulty: Difficulty,
    order: number,
  }
}

export class AddQuestionResponse extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): AddQuestionResponse;

  getQuestion(): QuizQuestion | undefined;
  setQuestion(value?: QuizQuestion): AddQuestionResponse;
  hasQuestion(): boolean;
  clearQuestion(): AddQuestionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddQuestionResponse): AddQuestionResponse.AsObject;
  static serializeBinaryToWriter(message: AddQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddQuestionResponse;
  static deserializeBinaryFromReader(message: AddQuestionResponse, reader: jspb.BinaryReader): AddQuestionResponse;
}

export namespace AddQuestionResponse {
  export type AsObject = {
    quizId: string,
    question?: QuizQuestion.AsObject,
  }
}

export class UpdateQuestionRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): UpdateQuestionRequest;

  getQuestionId(): string;
  setQuestionId(value: string): UpdateQuestionRequest;

  getQuestion(): QuizQuestion | undefined;
  setQuestion(value?: QuizQuestion): UpdateQuestionRequest;
  hasQuestion(): boolean;
  clearQuestion(): UpdateQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuestionRequest): UpdateQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuestionRequest;
  static deserializeBinaryFromReader(message: UpdateQuestionRequest, reader: jspb.BinaryReader): UpdateQuestionRequest;
}

export namespace UpdateQuestionRequest {
  export type AsObject = {
    quizId: string,
    questionId: string,
    question?: QuizQuestion.AsObject,
  }
}

export class UpdateQuestionResponse extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): UpdateQuestionResponse;

  getQuestionId(): string;
  setQuestionId(value: string): UpdateQuestionResponse;

  getQuestion(): QuizQuestion | undefined;
  setQuestion(value?: QuizQuestion): UpdateQuestionResponse;
  hasQuestion(): boolean;
  clearQuestion(): UpdateQuestionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuestionResponse): UpdateQuestionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuestionResponse;
  static deserializeBinaryFromReader(message: UpdateQuestionResponse, reader: jspb.BinaryReader): UpdateQuestionResponse;
}

export namespace UpdateQuestionResponse {
  export type AsObject = {
    quizId: string,
    questionId: string,
    question?: QuizQuestion.AsObject,
  }
}

export class DeleteQuestionRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): DeleteQuestionRequest;

  getQuestionId(): string;
  setQuestionId(value: string): DeleteQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuestionRequest): DeleteQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuestionRequest;
  static deserializeBinaryFromReader(message: DeleteQuestionRequest, reader: jspb.BinaryReader): DeleteQuestionRequest;
}

export namespace DeleteQuestionRequest {
  export type AsObject = {
    quizId: string,
    questionId: string,
  }
}

export class DeleteQuestionResponse extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): DeleteQuestionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuestionResponse): DeleteQuestionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuestionResponse;
  static deserializeBinaryFromReader(message: DeleteQuestionResponse, reader: jspb.BinaryReader): DeleteQuestionResponse;
}

export namespace DeleteQuestionResponse {
  export type AsObject = {
    quizId: string,
  }
}

export class ListQuestionRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): ListQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuestionRequest): ListQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: ListQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuestionRequest;
  static deserializeBinaryFromReader(message: ListQuestionRequest, reader: jspb.BinaryReader): ListQuestionRequest;
}

export namespace ListQuestionRequest {
  export type AsObject = {
    quizId: string,
  }
}

export class ListQuestionResponse extends jspb.Message {
  getQuestionsList(): Array<QuizQuestion>;
  setQuestionsList(value: Array<QuizQuestion>): ListQuestionResponse;
  clearQuestionsList(): ListQuestionResponse;
  addQuestions(value?: QuizQuestion, index?: number): QuizQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuestionResponse): ListQuestionResponse.AsObject;
  static serializeBinaryToWriter(message: ListQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuestionResponse;
  static deserializeBinaryFromReader(message: ListQuestionResponse, reader: jspb.BinaryReader): ListQuestionResponse;
}

export namespace ListQuestionResponse {
  export type AsObject = {
    questionsList: Array<QuizQuestion.AsObject>,
  }
}

export class CreateChoiceRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): CreateChoiceRequest;

  getQuestionId(): string;
  setQuestionId(value: string): CreateChoiceRequest;

  getChoice(): string;
  setChoice(value: string): CreateChoiceRequest;

  getOrder(): number;
  setOrder(value: number): CreateChoiceRequest;

  getIsCorrect(): boolean;
  setIsCorrect(value: boolean): CreateChoiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChoiceRequest): CreateChoiceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChoiceRequest;
  static deserializeBinaryFromReader(message: CreateChoiceRequest, reader: jspb.BinaryReader): CreateChoiceRequest;
}

export namespace CreateChoiceRequest {
  export type AsObject = {
    quizId: string,
    questionId: string,
    choice: string,
    order: number,
    isCorrect: boolean,
  }
}

export class CreateChoiceResponse extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): CreateChoiceResponse;

  getQuestionId(): string;
  setQuestionId(value: string): CreateChoiceResponse;

  getChoice(): Choice | undefined;
  setChoice(value?: Choice): CreateChoiceResponse;
  hasChoice(): boolean;
  clearChoice(): CreateChoiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChoiceResponse): CreateChoiceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateChoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChoiceResponse;
  static deserializeBinaryFromReader(message: CreateChoiceResponse, reader: jspb.BinaryReader): CreateChoiceResponse;
}

export namespace CreateChoiceResponse {
  export type AsObject = {
    quizId: string,
    questionId: string,
    choice?: Choice.AsObject,
  }
}

export class UpdateChoiceRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): UpdateChoiceRequest;

  getQuestionId(): string;
  setQuestionId(value: string): UpdateChoiceRequest;

  getChoiceId(): string;
  setChoiceId(value: string): UpdateChoiceRequest;

  getChoice(): string;
  setChoice(value: string): UpdateChoiceRequest;

  getOrder(): number;
  setOrder(value: number): UpdateChoiceRequest;

  getIsCorrect(): boolean;
  setIsCorrect(value: boolean): UpdateChoiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChoiceRequest): UpdateChoiceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChoiceRequest;
  static deserializeBinaryFromReader(message: UpdateChoiceRequest, reader: jspb.BinaryReader): UpdateChoiceRequest;
}

export namespace UpdateChoiceRequest {
  export type AsObject = {
    quizId: string,
    questionId: string,
    choiceId: string,
    choice: string,
    order: number,
    isCorrect: boolean,
  }
}

export class UpdateChoiceResponse extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): UpdateChoiceResponse;

  getQuestionId(): string;
  setQuestionId(value: string): UpdateChoiceResponse;

  getChoiceId(): string;
  setChoiceId(value: string): UpdateChoiceResponse;

  getChoice(): Choice | undefined;
  setChoice(value?: Choice): UpdateChoiceResponse;
  hasChoice(): boolean;
  clearChoice(): UpdateChoiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChoiceResponse): UpdateChoiceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChoiceResponse;
  static deserializeBinaryFromReader(message: UpdateChoiceResponse, reader: jspb.BinaryReader): UpdateChoiceResponse;
}

export namespace UpdateChoiceResponse {
  export type AsObject = {
    quizId: string,
    questionId: string,
    choiceId: string,
    choice?: Choice.AsObject,
  }
}

export class DeleteChoiceRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): DeleteChoiceRequest;

  getQuestionId(): string;
  setQuestionId(value: string): DeleteChoiceRequest;

  getChoiceId(): string;
  setChoiceId(value: string): DeleteChoiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChoiceRequest): DeleteChoiceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChoiceRequest;
  static deserializeBinaryFromReader(message: DeleteChoiceRequest, reader: jspb.BinaryReader): DeleteChoiceRequest;
}

export namespace DeleteChoiceRequest {
  export type AsObject = {
    quizId: string,
    questionId: string,
    choiceId: string,
  }
}

export class DeleteChoiceResponse extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): DeleteChoiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChoiceResponse): DeleteChoiceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteChoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChoiceResponse;
  static deserializeBinaryFromReader(message: DeleteChoiceResponse, reader: jspb.BinaryReader): DeleteChoiceResponse;
}

export namespace DeleteChoiceResponse {
  export type AsObject = {
    quizId: string,
  }
}

export class ListChoiceRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): ListChoiceRequest;

  getQuestionId(): string;
  setQuestionId(value: string): ListChoiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChoiceRequest): ListChoiceRequest.AsObject;
  static serializeBinaryToWriter(message: ListChoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChoiceRequest;
  static deserializeBinaryFromReader(message: ListChoiceRequest, reader: jspb.BinaryReader): ListChoiceRequest;
}

export namespace ListChoiceRequest {
  export type AsObject = {
    quizId: string,
    questionId: string,
  }
}

export class ListChoiceResponse extends jspb.Message {
  getChoicesList(): Array<Choice>;
  setChoicesList(value: Array<Choice>): ListChoiceResponse;
  clearChoicesList(): ListChoiceResponse;
  addChoices(value?: Choice, index?: number): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChoiceResponse): ListChoiceResponse.AsObject;
  static serializeBinaryToWriter(message: ListChoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChoiceResponse;
  static deserializeBinaryFromReader(message: ListChoiceResponse, reader: jspb.BinaryReader): ListChoiceResponse;
}

export namespace ListChoiceResponse {
  export type AsObject = {
    choicesList: Array<Choice.AsObject>,
  }
}

export class AnswerResult extends jspb.Message {
  getAnswer(): string;
  setAnswer(value: string): AnswerResult;

  getIsCorrect(): boolean;
  setIsCorrect(value: boolean): AnswerResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerResult.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerResult): AnswerResult.AsObject;
  static serializeBinaryToWriter(message: AnswerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerResult;
  static deserializeBinaryFromReader(message: AnswerResult, reader: jspb.BinaryReader): AnswerResult;
}

export namespace AnswerResult {
  export type AsObject = {
    answer: string,
    isCorrect: boolean,
  }
}

export class ValidateQuestionAnswersRequest extends jspb.Message {
  getQuizId(): string;
  setQuizId(value: string): ValidateQuestionAnswersRequest;

  getQuestionId(): string;
  setQuestionId(value: string): ValidateQuestionAnswersRequest;

  getAnswersList(): Array<string>;
  setAnswersList(value: Array<string>): ValidateQuestionAnswersRequest;
  clearAnswersList(): ValidateQuestionAnswersRequest;
  addAnswers(value: string, index?: number): ValidateQuestionAnswersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateQuestionAnswersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateQuestionAnswersRequest): ValidateQuestionAnswersRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateQuestionAnswersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateQuestionAnswersRequest;
  static deserializeBinaryFromReader(message: ValidateQuestionAnswersRequest, reader: jspb.BinaryReader): ValidateQuestionAnswersRequest;
}

export namespace ValidateQuestionAnswersRequest {
  export type AsObject = {
    quizId: string,
    questionId: string,
    answersList: Array<string>,
  }
}

export class ValidateQuestionAnswersResponse extends jspb.Message {
  getResultsList(): Array<AnswerResult>;
  setResultsList(value: Array<AnswerResult>): ValidateQuestionAnswersResponse;
  clearResultsList(): ValidateQuestionAnswersResponse;
  addResults(value?: AnswerResult, index?: number): AnswerResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateQuestionAnswersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateQuestionAnswersResponse): ValidateQuestionAnswersResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateQuestionAnswersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateQuestionAnswersResponse;
  static deserializeBinaryFromReader(message: ValidateQuestionAnswersResponse, reader: jspb.BinaryReader): ValidateQuestionAnswersResponse;
}

export namespace ValidateQuestionAnswersResponse {
  export type AsObject = {
    resultsList: Array<AnswerResult.AsObject>,
  }
}

export enum Difficulty { 
  EASY = 0,
  MEDIUM = 1,
  HARD = 2,
  EXPERT = 3,
}
