export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * Example:
   *
   * ```json
   * {
   *   Color: 'Red', Size: '42'
   * }
   * ```
   */
  ActiveVariations: any
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /**
   * Example:
   *
   * ```json
   * {
   *   Color: [
   *     {
   *       src: "https://storecomponents.vtexassets.com/...",
   *       alt: "...",
   *       label: "...",
   *       value: "..."
   *     },
   *     {
   *       src: "https://storecomponents.vtexassets.com/...",
   *       alt: "...",
   *       label: "...",
   *       value: "..."
   *     }
   *   ],
   *   Size: [
   *     {
   *       src: "https://storecomponents.vtexassets.com/...",
   *       alt: "...",
   *       label: "...",
   *       value: "..."
   *     }
   *   ]
   * }
   * ```
   */
  FormattedVariants: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** A string or the string representation of an object (a stringified object). */
  ObjectOrString: any
  /**
   * Example:
   *
   * ```json
   * {
   *   'Color-Red-Size-40': 'classic-shoes-37'
   * }
   * ```
   */
  SlugsMap: any
  /**
   * Example:
   *
   * ```json
   * {
   *   Color: [ "Red", "Blue", "Green" ],
   *   Size: [ "40", "41" ]
   * }
   * ```
   */
  VariantsByName: any
}

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  ne: InputMaybe<Scalars['Boolean']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>
  gt: InputMaybe<Scalars['Date']>
  gte: InputMaybe<Scalars['Date']>
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  lt: InputMaybe<Scalars['Date']>
  lte: InputMaybe<Scalars['Date']>
  ne: InputMaybe<Scalars['Date']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
}

