import styled from 'styled-components';

export const AdminBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  font-family: 'Noto Sans KR', sans-serif;
  color: #fff;
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.9);
  user-select: none;
  transition: all ease 0.25s;
`;

export const AdminBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

export const AdminNavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 25vh;
  height: 90vh;
  padding: 10vh 2vh;
  background-color: rgba(0, 0, 0, 0.75);
  transition: all ease 0.25s;
  user-select: none;
`;

export const AdminContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 2vh 5vh;
`;

export const MainBox = styled.div`
  width: 100%;
  font-family: 'Nanum Gothic', sans-serif;
  padding: 4vh 2vh;
  overflow-y: auto;
  user-select: none;
`;

export const MainHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4vh;
  margin-bottom: 4vh;
`;

export const MainBody = styled.div`
  color: #000;
  font-size: 1.5vh;
  font-weight: 700;
`;
