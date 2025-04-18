import { memo } from "react";
import { CommonPageProps } from "./types";
import { Col } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { GapRow } from "src/components";

export const GroupListPage = memo<CommonPageProps>(({ groupContactsState }) => {
  return (
    <GapRow
      style={{
        rowGap: 12,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {groupContactsState[0].map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </GapRow>
  );
});
