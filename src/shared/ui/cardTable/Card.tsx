import React from "react";
import classNames from "classnames";

type CardField = {
  title: string;
  className?: string;
  value?: string;
  test?: React.ReactNode;
};

type CardColumn = {
  fields: CardField[];
};

type CardTableProps = {
  title?: string;
  subtitle?: string;
  logo?: React.ReactNode;
  columns: CardColumn[];
  iconDetail?: React.ReactNode;
};

export const CardTable = ({
  title,
  subtitle,
  logo,
  columns,
  iconDetail,
}: CardTableProps) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.06)] p-4 flex flex-col gap-4 mb-5 rounded-medium">
      {/* Header */}
      <div className="flex justify-between items-center  ">
        <div className="flex items-center justify-start gap-2">
          {logo && (
            <div className="w-12 h-12 rounded-full border border-[#E8E8E8] flex justify-center items-center">
              {logo}
            </div>
          )}

          <div className="flex flex-col text-right max-w-[73%]">
            <h3 className="text-sm font-semibold text-gray-800 max-w-auto">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-regular text-[#797979]">{subtitle}</p>
            )}
          </div>
        </div>
        {iconDetail && <div>{iconDetail}</div>}
      </div>

      {/* Table */}
      <div className="border border-[#C6C6C6] rounded-xl overflow-hidden rounded-medium">
        {columns[0]?.fields.map((field, idx) => (
          <div
            key={idx}
            className={classNames(
              "flex flex-row text-sm font-semibold h-12",
              idx === 0 ? "border-b border-[#C6C6C6]" : "",
            )}
          >
            <div
              className={classNames(
                "flex justify-center items-center border-l border-[#E8E8E8] text-xs font-medium",
                "w-24",
                idx === 0
                  ? "bg-[#F5F5F5] text-gray-300"
                  : "bg-primary-50 text-primary",
              )}
            >
              {field.title}
            </div>

            <div
              className={classNames(
                "flex-1 flex  items-center px-2 font-bold text-xs",
                idx === 0 ? "bg-[#fff] text-gray-300" : "",
                field.test ? "justify-between " : "justify-start",
              )}
            >
              {field.value}
              {field?.test}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
