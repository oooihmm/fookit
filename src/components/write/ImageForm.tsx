import React from 'react';
import styled from 'styled-components';

import { useDropzone } from 'react-dropzone';

const Wrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
  margin-bottom: 30px;
`;

const PostTags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const TagsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    font-size: 30px;
    font-weight: 400;
  }

  p {
    font-size: 18px;
    color: #b8b3ae;
  }

  div {
    width: 100%;
    background-color: #eef0ed;
    border-radius: 20px;
  }
`;

const ImageBox = styled.div<{ color?: string }>`
  width: 100%;
  height: 152px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 0.05px;
  border-radius: 20px;
  border-style: solid;
  border-color: ${(props) => props.color};
  outline: none;
  transition: border 0.24s ease-in-out;
  background-color: #eef0ed;
`;

const ImageForm = () => {
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      multiple: false,
    });

  const borderColor = () => {
    if (acceptedFiles.length) {
      return '#548536';
    } else if (fileRejections.length) {
      return '#A35739';
    } else {
      return '#c9c9c9';
    }
  };

  const renderFileInfo = () => {
    if (acceptedFiles.length || fileRejections.length) {
      const file = acceptedFiles.length
        ? acceptedFiles[0]
        : fileRejections[0].file;
      const fileName = file.name;

      return (
        <p>
          {fileName}
          {fileRejections.length > 1
            ? ` 외 ${fileRejections.length - 1} 개`
            : ''}
        </p>
      );
    } else {
      return <p>파일을 드래그하거나 클릭하여 업로드하세요.</p>;
    }
  };

  return (
    <Wrap>
      <PostTags>
        <TagsWrap>
          <h3>이미지 첨부</h3>
        </TagsWrap>
        <ImageBox
          color={borderColor()}
          {...getRootProps({
            className: 'dropzone',
          })}>
          <input {...getInputProps()} />
          {renderFileInfo()}
        </ImageBox>
      </PostTags>
    </Wrap>
  );
};

export default ImageForm;
