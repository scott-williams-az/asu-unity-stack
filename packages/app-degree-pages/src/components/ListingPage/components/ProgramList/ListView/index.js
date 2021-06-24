/* eslint-disable react/no-danger */
// @ts-check
import { sanitize } from "dompurify";
import React, { Fragment, useContext } from "react";

import { ListingPageContext } from "../../../../../core/context";
import { GRID_PROGRAMS_ID } from "../../../../../core/models";
import { degreeDataPropResolverService } from "../../../../../core/services";
import { idGenerator } from "../../../../../core/utils";
import { degreeListPropTypes } from "../programs-prop-types";
import { columns as configColumns } from "./index.colums.config";
import { Table } from "./index.style";

/** @typedef {import("../../../../../core/models/listing-page-types").GridColumn}  GridColumn */
/** @typedef {import("../../../../../core/models/shared-types").DegreeDataPropResolver}  DegreeDataPropResolver */

/**
 *
 * @param {{
 *  resolver: DegreeDataPropResolver
 *  id: string
 * }} props
 */
const renderInfo = ({ resolver, id }) => (
  <div>
    <header>
      <strong>Program Description:</strong>
    </header>
    <input className="togle-more-text" type="checkbox" id={`#${id}`} />
    <div
      className="desc-long"
      id={id}
      dangerouslySetInnerHTML={{
        __html: sanitize(resolver.getDescrLongExtented()),
      }}
    />
    <label className="label-more-less" htmlFor={`#${id}`}>
      <span className="label-more">[...more]</span>
      <span className="label-less">[...less]</span>
    </label>
  </div>
);

/**
 *
 * @param {{
 *  resolver: DegreeDataPropResolver
 * }} props
 * @returns
 */
const renderExtraInfo = ({ resolver }) => (
  <div>
    <div>
      <strong>Additional Program Fee: </strong>
      {resolver.hasAsuProgramFee() && "Yes"}
    </div>
    <div>
      <strong>Second Language Requirement: </strong>
      {resolver.hasAsuLangReqFlag()
        ? resolver.getAcadPlanText() || "Yes"
        : "No"}
    </div>

    <div>
      {resolver.hasMathReqFlag() && (
        <div>
          <strong>First Required Math Course:</strong>
          <span>{resolver.getAdditionalMathReqCourse()}</span>
          {resolver.getOtherMathReqCourse() && (
            <span
              dangerouslySetInnerHTML={{
                __html: sanitize(resolver.getOtherMathReqCourse()),
              }}
            />
          )}
        </div>
      )}
    </div>

    <div>
      <strong>Math Intensity:</strong>
      {resolver.getMathIntensity()}
    </div>
  </div>
);

const genRowId = idGenerator(`row-`);
// * @param {import("react").Ref<HTMLTableElement>} ?ref

/**
 *
 * @param {import("..").GridListingProps} props
 * @returns {JSX.Element}
 */
const ListView = ({ programms, loading }) => {
  /** @type {{current: HTMLTableElement}} */
  const tableRef = React.useRef(null);
  /** @type {{current: HTMLTableSectionElement}} */
  const tbodyRef = React.useRef(null);

  const { columSettings } = useContext(ListingPageContext);
  const columns = columSettings?.hideCollegeSchool
    ? configColumns.filter(c => c.dataKey !== "CollegeSchool")
    : configColumns;

  const setOpenRowIndex = (rowIndex, selected) => {
    const rows = tbodyRef.current.children;
    Array.prototype.forEach.call(
      rows,
      (r, i) => i !== rowIndex && r.setAttribute("data-is-open", "false")
    );

    const currentRow = tbodyRef.current.children[rowIndex];
    currentRow.setAttribute("data-is-open", String(selected));
  };

  return (
    <section className="container mb-4">
      <Table id={GRID_PROGRAMS_ID} ref={tableRef} data-loading={loading}>
        <thead>
          <tr role="row">
            {columns.map(col => (
              <th
                key={col.dataKey}
                tabIndex={0}
                className={`${col.className}`}
                aria-controls="programsTable"
                aria-label={col.ariaLabel}
              >
                {col.headerTemplate?.() || <span>{col.label}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={tbodyRef}>
          {
            // programms
            programms.map((row, rowCurrentIndex) => {
              const rowId = genRowId.next().value;
              const rowIndex = rowCurrentIndex * 2;
              const resolver = degreeDataPropResolverService(row);

              return (
                <Fragment key={rowId}>
                  <tr key={rowId} role="row">
                    {columns.map(col => (
                      <td
                        key={`${rowId}-${col.dataKey}`}
                        className={`${col.className}`}
                      >
                        {col.contentTemplate?.({
                          resolver,
                          col,
                          row,
                          rowIndex,
                          onClick: setOpenRowIndex,
                        })}
                      </td>
                    ))}
                  </tr>

                  <tr key={`${rowId}-row-info`} className="row-info">
                    <td key={`${rowId}-info`} colSpan={3}>
                      {renderInfo({ resolver, id: `${rowId}-more-text` })}
                    </td>
                    <td key={`${rowId}-extra-info`} colSpan={2}>
                      {renderExtraInfo({ resolver })}
                    </td>
                  </tr>
                </Fragment>
              );
            })
          }
        </tbody>
      </Table>
    </section>
  );
};

ListView.propTypes = {
  ...degreeListPropTypes,
};

export { ListView };
