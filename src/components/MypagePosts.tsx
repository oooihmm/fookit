import React from "react";
import styled from "styled-components";

interface IPost {
  recipeId: number;
  author: string;
  title: string;
  time: string;
  view: number;
}

interface IPostListProps {
  posts: IPost[] | undefined;
}

const PostTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const PostTableHead = styled.thead`
  background-color: #f8e7c8;
  height: 70px;
  font-weight: 700;
  font-size: 18px;
`;

const PostTableRow = styled.tr`
  border-bottom: 1px solid #eef0ed;
  height: 50px;
  font-size: 14px;
`;

const PostTableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

const PostList: React.FC<IPostListProps> = ({ posts }) => {
  return (
    <PostTable>
      <PostTableHead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>View</th>
        </tr>
      </PostTableHead>
      <tbody>
        {posts &&
          posts.map((post, index) => (
            <PostTableRow key={index}>
              <PostTableCell style={{ padding: "0 24px", textAlign: "left" }}>
                {post.title}
              </PostTableCell>
              <PostTableCell>{post.author}</PostTableCell>
              <PostTableCell>{post.time}</PostTableCell>
              <PostTableCell>{post.view}</PostTableCell>
            </PostTableRow>
          ))}
      </tbody>
    </PostTable>
  );
};

export default PostList;
