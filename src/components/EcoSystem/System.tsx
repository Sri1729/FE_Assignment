import React from "react";
import { ImageComponet } from "../Image";

export const System = () => {
  return (
    <div className="flex flex-1 flex-col ">
      <div className="relative pt-10 flex flex-1 align-center justify-center">
        <div className="relative">
          <ImageComponet fileName="bg1.svg" />

          <SystemIcon
            title="Financial Planning"
            fileName="financial_planning.svg"
            className="-top-10 left-1/2 transform -translate-x-1/2"
          />

          <SystemIcon
            title="Tax Planning"
            fileName="tax_planning.svg"
            className="top-12 left-20"
          />

          <SystemIcon
            title="Insurance Management"
            fileName="insurance_management.svg"
            className="top-12 right-20"
          />

          <SystemIcon
            title="Investment Advisory"
            fileName="investment_advisory.svg"
            className="top-44 left-36"
          />

          <SystemIcon
            title="Legacy Planning"
            fileName="legacy_planning.svg"
            className="top-44 right-36"
          />

          <SystemIcon
            title="Wealth Management"
            fileName="wealth_management.svg"
            className="bottom-4 -left-20"
          />

          <SystemIcon
            title="Retirement Planning"
            fileName="retirement_planning.svg"
            className="bottom-4 -right-20"
          />
        </div>
      </div>
      <div className=" border-b border-[#EEEEF0]"></div>
      <div className="relative flex flex-1 align-center justify-center">
        <ImageComponet fileName="bg3.svg" />

        <div className="absolute w-80 top-5 text-sm text-center left-1/2 transform -translate-x-1/2">
          <h1 className="font-bold">Unified Financial Dashboard</h1>
          <p className="text-xs text-[#757682]">
            our central hub for managing investments, cash flow, taxes, and
            estate planning
          </p>
        </div>
      </div>
      <div className="relative flex flex-1 w-[760px] align-center justify-center self-center mt-2">
        <DashboardIcon
          icon="investment_portfolios.svg"
          name="Investment Portfolios"
        />

        <DashboardIcon icon="client_portal.svg" name="Client Portal" />
        <DashboardIcon
          icon="report_analytics.svg"
          name="Reporting & Analytics"
        />
        <DashboardIcon icon="tax_documentaion.svg" name="Tax Documentation" />
      </div>
    </div>
  );
};

const SystemIcon = ({
  fileName,
  title,
  className,
}: {
  fileName: string;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`absolute flex flex-col justify-center align-center items-center ${
        className ?? ""
      }`}
    >
      <div
        className="p-2 flex rounded-xl shadow-custom-md"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 25%, #F9FAFB 100%)",
        }}
      >
        <ImageComponet fileName={fileName} />
      </div>
      <div className="bg-[#3A3A400D] mt-2 py-2 px-3 rounded-xl">
        <p className="text-base">{title}</p>
      </div>
    </div>
  );
};

const DashboardIcon = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center align-center">
      <ImageComponet fileName={icon} className="h-14 w-14" />
      <p className="text-xs">{name}</p>
    </div>
  );
};
