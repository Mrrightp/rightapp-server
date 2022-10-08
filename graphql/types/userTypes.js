module.exports = /* GraphQL */ `
  type Query {
    topics: [Topic]
    users: [User]
    faculties: [Faculty]
    departments: [Department]
    user(id: Int!): User
    topic(id: Int!): Topic
    category(id: Int!): Category
    faculty(id: Int!): Faculty
    department(id: Int!): Department
  }
  type User {
    id: Int!
    username: String
    lastName: String
    Topics: [Topic]
    topicsUserFollowed: [Topic]
    materials: [Material]
    refreshToken: String
    profileImgUrl: String
    regDate: String
    ipAdress: String
    isAdmin: Boolean
    followedBy: [User]
    following: [User]
    role: String
    faculty: [Faculty]
    department: [Department]
    bio: String
  }
  type Topic {
    id: Int!
    title: String
    content: String
    authorId: Int
    author: User
    likes: Int
    viwes: Int
    createdDate: String
    updatedDate: String
    coverImageUrl: String
    category: [Category]
    faculty: [Faculty]
    department: [Department]
    followers: [User]
    commentsId: Int
    comments: [Comment]
  }
  type Material {
    id: Int!
    title: String
    createdDate: String
    updatedDate: String
    author: String
    authorId: Int
    likes: Int
    viwes: Int
    comments: [Comment]
    description: String
    courseCodeId: Int
    courseCode: [CourseCode]
    faculty: [Faculty]
    department: [Department]
  }

  type Department {
    id: Int!
    name: String
    slug: String
    materials: [Material]
    materialsId: Int!
    users: [User]
    departments: [Department]
  }

  type Faculty {
    id: Int!
    name: String
    slug: String
    materials: [Material]
    materialsId: Int!
    users: [User]
  }
  type Category {
    id: Int!
    name: String
    slug: String
    topics: [Topic]
  }
  type CourseCode {
    id: Int!
    name: String
    slug: String
    materials: [Material]
  }

  type Comment {
    id: Int!
    slug: String
    content: String
    topicId: Int
    materialsId: Int
    replys: [Reply]
  }

  type Reply {
    id: Int!
    slug: String
    content: String
    commentsId: Int
  }
`;