export type Directory = Node & {
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>
  changeTime: Scalars['Date']
  children: Array<Node>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent: Maybe<Node>
  prettySize: Scalars['String']
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  group: Array<DirectoryGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next: Maybe<Directory>
  node: Directory
  previous: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid'

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<DirectoryGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type File = Node & {
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>
  changeTime: Scalars['Date']
  children: Array<Node>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent: Maybe<Node>
  prettySize: Scalars['String']
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  group: Array<FileGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileEdge = {
  next: Maybe<File>
  node: File
  previous: Maybe<File>
}

export type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid'

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<FileGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>
  gt: InputMaybe<Scalars['Float']>
  gte: InputMaybe<Scalars['Float']>
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt: InputMaybe<Scalars['Float']>
  lte: InputMaybe<Scalars['Float']>
  ne: InputMaybe<Scalars['Float']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** Person data input to the newsletter. */
export type IPersonNewsletter = {
  /** Person's email. */
  email: Scalars['String']
  /** Person's name. */
  name: Scalars['String']
}

/** Shopping cart input. */
export type IStoreCart = {
  /** Order information, including `orderNumber` and `acceptedOffer`. */
  order: IStoreOrder
}

export type IStoreCurrency = {
  /** Currency code (e.g: USD). */
  code: Scalars['String']
  /** Currency symbol (e.g: $). */
  symbol: Scalars['String']
}

/** Image input. */
export type IStoreImage = {
  /** Alias for the input image. */
  alternateName: Scalars['String']
  /** Image input URL. */
  url: Scalars['String']
}

/** Offer input. */
export type IStoreOffer = {
  /** Information on the item being offered. */
  itemOffered: IStoreProduct
  /** This is displayed as the "from" price in the context of promotions' price comparison. This may change before it reaches the shelf. */
  listPrice: Scalars['Float']
  /** Also known as spot price. */
  price: Scalars['Float']
  /** Number of items offered. */
  quantity: Scalars['Int']
  /** Seller responsible for the offer. */
  seller: IStoreOrganization
}

/** Order input. */
export type IStoreOrder = {
  /** Array with information on each accepted offer. */
  acceptedOffer: Array<IStoreOffer>
  /** ID of the order in [VTEX order management](https://help.vtex.com/en/tutorial/license-manager-resources-oms--60QcBsvWeum02cFi3GjBzg#). */
  orderNumber: Scalars['String']
}

/** Organization input. */
export type IStoreOrganization = {
  /** Organization ID. */
  identifier: Scalars['String']
}

/** Client profile data. */
export type IStorePerson = {
  /** Client email. */
  email: Scalars['String']
  /** Client last name. */
  familyName: Scalars['String']
  /** Client first name. */
  givenName: Scalars['String']
  /** Client ID. */
  id: Scalars['String']
}

/** Product input. Products are variants within product groups, equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type IStoreProduct = {
  /** Custom Product Additional Properties. */
  additionalProperty: InputMaybe<Array<IStorePropertyValue>>
  /** Array of product images. */
  image: Array<IStoreImage>
  /** Product name. */
  name: Scalars['String']
  /** Stock Keeping Unit. Merchant-specific ID for the product. */
  sku: Scalars['String']
}

export type IStorePropertyValue = {
  /** Property name. */
  name: Scalars['String']
  /** Property id. This propert changes according to the content of the object. */
  propertyID: InputMaybe<Scalars['String']>
  /** Property value. May hold a string or the string representation of an object. */
  value: Scalars['ObjectOrString']
  /** Specifies the nature of the value */
  valueReference: Scalars['String']
}

/** Selected search facet input. */
export type IStoreSelectedFacet = {
  /** Selected search facet key. */
  key: Scalars['String']
  /** Selected search facet value. */
  value: Scalars['String']
}

/** Session input. */
export type IStoreSession = {
  /** Session input channel. */
  channel: InputMaybe<Scalars['String']>
  /** Session input country. */
  country: Scalars['String']
  /** Session input currency. */
  currency: IStoreCurrency
  /** Session input locale. */
  locale: Scalars['String']
  /** Session input postal code. */
  person: InputMaybe<IStorePerson>
  /** Session input postal code. */
  postalCode: InputMaybe<Scalars['String']>
}

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>
  gt: InputMaybe<Scalars['Int']>
  gte: InputMaybe<Scalars['Int']>
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt: InputMaybe<Scalars['Int']>
  lte: InputMaybe<Scalars['Int']>
  ne: InputMaybe<Scalars['Int']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type Internal = {
  content: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description: Maybe<Scalars['String']>
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType: Maybe<Scalars['Boolean']>
  mediaType: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>
  contentDigest: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  fieldOwners: InputMaybe<StringQueryOperatorInput>
  ignoreType: InputMaybe<BooleanQueryOperatorInput>
  mediaType: InputMaybe<StringQueryOperatorInput>
  owner: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>
  glob: InputMaybe<Scalars['JSON']>
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  ne: InputMaybe<Scalars['JSON']>
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  regex: InputMaybe<Scalars['JSON']>
}

export type Mutation = {
  /** Subscribes a new person to the newsletter list. */
  subscribeToNewsletter: Maybe<PersonNewsletter>
  /** Checks for changes between the cart presented in the UI and the cart stored in the ecommerce platform. If changes are detected, it returns the cart stored on the platform. Otherwise, it returns `null`. */
  validateCart: Maybe<StoreCart>
  /** Updates a web session with the specified values. */
  validateSession: Maybe<StoreSession>
}

export type MutationSubscribeToNewsletterArgs = {
  data: IPersonNewsletter
}

export type MutationValidateCartArgs = {
  cart: IStoreCart
  session: InputMaybe<IStoreSession>
}

export type MutationValidateSessionArgs = {
  search: Scalars['String']
  session: IStoreSession
}

/** Node Interface */
export type Node = {
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent: Maybe<Node>
}

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

/** Newsletter information. */
export type PersonNewsletter = {
  /** Person's ID in the newsletter list. */
  id: Scalars['String']
}

export type Query = {
  /** Returns information about all collections. */
  allCollections: StoreCollectionConnection
  allDirectory: DirectoryConnection
  allFile: FileConnection
  /** Returns information about all products. */
  allProducts: StoreProductConnection
  allSite: SiteConnection
  allSiteBuildMetadata: SiteBuildMetadataConnection
  allSiteFunction: SiteFunctionConnection
  allSitePage: SitePageConnection
  allSitePlugin: SitePluginConnection
  /** Returns the details of a collection based on the collection slug. */
  collection: StoreCollection
  directory: Maybe<Directory>
  file: Maybe<File>
  /** Returns the details of a product based on the specified locator. */
  product: StoreProduct
  /** Returns the result of a product, facet, or suggestion search. */
  search: StoreSearchResult
  site: Maybe<Site>
  siteBuildMetadata: Maybe<SiteBuildMetadata>
  siteFunction: Maybe<SiteFunction>
  sitePage: Maybe<SitePage>
  sitePlugin: Maybe<SitePlugin>
}

export type QueryAllCollectionsArgs = {
  after: InputMaybe<Scalars['String']>
  first: Scalars['Int']
}

export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<FileSortInput>
}

export type QueryAllProductsArgs = {
  after: InputMaybe<Scalars['String']>
  first: Scalars['Int']
}

export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SitePluginSortInput>
}

export type QueryCollectionArgs = {
  slug: Scalars['String']
}

export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type QueryProductArgs = {
  locator: Array<IStoreSelectedFacet>
}

export type QuerySearchArgs = {
  after: InputMaybe<Scalars['String']>
  first: Scalars['Int']
  selectedFacets: InputMaybe<Array<IStoreSelectedFacet>>
  sort?: InputMaybe<StoreSort>
  term?: InputMaybe<Scalars['String']>
}

