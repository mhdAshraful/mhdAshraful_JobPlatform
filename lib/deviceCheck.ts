import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export const useDeviceCheck = (): DeviceType => {
	const getDevice = (): DeviceType => {
		const width = window.innerWidth;

		if (width < 768) return "mobile";
		if (width < 1024) return "tablet";
		return "desktop";
	};

	const [device, setDevice] = useState<DeviceType>("desktop");

	useEffect(() => {
		const updateDevice = () => setDevice(getDevice());

		updateDevice(); // initial check
		window.addEventListener("resize", updateDevice);

		return () => {
			window.removeEventListener("resize", updateDevice);
		};
	}, []);

	return device;
};
