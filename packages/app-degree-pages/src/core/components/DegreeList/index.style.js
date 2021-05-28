// @ts-check

import styled from "styled-components";

const BoxPreview = styled.div`
  .box-preview {
    // display: none;
    width: 100%;
  }

  a:hover + .box-preview,
  .box-preview:hover {
    display: block;
    position: relative;
    z-index: 100;
  }
`;

const Table = styled.table`
  --table-border-color: #e5e5e5;

  background-color: #fafafa;
  border: 1px solid var(--table-border-color);
  border-collapse: collapse;
  padding: 5px;

  width: 100%;
  margin: 0 auto;
  clear: both;
  border-collapse: separate;
  border-spacing: 0;

  a {
    decoration: none;
  }

  thead {
    background: #d0d0d0;
    th {
      outline: none;
      :focus {
        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
      }
    }
  }

  th,
  td {
    padding: 8px;
  }

  tr {
    .major {
      width: 80px;
    }

    .degree {
      width: 80px;
    }

    .required-course {
      width: 160px;
    }

    .location {
      width: 77px;
    }

    .college {
      width: 180px;
    }

    .accelerated-concurrent {
      width: 120px;
    }

    .compare-fav {
      width: 110px;
    }
  }

  tbody tr {
    &:hover {
      background-color: #e7e7e8;
      background-color: #d2d2d2;
    }

    border: 1px solid var(--table-border-color);

    .info-apply .cell-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.5rem;
    }

    td .cell-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export { Table, BoxPreview };
