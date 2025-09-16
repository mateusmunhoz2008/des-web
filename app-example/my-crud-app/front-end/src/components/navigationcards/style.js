import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 100px;
  width: 100%;
  min-height: 100%;
`;

export const Card = styled.div`
  background: #222124;
  border-radius: 16px;
  padding: 24px;
  width: 260px;
  text-align: left;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardTitle = styled.div`
  font-size: 32px;
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CardValue = styled.div`
  font-size: 16px;
  color: white;
`;

export const Icon = styled.span`
  float: right;
  font-size: 28px;
  color: #4e73df;
`;