import styled from 'styled-components';
import variables from '../../variables';
import { lighten } from 'polished';

export const Container = styled.a`
  align-items: right;
  border-radius: 3px;
  display: flex;
  flex-flow: row;
  //justify-content: space-between;
  margin: 10px auto;
  text-decoration: none;
  width: 100%;
  padding-right:20px;
  padding-left:20px;
  //background-image: linear-gradient(to bottom,rgba(255,255,255,0.5),rgba(255,255,255,0));
  //box-shadow:  5px 5px 5px #000000;
   //border-radius: 100px 100px 100px 0px;
  //background-image: linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,0));
  
  &:hover {

    cursor: pointer;
  }
}
`;

export const Icon = styled.img`
  height: 20px;
  margin: 0 5px;
  padding: 5px;
`;

export const Name = styled.p`
  color: ${variables.textColor};
  --padding: 20px 0;
  padding:auto;
  align-items: center;
  text-align: center;
  --width:50%;

`;
