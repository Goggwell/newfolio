import { cn } from "@/utils/cn";
import { memo } from "react";

type TitleBarButtonProps = {
	buttonType: "close" | "minimize" | "maximize";
};

export const TitleBarButton = memo(function TitleBarButton({
	buttonType,
}: TitleBarButtonProps) {
	return (
		<button
			className={cn(
				"h-[10px] w-[10px] rounded-full",
				buttonType === "close" && "bg-error",
				buttonType === "minimize" && "bg-warning",
				buttonType === "maximize" && "bg-success",
			)}
		></button>
	);
});