export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>
  host: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  port: InputMaybe<IntQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  functionRoute: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>
  component: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  path: InputMaybe<StringQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
}

export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  resolve: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
}

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>
  children: Array<Node>
  flags: Maybe<SiteFlags>
  graphqlTypegen: Maybe<Scalars['Boolean']>
  host: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  jsxRuntime: Maybe<Scalars['String']>
  parent: Maybe<Node>
  pathPrefix: Maybe<Scalars['String']>
  polyfill: Maybe<Scalars['Boolean']>
  port: Maybe<Scalars['Int']>
  siteMetadata: Maybe<SiteSiteMetadata>
  trailingSlash: Maybe<Scalars['String']>
}

export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  group: Array<SiteBuildMetadataGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  group: Array<SiteGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next: Maybe<Site>
  node: Site
  previous: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'flags___FAST_DEV'
  | 'flags___PARALLEL_SOURCING'
  | 'graphqlTypegen'
  | 'host'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jsxRuntime'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pathPrefix'
  | 'polyfill'
  | 'port'
  | 'siteMetadata___author'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___title'
  | 'siteMetadata___titleTemplate'
  | 'trailingSlash'

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>
  host: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  port: InputMaybe<IntQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
}

export type SiteFlags = {
  FAST_DEV: Maybe<Scalars['Boolean']>
  PARALLEL_SOURCING: Maybe<Scalars['Boolean']>
}

export type SiteFlagsFilterInput = {
  FAST_DEV: InputMaybe<BooleanQueryOperatorInput>
  PARALLEL_SOURCING: InputMaybe<BooleanQueryOperatorInput>
}

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String']
  children: Array<Node>
  functionRoute: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  matchPath: Maybe<Scalars['String']>
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  parent: Maybe<Node>
  pluginName: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
}

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  group: Array<SiteFunctionGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>
  node: SiteFunction
  previous: Maybe<SiteFunction>
}

export type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'functionRoute'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginName'
  | 'relativeCompiledFilePath'

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  functionRoute: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SiteFunctionGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SiteGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SitePage = Node & {
  children: Array<Node>
  component: Scalars['String']
  componentChunkName: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  internalComponentName: Scalars['String']
  matchPath: Maybe<Scalars['String']>
  pageContext: Maybe<Scalars['JSON']>
  parent: Maybe<Node>
  path: Scalars['String']
  pluginCreator: Maybe<SitePlugin>
}

export type SitePageConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  group: Array<SitePageGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  next: Maybe<SitePage>
  node: SitePage
  previous: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'pageContext'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'path'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___id'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___name'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___resolve'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___version'

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  component: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  path: InputMaybe<StringQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
}

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SitePageGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  name: Maybe<Scalars['String']>
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  packageJson: Maybe<Scalars['JSON']>
  parent: Maybe<Node>
  pluginFilepath: Maybe<Scalars['String']>
  pluginOptions: Maybe<Scalars['JSON']>
  resolve: Maybe<Scalars['String']>
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  version: Maybe<Scalars['String']>
}

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  group: Array<SitePluginGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next: Maybe<SitePlugin>
  node: SitePlugin
  previous: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version'

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  resolve: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SitePluginGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  author: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  siteUrl: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  titleTemplate: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  author: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  siteUrl: InputMaybe<StringQueryOperatorInput>
  title: InputMaybe<StringQueryOperatorInput>
  titleTemplate: InputMaybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SkuVariants = {
  /** SKU property values for the current SKU. */
  activeVariations: Maybe<Scalars['ActiveVariations']>
  /** All available options for each SKU variant property, indexed by their name. */
  allVariantsByName: Maybe<Scalars['VariantsByName']>
  /**
   * Available options for each varying SKU property, taking into account the
   * `dominantVariantName` property. Returns all available options for the
   * dominant property, and only options that can be combined with its current
   * value for other properties.
   */
  availableVariations: Maybe<Scalars['FormattedVariants']>
  /**
   * Maps property value combinations to their respective SKU's slug. Enables
   * us to retrieve the slug for the SKU that matches the currently selected
   * variations in O(1) time.
   */
  slugsMap: Maybe<Scalars['SlugsMap']>
}

export type SkuVariantsAvailableVariationsArgs = {
  dominantVariantName: Scalars['String']
}

export type SkuVariantsSlugsMapArgs = {
  dominantVariantName: Scalars['String']
}

export type SortOrderEnum = 'ASC' | 'DESC'

/** Aggregate offer information, for a given SKU that is available to be fulfilled by multiple sellers. */
export type StoreAggregateOffer = {
  /** Highest price among all sellers. */
  highPrice: Scalars['Float']
  /** Lowest price among all sellers. */
  lowPrice: Scalars['Float']
  /** Number of sellers selling this SKU. */
  offerCount: Scalars['Int']
  /** Array with information on each available offer. */
  offers: Array<StoreOffer>
  /** ISO code of the currency used for the offer prices. */
  priceCurrency: Scalars['String']
}

