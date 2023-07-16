import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 900px;
  padding: 24px 10px;
  margin: 0 auto;
  position: relative;
`
export const FlexRowContainer = styled.div<{ width?: string, mt?:string}>`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: ${props => props.mt ? props.mt : '0'};
  width: ${props => props.width ? 'props.width' : '100%'}
`

export const FlexColContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  row-gap: 15px;
  position: relative;
  padding: 62px 110px 80px 110px;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 24px;
`
export const DataItemContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-weight: bold;
  background: #e3e3e3;
  border-radius: 10px;
  box-sizing: border-box;
  min-height: 50px;
  width: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.01);
  }
`
export const ListTitle = styled.div`
  text-align: center;
  width: 100px;
  color: black;
  font-weight: bold;
  font-size: 20px;
`
export const ListSpan = styled.span`
  margin-right: 10px;
`
export const ListItem = styled.div`
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
`
export const DataItemBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    fill: #333333;
    stroke: #333333;
  }
`
export const CustomBtn = styled.button<{ mt?: string }>`
  padding: 10px;
  margin-top: ${props => props.mt ? props.mt : '0'};
  border-radius: 5px;
  background: #6363ff;
  color: #efefef;
  font-weight: bold;
  font-size: 18px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(99, 99, 255, 0.87);
  }

  &:disabled {
    background: rgba(147, 147, 248, 0.87);
    cursor: not-allowed;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 62px 110px 80px 110px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: #FFFFFF;;
  //background: rgba(49, 49, 49, 0.29);
`
export const Input = styled.input<{mr?: string, ww?: string}>`
  padding: 10px;
  width: ${props => props.ww ? props.ww : '250px'};
  outline: none;
  border: 2px solid rgba(147, 147, 248, 0.87);
  margin-right:${props => props.mr ? props.mr : '10px'};
  margin-top: 10px;
`
export const Label = styled.div`
  width: 150px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`
export const FormBtn = styled.button<{ mt?: string, bg?:string }>`
  display: block;
  padding: 10px;
  margin-top: ${props => props.mt ? props.mt : '20px'};
  border-radius: 5px;
  background: ${props => props.bg ? props.bg : '#6363ff'};
  color: #efefef;
  font-weight: bold;
  font-size: 18px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(99, 99, 255, 0.87);
  }

  &:disabled {
    background: rgba(147, 147, 248, 0.87);
    cursor: not-allowed;
  }
`
export const ErrorBlock = styled.div`
  color: red;
  font-size: 16px;
  padding: 10px;
`
export const FormTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`
