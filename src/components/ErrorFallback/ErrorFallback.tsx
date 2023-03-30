import React from "react";
import styled from "styled-components";

export const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <ErrorFallbackContainer>
      <div className="middle-card">
        <div className="oops">
          <span>O</span>
          <span>😅</span>
          <span>P</span>
          <span>S</span>
        </div>
        <p>
          😅 <b>Désolé!</b> Une erreur s'est produite ...
        </p>
      </div>
    </ErrorFallbackContainer>
  );
};
const ErrorFallbackContainer = styled.div`
  font-family: "Open sans", sans-serif !important;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #3b41ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  @include media-breakpoint-down(sm) {
    padding: 20px;
  }
  .middle-card {
    width: 100%;
    height: 100%;
    background: var(--bg-white);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: relative;
    .oops {
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        font-size: 4rem;
        font-weight: bold;
        color: var(--text-dark);
        @include media-breakpoint-down(sm) {
          font-size: 5rem;
        }
      }
      img {
        height: 10rem;
        width: auto;
        @include media-breakpoint-down(sm) {
          height: 5rem;
        }
      }
    }
    p {
      text-align: center;
      font-weight: normal;
      font-size: 1.2rem;
      width: 100%;
      small {
        color: var(--text-dark-tint);
      }
    }
  }
`;