/** Average rating, based on multiple ratings or reviews. */
export type StoreAggregateRating = {
  /** Value of the aggregate rating. */
  ratingValue: Scalars['Float']
  /** Total number of ratings. */
  reviewCount: Scalars['Int']
}

/** information about the author of a product review or rating. */
export type StoreAuthor = {
  /** Author name. */
  name: Scalars['String']
}

/** Brand of a given product. */
export type StoreBrand = {
  /** Brand name. */
  name: Scalars['String']
}

/** List of items consisting of chain linked web pages, ending with the current page. */
export type StoreBreadcrumbList = {
  /** Array with breadcrumb elements. */
  itemListElement: Array<StoreListItem>
  /** Number of breadcrumbs in the list. */
  numberOfItems: Scalars['Int']
}

/** Shopping cart information. */
export type StoreCart = {
  /** List of shopping cart messages. */
  messages: Array<StoreCartMessage>
  /** Order information, including `orderNumber` and `acceptedOffer`. */
  order: StoreOrder
}

/** Shopping cart message. */
export type StoreCartMessage = {
  /** Shopping cart message status, which can be `INFO`, `WARNING` or `ERROR`. */
  status: StoreStatus
  /** Shopping cart message text. */
  text: Scalars['String']
}

/** Product collection information. */
export type StoreCollection = {
  /** List of items consisting of chain linked web pages, ending with the current page. */
  breadcrumbList: StoreBreadcrumbList
  /** Collection ID. */
  id: Scalars['ID']
  /** Collection meta information. Used for search. */
  meta: StoreCollectionMeta
  /** Meta tag data. */
  seo: StoreSeo
  /** Corresponding collection URL slug, with which to retrieve this entity. */
  slug: Scalars['String']
  /** Collection type. */
  type: StoreCollectionType
}

/** Collection connections, including pagination information and collections returned by the query. */
export type StoreCollectionConnection = {
  /** Array with collection connection page edges, each containing a collection and a corresponding cursor.. */
  edges: Array<StoreCollectionEdge>
  /** Collection pagination information. */
  pageInfo: StorePageInfo
}

/** Each collection edge contains a `node`, with product collection information, and a `cursor`, that can be used as a reference for pagination. */
export type StoreCollectionEdge = {
  /** Collection cursor. Used as pagination reference. */
  cursor: Scalars['String']
  /** Each collection node contains the information of a product collection returned by the query. */
  node: StoreCollection
}

/** Product collection facet, used for search. */
export type StoreCollectionFacet = {
  /** Facet key. */
  key: Scalars['String']
  /** Facet value. */
  value: Scalars['String']
}

/** Collection meta information. Used for search. */
export type StoreCollectionMeta = {
  /** List of selected collection facets. */
  selectedFacets: Array<StoreCollectionFacet>
}

/** Product collection type. Possible values are `Department`, `Category`, `Brand`, `Cluster`, `SubCategory` or `Collection`. */
export type StoreCollectionType =
  /** Product brand. */
  | 'Brand'
  /** Second level of product categorization. */
  | 'Category'
  /** Product cluster. */
  | 'Cluster'
  /** Product collection. */
  | 'Collection'
  /** First level of product categorization. */
  | 'Department'
  /** Third level of product categorization. */
  | 'SubCategory'

/** Currency information. */
export type StoreCurrency = {
  /** Currency code (e.g: USD). */
  code: Scalars['String']
  /** Currency symbol (e.g: $). */
  symbol: Scalars['String']
}

export type StoreFacet = StoreFacetBoolean | StoreFacetRange

/** Search facet boolean information. */
export type StoreFacetBoolean = {
  /** Facet key. */
  key: Scalars['String']
  /** Facet label. */
  label: Scalars['String']
  /** Array with information on each facet value. */
  values: Array<StoreFacetValueBoolean>
}

/** Search facet range information. */
export type StoreFacetRange = {
  /** Facet key. */
  key: Scalars['String']
  /** Facet label. */
  label: Scalars['String']
  /** Maximum facet range value. */
  max: StoreFacetValueRange
  /** Minimum facet range value. */
  min: StoreFacetValueRange
}

/** Search facet type. */
export type StoreFacetType =
  /** Indicates boolean search facet. */
  | 'BOOLEAN'
  /** Indicates range type search facet. */
  | 'RANGE'

/** Information of a specific facet value. */
export type StoreFacetValueBoolean = {
  /** Facet value label. */
  label: Scalars['String']
  /** Number of items with this facet. */
  quantity: Scalars['Int']
  /** Indicates whether facet is selected. */
  selected: Scalars['Boolean']
  /** Facet value. */
  value: Scalars['String']
}

