
import moment from "moment-jalaali";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Button } from ".";
import { Box } from "../box";

type DownloadExcelButtonProps = {
  fileName: string;
  refetch: () => Promise<any>;
  isFetching: boolean;
};

export const ExcelButton = ({ fileName, refetch, isFetching }: DownloadExcelButtonProps) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleDownload = (data: Blob) => {
    const blob = data;
    const url = window.URL.createObjectURL(blob);
    const link = linkRef.current;

    if (link) {
      link.href = url;
      link.download = `${fileName}-[${moment(Date.now()).format("jYYYY-jMM-jDD")}].xls`;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const handleButtonClick = async () => {
    try {
      const { data } = await refetch();
      if (data) {
        handleDownload(data);
      }
    } catch {
      toast("خطا در دریافت فایل اکسل", { type: "error" });
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <a download ref={linkRef} hidden />
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        loading={isFetching}
        sx={{ width: 140, display: "flex", alignItems: "center", gap: 1 }}
      >
        خروجی اکسل
      </Button>
    </Box>
  );
};
