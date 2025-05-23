import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: var(--white);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: var(--shadow);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const SectionTitle = styled.h2`
  color: var(--primary-dark);
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function Section({ title, children, onEdit, isEditing, onSave }) {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {isEditing ? (
          <button className="btn" onClick={onSave}>
            Save
          </button>
        ) : (
          <button className="btn btn-edit" onClick={onEdit}>
            Edit
          </button>
        )}
      </SectionHeader>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
}
