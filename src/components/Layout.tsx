import { Outlet, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { MainMenu } from "./MainMenu";
import { Breadcrumbs } from "src/components/Breadcrumbs";

interface IGapRow {
  style: React.CSSProperties;
  children: React.ReactNode;
}

const GapRow = ({ style, children }: IGapRow) => {
  return <Row style={style}>{children}</Row>;
};

export const Layout = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <Container>
      <GapRow
        style={{
          gap: "16px",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        <Col xxl={12} md={3}>
          <MainMenu />
        </Col>
        <Col xxl={12} md={3}>
          <Breadcrumbs pathNames={pathNames} />
        </Col>
        <Col xxl={12} md={3}>
          <Outlet />
        </Col>
      </GapRow>
    </Container>
  );
};
