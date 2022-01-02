import { Button } from "antd";
import React from "react";
import { Alert, Eye, Help, Pin } from "../components/svg/fill";
import {
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  ArrowUpOutline,
  ArrowUpRightOutline,
  BellOutline,
  CheckedOutline,
  DefaultOutline,
  DownloadOutline,
  EditOutline,
  GlobalOutline,
  HelpOutline,
  MapOutline,
  MinusOutline,
  MoreHorizontalOutline,
  PinOutline,
  PlayOutline,
  PlusOutline,
  SearchOutline,
  XOutline,
} from "../components/svg/outline";

interface Props {}
const about = (props: Props) => {
  return (
    <div className="p-5r">
      <div className="flex gap-3r">
        <Button type="primary">aaa</Button>
        <div>
          <div className="text-blue-dark60">Text</div>
          <div className="text-blue-dark30">Text</div>
          <div className="text-blue-primary">Text</div>
          <div className="text-blue-secondary">Text</div>
          <div className="text-blue-light90">Text</div>
          <div className="text-blue-light60">Text</div>
          <div className="text-blue-light30">Text</div>
        </div>
        <div>
          <div className="text-turquoise-dark90">Text</div>
          <div className="text-turquoise-dark60">Text</div>
          <div className="text-turquoise-dark30">Text</div>
          <div className="text-turquoise-primary">Text</div>
          <div className="text-turquoise-secondary">Text</div>
          <div className="text-turquoise-light90">Text</div>
          <div className="text-turquoise-light60">Text</div>
          <div className="text-turquoise-light30">Text</div>
        </div>
        <div>
          <div className="text-neutral-dark90">Text</div>
          <div className="text-neutral-dark70">Text</div>
          <div className="text-neutral-dark50">Text</div>
          <div className="text-neutral-dark30">Text</div>
          <div className="text-neutral-light90">Text</div>
          <div className="text-neutral-light70">Text</div>
          <div className="text-neutral-light50">Text</div>
          <div className="text-neutral-light30">Text</div>
        </div>
        <div>
          <div className="text-success">success</div>
          <div className="text-error">error</div>
          <div className="text-warning">warning</div>
        </div>
      </div>
      <div className="flex gap-3r">
        <div>
          <div className="h1">H1</div>
          <div className="h2">H2/Inter/Extrabold/64px</div>
          <div className="h3">H3/Inter/Extrabold/48px</div>
          <div className="h4">H4/Inter/Bold/34px</div>
          <div className="h5">H5/Inter/Bold/24px</div>
        </div>
        <div>
          <div className="sub1">Sub1/Inter/Bold/18px</div>
          <div className="sub2">Sub2/Inter/Bold/16px</div>
          <div className="body1">Body1/Inter/Regular/18px</div>
          <div className="body2">Body2/Inter/Regular/16px</div>
          <div className="body3">Body3/Inter/Regular/14px</div>
          <div className="label1">Label1/Inter/Semibold/14px</div>
          <div className="label2">Label2/Inter/Semibold/12px</div>
          <div className="tooltips">Tooltips/Inter/Semibold/10px</div>
        </div>
      </div>

      <h2>SVG</h2>
      <div className="flex gap-2r">
        <div>
          <Alert size="SMALL" />
          <Alert size="MEDIUM" />
          <Alert size="LARGE" />
        </div>
        <div>
          <Eye size="SMALL" />
          <Eye size="MEDIUM" />
          <Eye size="LARGE" />
        </div>
        <div>
          <Pin size="SMALL" />
          <Pin size="MEDIUM" />
          <Pin size="LARGE" />
        </div>
        <div>
          <Help size="SMALL" />
          <Help size="MEDIUM" />
          <Help size="LARGE" />
        </div>
        <div>
          <ArrowDownOutline size="SMALL" />
          <ArrowDownOutline size="MEDIUM" />
          <ArrowDownOutline size="LARGE" />
        </div>
        <div>
          <ArrowLeftOutline size="SMALL" />
          <ArrowLeftOutline size="MEDIUM" />
          <ArrowLeftOutline size="LARGE" />
        </div>
        <div>
          <ArrowRightOutline size="SMALL" />
          <ArrowRightOutline size="MEDIUM" />
          <ArrowRightOutline size="LARGE" />
        </div>
        <div>
          <ArrowUpOutline size="SMALL" />
          <ArrowUpOutline size="MEDIUM" />
          <ArrowUpOutline size="LARGE" />
        </div>
        <div>
          <ArrowUpRightOutline size="SMALL" />
          <ArrowUpRightOutline size="MEDIUM" />
          <ArrowUpRightOutline size="LARGE" />
        </div>
        <div>
          <BellOutline size="SMALL" />
          <BellOutline size="MEDIUM" />
          <BellOutline size="LARGE" />
        </div>
        <div>
          <CheckedOutline size="SMALL" />
          <CheckedOutline size="MEDIUM" />
          <CheckedOutline size="LARGE" />
        </div>
        <div>
          <DefaultOutline size="SMALL" />
          <DefaultOutline size="MEDIUM" />
          <DefaultOutline size="LARGE" />
        </div>
        <div>
          <DownloadOutline size="SMALL" />
          <DownloadOutline size="MEDIUM" />
          <DownloadOutline size="LARGE" />
        </div>
        <div>
          <EditOutline size="SMALL" />
          <EditOutline size="MEDIUM" />
          <EditOutline size="LARGE" />
        </div>
        <div>
          <GlobalOutline size="SMALL" />
          <GlobalOutline size="MEDIUM" />
          <GlobalOutline size="LARGE" />
        </div>
        <div>
          <HelpOutline size="SMALL" />
          <HelpOutline size="MEDIUM" />
          <HelpOutline size="LARGE" />
        </div>
        <div>
          <MapOutline size="SMALL" />
          <MapOutline size="MEDIUM" />
          <MapOutline size="LARGE" />
        </div>
        <div>
          <MinusOutline size="SMALL" />
          <MinusOutline size="MEDIUM" />
          <MinusOutline size="LARGE" />
        </div>
        <div>
          <MoreHorizontalOutline size="SMALL" />
          <MoreHorizontalOutline size="MEDIUM" />
          <MoreHorizontalOutline size="LARGE" />
        </div>
        <div>
          <PinOutline size="SMALL" />
          <PinOutline size="MEDIUM" />
          <PinOutline size="LARGE" />
        </div>
        <div>
          <PlayOutline size="SMALL" />
          <PlayOutline size="MEDIUM" />
          <PlayOutline size="LARGE" />
        </div>
        <div>
          <PlusOutline size="SMALL" />
          <PlusOutline size="MEDIUM" />
          <PlusOutline size="LARGE" />
        </div>
        <div>
          <SearchOutline size="SMALL" />
          <SearchOutline size="MEDIUM" />
          <SearchOutline size="LARGE" />
        </div>
        <div>
          <XOutline size="SMALL" />
          <XOutline size="MEDIUM" />
          <XOutline size="LARGE" />
        </div>
      </div>

      <h2>Button</h2>
      <div className="flex gap-1r mb-1r">
        <button className="btn-contained btn-lg">Contained 64</button>
        <button disabled className="btn-contained btn-lg">
          Contained 64
        </button>
        <button className="btn-contained btn-md">Contained 40</button>
        <button disabled className="btn-contained btn-md">
          Contained 40
        </button>
      </div>
      <div className="flex gap-1r mb-1r">
        <button className="btn-outlined btn-lg">outlined 64</button>
        <button disabled className="btn-outlined btn-lg">
          outlined 64
        </button>
        <button className="btn-outlined btn-md">outlined 40</button>
        <button disabled className="btn-outlined btn-md">
          outlined 40
        </button>
      </div>
      <div className="flex gap-1r mb-1r">
        <button className="btn-text btn-lg">text 64</button>
        <button disabled className="btn-text btn-lg">
          text 64
        </button>
        <button className="btn-text btn-md">text 40</button>
        <button disabled className="btn-text btn-md">
          text 40
        </button>
        <h1>a</h1>
      </div>
    </div>
  );
};

export default about;