/** Search facet range value information. Used for minimum and maximum range values. */
export type StoreFacetValueRange = {
  /** Search facet range absolute value. */
  absolute: Scalars['Float']
  /** Search facet range selected value. */
  selected: Scalars['Float']
}

/** Image. */
export type StoreImage = {
  /** Alias for the image. */
  alternateName: Scalars['String']
  /** Image URL. */
  url: Scalars['String']
}

/** Item of a list. */
export type StoreListItem = {
  /** List item value. */
  item: Scalars['String']
  /** Name of the list item. */
  name: Scalars['String']
  /** Position of the item in the list. */
  position: Scalars['Int']
}

/** Offer information. */
export type StoreOffer = {
  /** Offer item availability. */
  availability: Scalars['String']
  /** Offer item condition. */
  itemCondition: Scalars['String']
  /** Information on the item being offered. */
  itemOffered: StoreProduct
  /** This is displayed as the "from" price in the context of promotions' price comparison. This may change before it reaches the shelf. */
  listPrice: Scalars['Float']
  /** Also known as spot price. */
  price: Scalars['Float']
  /** ISO code of the currency used for the offer prices. */
  priceCurrency: Scalars['String']
  /** Next date in which price is scheduled to change. If there is no scheduled change, this will be set a year in the future from current time. */
  priceValidUntil: Scalars['String']
  /** Number of items offered. */
  quantity: Scalars['Int']
  /** Seller responsible for the offer. */
  seller: StoreOrganization
  /** Computed price before applying coupons, taxes or benefits. This may change before it reaches the shelf. */
  sellingPrice: Scalars['Float']
}

/** Information of a specific order. */
export type StoreOrder = {
  /** Array with information on each accepted offer. */
  acceptedOffer: Array<StoreOffer>
  /** ID of the order in [VTEX order management](https://help.vtex.com/en/tutorial/license-manager-resources-oms--60QcBsvWeum02cFi3GjBzg#). */
  orderNumber: Scalars['String']
}

/** Organization. */
export type StoreOrganization = {
  /** Organization ID. */
  identifier: Scalars['String']
}

/** Whenever you make a query that allows for pagination, such as `allProducts` or `allCollections`, you can check `StorePageInfo` to learn more about the complete set of items and use it to paginate your queries. */
export type StorePageInfo = {
  /** Cursor corresponding to the last possible item. */
  endCursor: Scalars['String']
  /** Indicates whether there is at least one more page with items after the ones returned in the current query. */
  hasNextPage: Scalars['Boolean']
  /** Indicates whether there is at least one more page with items before the ones returned in the current query. */
  hasPreviousPage: Scalars['Boolean']
  /** Cursor corresponding to the first possible item. */
  startCursor: Scalars['String']
  /** Total number of items (products or collections), not pages. */
  totalCount: Scalars['Int']
}

/** Client profile data. */
export type StorePerson = {
  /** Client email. */
  email: Scalars['String']
  /** Client last name. */
  familyName: Scalars['String']
  /** Client first name. */
  givenName: Scalars['String']
  /** Client ID. */
  id: Scalars['String']
}

/** Product information. Products are variants within product groups, equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type StoreProduct = {
  /** Array of additional properties. */
  additionalProperty: Array<StorePropertyValue>
  /** Aggregate ratings data. */
  aggregateRating: StoreAggregateRating
  /** Product brand. */
  brand: StoreBrand
  /** List of items consisting of chain linked web pages, ending with the current page. */
  breadcrumbList: StoreBreadcrumbList
  /** Product description. */
  description: Scalars['String']
  /** Global Trade Item Number. */
  gtin: Scalars['String']
  /** Array of images. */
  image: Array<StoreImage>
  /** Indicates product group related to this product. */
  isVariantOf: StoreProductGroup
  /** Product name. */
  name: Scalars['String']
  /** Aggregate offer information. */
  offers: StoreAggregateOffer
  /** Product ID, such as [ISBN](https://www.isbn-international.org/content/what-isbn) or similar global IDs. */
  productID: Scalars['String']
  /** The product's release date. Formatted using https://en.wikipedia.org/wiki/ISO_8601 */
  releaseDate: Scalars['String']
  /** Array with review information. */
  review: Array<StoreReview>
  /** Meta tag data. */
  seo: StoreSeo
  /** Stock Keeping Unit. Merchant-specific ID for the product. */
  sku: Scalars['String']
  /** Corresponding collection URL slug, with which to retrieve this entity. */
  slug: Scalars['String']
}

