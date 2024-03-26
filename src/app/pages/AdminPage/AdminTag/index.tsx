import * as React from 'react';
import styled from 'styled-components';
import { AdminPage } from '..';
import { ContentHeader } from 'app/components/components_admin/ContentHeader';
import { ContentArea } from 'app/components/components_admin/ContentArea';
import { DeleteIcon, SaveIcon } from 'app/components/components_common/IconSVG';

const AddInput = styled.input`
  width: 20vh;
  height: 100%;
  text-align: center;
  font-size: 1.5vh;
  font-weight: 700;
  background-color: #a9d0f5;
  margin-right: 1vh;
  padding: 0 1vh;
  border: 0;
  outline: 0;
  border-radius: 100vh;
  transition: all ease 0.25s;

  &:focus {
    box-shadow: 0 0 0.75vh #a9d0f5;
  }
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8vh;
  height: 100%;
  font-size: 1.5vh;
  font-weight: 700;
  background-color: #0080ff;
  border-radius: 100vh;
  cursor: pointer;
  transition: background-color ease 0.25s;

  &:hover {
    background-color: #045fb4;
  }

  &:active {
    box-shadow: 0 0 0.75vh #0080ff;
  }
`;

const TagItem = styled.div`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh;
  margin: 0 2vh 2vh 0;
  background-color: #d8d8d8;
  border-radius: 100px;
  cursor: pointer;
  transition: all ease 0.25s;

  &:hover {
    background-color: #2e2e2e;
    input[type='text'] {
      color: #fff;
    }
  }

  &:active {
    box-shadow: 0 0 0.75vh rgba(255, 255, 255, 0.9);
  }

  &.editing {
    background-color: #2e2e2e;
    box-shadow: 0 0 0.75vh rgba(255, 255, 255, 0.9);
    cursor: auto;
    input[type='text'] {
      color: #fff;
    }
  }
`;

const TagName = styled.input<{ fontWidth?: string }>`
  width: ${props => props.fontWidth || '5vh'};
  height: 100%;
  text-align: center;
  font-size: 1.5vh;
  font-weight: 700;
  margin: 0 1vh;
  padding: 0.5vh 1vh;
  letter-spacing: 0.25vh;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  &.editing {
    background-color: #1c1c1c;
    border-radius: 0.5vh;
    cursor: auto;
    &:focus {
      text-align: left;
      box-shadow: 0 0 0.25vh rgba(255, 255, 255, 0.9);
    }
  }
`;

const TagFunc = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;

  &.editing {
    display: flex;
  }
`;

export function AdminTag() {
  //Tag 추가 기능 생성
  function createMainFunc() {
    return (
      <>
        <AddInput
          type="text"
          spellCheck="false"
          placeholder="Insert Tag Name"
        ></AddInput>
        <AddButton onClick={() => {}}>ADD +</AddButton>
      </>
    );
  }
  //-----------------------------------------------------------------

  //Item에 적용된 수정 모드를 초기화
  function resetClassName(name: string) {
    document.querySelector('.' + name)?.children[0].classList.remove(name);
    document.querySelector('.' + name)?.children[1].classList.remove(name);
    document.querySelector('.' + name)?.classList.remove(name);
  }
  //-----------------------------------------------------------------

  //선택한 Item만 수정 모드로 변경
  function addClassName(name: string, event: React.MouseEvent) {
    event.currentTarget.classList.add(name);
    event.currentTarget.children[0].classList.add(name);
    event.currentTarget.children[1].classList.add(name);
  }
  //-----------------------------------------------------------------

  //DB에 저장된 Tag들을 Gird View로 생성
  function createContent() {
    const tagData: string[] = ['#루키', '#후추', '#송이', '#리나'];
    const result: JSX.Element[] = [];
    for (let i = 0; i < tagData.length; i++) {
      result.push(
        <TagItem
          key={'tagItem' + i}
          onClick={event => {
            resetClassName('editing');
            addClassName('editing', event);
          }}
        >
          <TagName
            key={'tagName' + i}
            type={'text'}
            defaultValue={tagData[i]}
            fontWidth={tagData[i].length * 3 + 'vh'} //글자 크기 비례 input width
            spellCheck={'false'}
          ></TagName>
          <TagFunc key={'tagFunc' + i}>
            <SaveIcon key={'saveIcon' + i} onClick={() => {}}></SaveIcon>
            <DeleteIcon key={'deleteIcon' + i} onClick={() => {}}></DeleteIcon>
          </TagFunc>
        </TagItem>,
      );
    }
    return result;
  }
  //-----------------------------------------------------------------

  return (
    <AdminPage
      content={
        <>
          <ContentHeader name="태그 관리"></ContentHeader>
          <ContentArea
            func={createMainFunc()}
            content={createContent()}
          ></ContentArea>
        </>
      }
    ></AdminPage>
  );
}
