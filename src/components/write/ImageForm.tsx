import React from 'react';
import styled from 'styled-components';

import { TextareaAutosizeElement } from 'react-hook-form-mui';
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

const ImageForm = ({ readOnly }: { readOnly?: boolean }) => {
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
            ? ` and ${fileRejections.length - 1} others`
            : ''}
        </p>
      );
    } else {
      return <p>Drag or click to upload your files.</p>;
    }
  };

  return (
    <Wrap>
      <PostTags>
        {readOnly ? (
          <>
            <ImageBox color={borderColor()}></ImageBox>
          </>
        ) : (
          <>
            <TagsWrap>
              <h3>Attach images</h3>
            </TagsWrap>
            <ImageBox
              color={borderColor()}
              {...getRootProps({
                className: 'dropzone',
              })}>
              <input {...getInputProps()} />
              {renderFileInfo()}
            </ImageBox>
          </>
        )}
        <TextareaAutosizeElement
          name='body'
          resizeStyle='vertical'
          rows={readOnly ? 3 : 15}
          sx={{ width: '100%' }}
          inputProps={{ readOnly: readOnly }}
        />
      </PostTags>
    </Wrap>
  );
};

export default ImageForm;