/** Product connections, including pagination information and products returned by the query. */
export type StoreProductConnection = {
  /** Array with product connection edges, each containing a product and a corresponding cursor. */
  edges: Array<StoreProductEdge>
  /** Product pagination information. */
  pageInfo: StorePageInfo
}

/** Each product edge contains a `node`, with product information, and a `cursor`, that can be used as a reference for pagination. */
export type StoreProductEdge = {
  /** Product cursor. Used as pagination reference. */
  cursor: Scalars['String']
  /** Each product node contains the information of a product returned by the query. */
  node: StoreProduct
}

/** Product group information. Product groups are catalog entities that may contain variants. They are equivalent to VTEX [Products](https://help.vtex.com/en/tutorial/what-is-a-product--2zrB2gFCHyQokCKKE8kuAw#), whereas each variant is equivalent to a VTEX [SKU](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type StoreProductGroup = {
  /** Array of additional properties. */
  additionalProperty: Array<StorePropertyValue>
  /** Array of variants related to product group. Variants are equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). */
  hasVariant: Array<StoreProduct>
  /** Product group name. */
  name: Scalars['String']
  /** Product group ID. */
  productGroupID: Scalars['String']
  /**
   * Object containing data structures to facilitate handling different SKU
   * variant properties. Specially useful for implementing SKU selection
   * components.
   */
  skuVariants: Maybe<SkuVariants>
}

/** Properties that can be associated with products and products groups. */
export type StorePropertyValue = {
  /** Property name. */
  name: Scalars['String']
  /** Property id. This propert changes according to the content of the object. */
  propertyID: Scalars['String']
  /** Property value. May hold a string or the string representation of an object. */
  value: Scalars['ObjectOrString']
  /** Specifies the nature of the value */
  valueReference: Scalars['String']
}

/** Information of a given review. */
export type StoreReview = {
  /** Review author. */
  author: StoreAuthor
  /** Review rating information. */
  reviewRating: StoreReviewRating
}

/** Information of a given review rating. */
export type StoreReviewRating = {
  /** Best rating value. */
  bestRating: Scalars['Float']
  /** Rating value. */
  ratingValue: Scalars['Float']
}

/** Search result. */
export type StoreSearchResult = {
  /** Array of search result facets. */
  facets: Array<StoreFacet>
  /** Search result products. */
  products: StoreProductConnection
  /** Search result suggestions. */
  suggestions: StoreSuggestions
}

/** Search Engine Optimization (SEO) tags data. */
export type StoreSeo = {
  /** Canonical tag. */
  canonical: Scalars['String']
  /** Description tag. */
  description: Scalars['String']
  /** Title tag. */
  title: Scalars['String']
  /** Title template tag. */
  titleTemplate: Scalars['String']
}

/** Session information. */
export type StoreSession = {
  /** Session channel. */
  channel: Maybe<Scalars['String']>
  /** Session country. */
  country: Scalars['String']
  /** Session currency. */
  currency: StoreCurrency
  /** Session locale. */
  locale: Scalars['String']
  /** Session postal code. */
  person: Maybe<StorePerson>
  /** Session postal code. */
  postalCode: Maybe<Scalars['String']>
}

/** Product search results sorting options. */
export type StoreSort =
  /** Sort by discount value, from highest to lowest. */
  | 'discount_desc'
  /** Sort by name, in alphabetical order. */
  | 'name_asc'
  /** Sort by name, in reverse alphabetical order. */
  | 'name_desc'
  /** Sort by orders, from highest to lowest. */
  | 'orders_desc'
  /** Sort by price, from lowest to highest. */
  | 'price_asc'
  /** Sort by price, from highest to lowest. */
  | 'price_desc'
  /** Sort by release date, from  highest to lowest. */
  | 'release_desc'
  /** Sort by product score, from highest to lowest. */
  | 'score_desc'

/** Status used to indicate a message type. For instance, a shopping cart informative or error message. */
export type StoreStatus = 'ERROR' | 'INFO' | 'WARNING'

/** Suggestion term. */
export type StoreSuggestionTerm = {
  /** Its occurrences count. */
  count: Scalars['Int']
  /** The term. */
  value: Scalars['String']
}

/** Suggestions information. */
export type StoreSuggestions = {
  /** Array with suggestion products' information. */
  products: Array<StoreProduct>
  /** Array with suggestion terms. */
  terms: Array<StoreSuggestionTerm>
}

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>
  glob: InputMaybe<Scalars['String']>
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  ne: InputMaybe<Scalars['String']>
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regex: InputMaybe<Scalars['String']>
}

export type ProductSummary_ProductFragment = {
  slug: string
  sku: string
  name: string
  gtin: string
  id: string
  brand: { name: string; brandName: string }
  isVariantOf: { productGroupID: string; name: string }
  image: Array<{ url: string; alternateName: string }>
  offers: {
    lowPrice: number
    offers: Array<{
      availability: string
      price: number
      listPrice: number
      quantity: number
      seller: { identifier: string }
    }>
  }
}

