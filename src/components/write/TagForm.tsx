import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

import { TextFieldElement } from 'react-hook-form-mui';
import {
  Autocomplete,
  AutocompleteRenderGetTagProps,
  Chip,
  TextField,
} from '@mui/material';

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

const PostInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  border-radius: 20px;
  gap: 60px 0;

  h3 {
    font-size: 30px;
    font-weight: 400;
  }

  div {
    width: 200px;
    background-color: #eef0ed;
    border-radius: 20px;
  }
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

const Line = styled.hr`
  width: 100%;
  background: #eef0ed;
  margin: 60px 0;
  height: 1px;
  border: 0;
`;

type ChipListProps = {
  value: string[];
  renderTagProps: AutocompleteRenderGetTagProps;
  onDelete: (option: string) => () => void;
};

const ChipList = ({ value, renderTagProps, onDelete }: ChipListProps) => {
  return (
    <div>
      {value.map((option, index) => (
        <Chip
          label={option}
          {...renderTagProps({ index })}
          onDelete={onDelete(option)}
        />
      ))}
    </div>
  );
};

const TagForm = ({
  chips,
  setChips,
  disabled,
}: {
  chips: string[];
  setChips: React.Dispatch<React.SetStateAction<string[]>>;
  disabled?: boolean;
}) => {
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

  const handleDeleteChips = (option: string) => {
    return () => {
      setChips((prev) => prev.filter((chip) => chip !== option));
    };
  };
  const [text, setText] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (['Control', 'Alt'].includes(e.key)) {
      return;
    }

    const trimmedText = text.trim();
    if (!trimmedText.length) {
      if (['Backspace', 'Delete'].includes(e.key)) {
        setChips((prev) => prev.slice(0, -1));
      }
      return;
    }

    if (['Tab', 'Enter', ' ', ','].includes(e.key)) {
      e.preventDefault();
      if (e.nativeEvent.isComposing) {
        return;
      }
      setChips((prev) => [...prev, trimmedText]);
      setText('');
    }
  };

  const handleTextChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Wrap>
      <PostInput>
        <h3>총 금액</h3>
        <TextFieldElement
          margin={'dense'}
          label={'Total Price'}
          name={'totalPrice'}
          disabled={disabled}
        />
        <h3>조리 시간</h3>
        <TextFieldElement
          margin={'dense'}
          label={'Total Time'}
          name={'totalTime'}
          disabled={disabled}
        />
        <h3>칼로리</h3>
        <TextFieldElement
          margin={'dense'}
          label={'Total Calories'}
          name={'totalKcal'}
          disabled={disabled}
        />
      </PostInput>
      <Line />
      <PostTags>
        <TagsWrap>
          <h3>재료</h3>
          <p>사용된 재료를 입력해주세요 (최대 10개)</p>
        </TagsWrap>
        <Autocomplete
          clearIcon={false}
          freeSolo
          multiple
          value={chips}
          inputValue={text}
          options={[]}
          disabled={disabled}
          sx={{
            width: '100%',
            backgroundColor: '#eef0ed',
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
            />
          )}
          renderTags={(value, props) => (
            <ChipList
              value={value}
              renderTagProps={props}
              onDelete={handleDeleteChips}
            />
          )}
        />
        <TagsWrap>{disabled ? '' : <h3>이미지 첨부</h3>}</TagsWrap>
        <ImageBox
          color={borderColor()}
          {...getRootProps({
            className: 'dropzone',
          })}>
          <input {...getInputProps()} />
          {disabled ? '' : renderFileInfo()}
        </ImageBox>
      </PostTags>
    </Wrap>
  );
};

export default TagForm;