export type Filter_Facets_StoreFacetBoolean_Fragment = {
  __typename: 'StoreFacetBoolean'
  key: string
  label: string
  values: Array<{
    label: string
    value: string
    selected: boolean
    quantity: number
  }>
}

export type Filter_Facets_StoreFacetRange_Fragment = {
  __typename: 'StoreFacetRange'
  key: string
  label: string
  min: { selected: number; absolute: number }
  max: { selected: number; absolute: number }
}

export type Filter_FacetsFragment =
  | Filter_Facets_StoreFacetBoolean_Fragment
  | Filter_Facets_StoreFacetRange_Fragment

export type ProductDetailsFragment_ProductFragment = {
  sku: string
  name: string
  gtin: string
  description: string
  id: string
  isVariantOf: {
    productGroupID: string
    name: string
    skuVariants: {
      activeVariations: any | null
      slugsMap: any | null
      availableVariations: any | null
    } | null
  }
  image: Array<{ url: string; alternateName: string }>
  brand: { name: string }
  offers: {
    lowPrice: number
    offers: Array<{
      availability: string
      price: number
      listPrice: number
      seller: { identifier: string }
    }>
  }
  breadcrumbList: {
    itemListElement: Array<{ item: string; name: string; position: number }>
  }
  additionalProperty: Array<{
    propertyID: string
    name: string
    value: any
    valueReference: string
  }>
}

export type ProductGalleryQueryQueryVariables = Exact<{
  first: Scalars['Int']
  after: Scalars['String']
  sort: StoreSort
  term: Scalars['String']
  selectedFacets: Array<IStoreSelectedFacet> | IStoreSelectedFacet
}>

export type ProductGalleryQueryQuery = {
  search: {
    products: { pageInfo: { totalCount: number } }
    facets: Array<
      | {
          __typename: 'StoreFacetBoolean'
          key: string
          label: string
          values: Array<{
            label: string
            value: string
            selected: boolean
            quantity: number
          }>
        }
      | {
          __typename: 'StoreFacetRange'
          key: string
          label: string
          min: { selected: number; absolute: number }
          max: { selected: number; absolute: number }
        }
    >
  }
}

export type CollectionPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type CollectionPageQueryQuery = {
  site: {
    siteMetadata: {
      titleTemplate: string | null
      title: string | null
      description: string | null
      siteUrl: string | null
    } | null
  } | null
}

export type ServerCollectionPageQueryQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type ServerCollectionPageQueryQuery = {
  collection: {
    seo: { title: string; description: string }
    breadcrumbList: {
      itemListElement: Array<{ item: string; name: string; position: number }>
    }
    meta: { selectedFacets: Array<{ key: string; value: string }> }
  }
}

export type ProductPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type ProductPageQueryQuery = {
  site: {
    siteMetadata: {
      title: string | null
      description: string | null
      titleTemplate: string | null
      siteUrl: string | null
    } | null
  } | null
}

export type ServerProductPageQueryQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type ServerProductPageQueryQuery = {
  product: {
    sku: string
    gtin: string
    name: string
    description: string
    id: string
    seo: { title: string; description: string; canonical: string }
    brand: { name: string }
    breadcrumbList: {
      itemListElement: Array<{ item: string; name: string; position: number }>
    }
    image: Array<{ url: string; alternateName: string }>
    offers: {
      lowPrice: number
      highPrice: number
      priceCurrency: string
      offers: Array<{
        availability: string
        price: number
        priceValidUntil: string
        priceCurrency: string
        itemCondition: string
        listPrice: number
        seller: { identifier: string }
      }>
    }
    isVariantOf: {
      productGroupID: string
      name: string
      skuVariants: {
        activeVariations: any | null
        slugsMap: any | null
        availableVariations: any | null
      } | null
    }
    additionalProperty: Array<{
      propertyID: string
      name: string
      value: any
      valueReference: string
    }>
  }
}

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never }>

export type HomePageQueryQuery = {
  site: {
    siteMetadata: {
      title: string | null
      description: string | null
      titleTemplate: string | null
      siteUrl: string | null
    } | null
  } | null
}

export type SearchPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type SearchPageQueryQuery = {
  site: {
    siteMetadata: {
      titleTemplate: string | null
      title: string | null
      description: string | null
    } | null
  } | null
}

export type ValidateCartMutationMutationVariables = Exact<{
  cart: IStoreCart
  session: IStoreSession
}>

export type ValidateCartMutationMutation = {
  validateCart: {
    order: {
      orderNumber: string
      acceptedOffer: Array<{
        quantity: number
        price: number
        listPrice: number
        seller: { identifier: string }
        itemOffered: {
          sku: string
          name: string
          gtin: string
          image: Array<{ url: string; alternateName: string }>
          brand: { name: string }
          isVariantOf: { productGroupID: string; name: string }
          additionalProperty: Array<{
            propertyID: string
            name: string
            value: any
            valueReference: string
          }>
        }
      }>
    }
    messages: Array<{ text: string; status: StoreStatus }>
  } | null
}

export type CartMessageFragment = { text: string; status: StoreStatus }

export type CartItemFragment = {
  quantity: number
  price: number
  listPrice: number
  seller: { identifier: string }
  itemOffered: {
    sku: string
    name: string
    gtin: string
    image: Array<{ url: string; alternateName: string }>
    brand: { name: string }
    isVariantOf: { productGroupID: string; name: string }
    additionalProperty: Array<{
      propertyID: string
      name: string
      value: any
      valueReference: string
    }>
  }
}

export type CartProductItemFragment = {
  sku: string
  name: string
  gtin: string
  image: Array<{ url: string; alternateName: string }>
  brand: { name: string }
  isVariantOf: { productGroupID: string; name: string }
  additionalProperty: Array<{
    propertyID: string
    name: string
    value: any
    valueReference: string
  }>
}

export type SubscribeToNewsletterMutationVariables = Exact<{
  data: IPersonNewsletter
}>

export type SubscribeToNewsletterMutation = {
  subscribeToNewsletter: { id: string } | null
}

export type BrowserProductQueryQueryVariables = Exact<{
  locator: Array<IStoreSelectedFacet> | IStoreSelectedFacet
}>

export type BrowserProductQueryQuery = {
  product: {
    sku: string
    name: string
    gtin: string
    description: string
    id: string
    isVariantOf: {
      productGroupID: string
      name: string
      skuVariants: {
        activeVariations: any | null
        slugsMap: any | null
        availableVariations: any | null
      } | null
    }
    image: Array<{ url: string; alternateName: string }>
    brand: { name: string }
    offers: {
      lowPrice: number
      offers: Array<{
        availability: string
        price: number
        listPrice: number
        seller: { identifier: string }
      }>
    }
    breadcrumbList: {
      itemListElement: Array<{ item: string; name: string; position: number }>
    }
    additionalProperty: Array<{
      propertyID: string
      name: string
      value: any
      valueReference: string
    }>
  }
}

export type ProductsQueryQueryVariables = Exact<{
  first: Scalars['Int']
  after: InputMaybe<Scalars['String']>
  sort: StoreSort
  term: Scalars['String']
  selectedFacets: Array<IStoreSelectedFacet> | IStoreSelectedFacet
}>

export type ProductsQueryQuery = {
  search: {
    products: {
      pageInfo: { totalCount: number }
      edges: Array<{
        node: {
          slug: string
          sku: string
          name: string
          gtin: string
          id: string
          brand: { name: string; brandName: string }
          isVariantOf: { productGroupID: string; name: string }
          image: Array<{ url: string; alternateName: string }>
          offers: {
            lowPrice: number
            offers: Array<{
              availability: string
              price: number
              listPrice: number
              quantity: number
              seller: { identifier: string }
            }>
          }
        }
      }>
    }
  }
}

export type SearchSuggestionsQueryQueryVariables = Exact<{
  term: Scalars['String']
  selectedFacets: InputMaybe<Array<IStoreSelectedFacet> | IStoreSelectedFacet>
}>

export type SearchSuggestionsQueryQuery = {
  search: {
    suggestions: {
      terms: Array<{ value: string }>
      products: Array<{
        slug: string
        sku: string
        name: string
        gtin: string
        id: string
        brand: { name: string; brandName: string }
        isVariantOf: { productGroupID: string; name: string }
        image: Array<{ url: string; alternateName: string }>
        offers: {
          lowPrice: number
          offers: Array<{
            availability: string
            price: number
            listPrice: number
            quantity: number
            seller: { identifier: string }
          }>
        }
      }>
    }
  }
}

export type TopSearchSuggestionsQueryQueryVariables = Exact<{
  term: Scalars['String']
  selectedFacets: InputMaybe<Array<IStoreSelectedFacet> | IStoreSelectedFacet>
}>

export type TopSearchSuggestionsQueryQuery = {
  search: { suggestions: { terms: Array<{ value: string }> } }
}

export type ValidateSessionMutationVariables = Exact<{
  session: IStoreSession
  search: Scalars['String']
}>

export type ValidateSessionMutation = {
  validateSession: {
    locale: string
    channel: string | null
    country: string
    postalCode: string | null
    currency: { code: string; symbol: string }
    person: {
      id: string
      email: string
      givenName: string
      familyName: string
    } | null
  } | null
}
